import React from 'react';

/// 컴포넌트는 항상 대문자로 시작해야 함!! 그래야 컴포넌트로 인식됨
const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
