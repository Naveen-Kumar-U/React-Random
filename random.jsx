// https://onecompiler.com/react

import React, { useState } from 'react';

function App() {
  
  // random position inside a box
  
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({
    top: Math.floor(Math.random() * 160),
    left: Math.floor(Math.random() * 160),
  });

  const handleClick = () => {
    setCount(count + 1);
    setPosition({
      top: Math.floor(Math.random() * 160),
      left: Math.floor(Math.random() * 160),
    });
  };

  const styles = {
    main: {
      position: 'relative',
      height: '200px',
      width: '200px',
      backgroundColor: '#62aad9',
      overflow: 'hidden'
    },
    posit: {
      position: 'absolute',
      top: `${position.top}px`,
      left: `${position.left}px`,
      transition: 'top 0.3s ease, left 0.3s ease'
    }
  };
  
  // use onClick to move on Click!
  
  return (
    <div style={styles.main}>
      <button onMouseEnter={handleClick} style={styles.posit}> 
        count {count}
      </button>
    </div>
  );
}

export default App;
