import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerId = useRef(0);

  useEffect(() => {
    // 시작할 떄 한번 돌아요
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000); // 한번 실행
    return () => {
      clearInterval(timerId.current);
    };
  }, []);
  const stop = () => {
    // 멈춰요 시간
    clearInterval(timerId.current);
  };
  const restart = () => {
    // 시작 카운트를
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1); //일초에 count 1 더해줌
    }, 1000);
  };
  const reset = () => {
    // count = 0이고 시간 멈추고
    setCount(0);
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>{count}</p>
      <button onClick={stop}>중지</button>
      <button onClick={restart}>재시작</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
};

export default Timer;
