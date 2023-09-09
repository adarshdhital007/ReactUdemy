import React from 'react'
import PictureBox from './PictureBox'
import ReactionClick from './ReactionClick'

const MessageBox = () => {
  const handleReaction = (reaction) => {
    console.log(`User reacted with: ${reaction}`);
  };
  return (
    <div>
      <div className='flex 
      justify-center
       items-center 
       text-center 
       min-h-screen    
       '>
        <div className='
          flex
         border-zinc-500
          border-4
          rounded-2xl
          h-[150px]
          w-[390px]
          p-4   
          items-center
          justify-center
          bg-[#F1EFF0]
          '>
          <div>
            <PictureBox/>
          </div>
          <div>
          Hello , this is Taylor. How are you doing ? It's been a while since I have done this component.
          </div>
        </div>
        <ReactionClick onReactionClick={handleReaction}/>
      </div>
      </div>
  )
}

export default MessageBox