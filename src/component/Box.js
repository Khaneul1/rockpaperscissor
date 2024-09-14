import React from 'react';

/// 컴포넌트는 항상 대문자로 시작해야 함!! 그래야 컴포넌트로 인식됨
const Box = (props) => {
  console.log('props', props);
  let result;
  if (
    props.title === 'Computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      {/* 유저가 넘겨준 아이템 값이 있다면(props.item / null이 아니라면) 아이템에 있는 이미지값(props.item.img)을 불러와라*/}
      {/* 가드 값 꼭 넣어 주기 처음부터 명확하게 주는 건 필요 없음!! */}
      {/* 내가 선택하기 전에 값이 null인 것, 다이나믹한 값을 가지고 있는 것엔 꼭 가드 값 필요 */}
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
