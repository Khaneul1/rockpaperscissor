import './App.css';
import Box from './component/Box';

//1. 박스 2개 (타이틀/사진 정보/결과)
//2. 가위바위보 버튼이 있음
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 됨
//5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 가림
//6. 승패 결과에 따라 테두리 색 변경됨 (이기면 초록/지면 빨강/비기면 검정)

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://cdn-icons-png.flaticon.com/256/231/231640.png',
  },
  scissor: {
    name: 'Scissors',
    img: 'https://cdn-icons-png.flaticon.com/512/4892/4892290.png',
  },
  paper: {
    name: 'Paper',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmeB0eLj13xkYiQAaZ9gKOtpaae0vNoXBVnWnC7RgwUdu7ULyhkmqRRG77naLXXu31qc&usqp=CAU',
  },
};
function App() {
  const play = (userChoice) => {
    console.log('선택됨', userChoice);
  };
  return (
    <div>
      <div className="main">
        <Box title="You" />
        <Box title="Computer" />
      </div>
      <div className="main">
        {/*play('scissors') 이런 식으로 해버리면 클릭도 안 했는데 함수를
        실행시켜버림. 콜백함수처럼 ()=>play('scissors')로 해 줘야 함!!*/}
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
