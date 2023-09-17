import React, { useState } from "react";
import PictureBox from "./PictureBox";
import ReactionClick from "./ReactionClick";

const MessageBox = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleReaction = (reaction) => {
    console.log(`User reacted with: ${reaction}`);
  };
  return (
    <div>
      <div
        className="flex 
      justify-center
       items-center 
       flex-col	
       text-center 
       min-h-screen    
       "
      >
        <div
          className="
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
          "
        >
          <div>
            <PictureBox />
          </div>
          <div>
            Hello , this is Taylor. How are you doing ? It's been a while since
            I have done this component.
          </div>
        </div>
        <div className="tooltip-container">
          <button
            className="text-white"
            onClick={() => setShowTooltip(!showTooltip)}
          >
            🙂
          </button>
          {showTooltip && (
            <div className="tooltip-content">
              <ReactionClick onReactionClick={handleReaction} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;