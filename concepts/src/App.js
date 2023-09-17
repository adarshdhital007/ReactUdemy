import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('');
  
  const loadDoc = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setContent(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="demo">
      <h2>The Fetch API in React</h2>
      <button type="button" onClick={loadDoc}>Change Content</button>
      <div>{content}</div>
    </div>
  );
}

export default App;
