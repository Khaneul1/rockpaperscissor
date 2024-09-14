import { useState } from 'react';
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
    img: 'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://t4.ftcdn.net/jpg/02/55/26/63/360_F_255266320_plc5wjJmfpqqKLh0WnJyLmjc6jFE9vfo.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어 주는 함수
    console.log('item array', itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); //0부터 1 사이에 있는 값 랜덤 반환
    console.log('random value', randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    //user == computer tie(비김)
    //user == rock, computer == "scissors" user win
    //user == rock, computer == "paper" user lose
    //user == scissors, computer=="rock" user lose
    //user == scissors, computer =="paper" user win
    //user == paper, computer=="rock" user win
    //user == paper, computer =="scissors" user lose

    //user 값이 객체이기 때문에 if(user==computer) 이런 식으로 비교 못 함
    // if (user.name == computer.name) {
    //   return 'tie';
    // } else if (user.name == 'Rock') {
    //   if (computer.name == 'Scissors') {
    //     return 'win';
    //   } else {
    //     return 'lose';
    //   }
    // }
    // 이 코드 삼항연산식으로 바꾸기

    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
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
