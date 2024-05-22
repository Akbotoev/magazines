import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  return (
    <div className='time'>
      <p>Прошло секунд: {seconds} c</p>
    </div>
  );
}

export default Timer;

