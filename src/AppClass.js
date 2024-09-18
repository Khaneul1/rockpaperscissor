import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
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
  render() {
    return (
      <div>
        <div className="info-text">
          <p>Mini Game</p>
        </div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="Btn">
          {/*play('scissors') 이런 식으로 해버리면 클릭도 안 했는데 함수를
        실행시켜버림. 콜백함수처럼 ()=>play('scissors')로 해 줘야 함!!*/}
          <button className="userBtn" onClick={() => this.play('scissors')}>
            가위
          </button>
          <button className="userBtn" onClick={() => this.play('rock')}>
            바위
          </button>
          <button className="userBtn" onClick={() => this.play('paper')}>
            보
          </button>
        </div>
      </div>
    );
  }
}
