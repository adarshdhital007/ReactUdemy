import React, { useState } from 'react';

const ReactionClick = ({ onReactionClick }) => {
  const [reaction, setReaction] = useState('');

  const handleReactionClick = (reaction) => {
    setReaction(reaction);
    onReactionClick(reaction);
  };

  return (
    <div>
      <p>Choose a reaction:</p>
      <button onClick={() => handleReactionClick('Like')}>👍🏻</button>
      <button onClick={() => handleReactionClick('Love')}>🩷</button>
      <button onClick={() => handleReactionClick('Haha')}>😂</button>
      <button onClick={() => handleReactionClick('Wow')}>😲</button>
      <button onClick={() => handleReactionClick('Sad')}>🙁</button>
      <button onClick={() => handleReactionClick('Angry')}>😡</button>
      {reaction && <p>You reacted with: {reaction}</p>}
    </div>
  );
};

export default ReactionClick;
