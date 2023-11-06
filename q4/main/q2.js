import React, { useRef } from "react";

const Q2 = () => {
  const value = useRef([]);
  const clickpush = (bool) => {
    value.current.push(bool);
    console.log(value.current);
    if (value.current.filter((e) => e == true).length >= 3)
      alert("테스트가 종료되었습니다.");
  };
  return (
    <div>
      <button onClick={() => clickpush(true)}>알아요</button>
      <button onClick={() => clickpush(false)}>몰라요</button>
    </div>
  );
};

export default Q2;
