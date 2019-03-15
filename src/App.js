import React, { Component } from 'react';

import './App.css';
import { Container, Button } from 'semantic-ui-react';

class App extends Component {

  state = { option: ' ', computer: ''}

  handleRock = () => { 
    this.setState( state => {
      let choices = ["Rock", "Paper", "Scissors"]
      let choice =  "Rock";
      let rand = choices[Math.floor(Math.random() * choices.length)];
      if (choice === rand){
        return { option: "Tie", playerChoice: "Rock", comp: rand }
      }
      if (rand === "Scissors"){
        return { option: "You Win", playerChoice: "Rock", comp: rand }
      }
      if (rand === "Paper"){
        return {option: "You Lose", playerChoice: "Rock", comp: rand }
      }
    })
  }

  handlePaper = () => {
    this.setState( state => {
      let choices = ["Rock", "Paper", "Scissors"]
      let choice = "Paper";
      let rand = choices[Math.floor(Math.random() * choices.length)];
      if (choice === rand){
        // return { option: "TIE" }
        return { option: "Tie", playerChoice: "Paper", comp: rand }
 
      }
      if (rand === "Rock") {
        // return { option: "You Win" }
        return { option: "You Win", playerChoice: "Paper", comp: rand }
 
      }
      if (rand === "Scissors"){
        return { option: "You Lose", playerChoice: "Paper", comp: rand }
      }
    })
  }
  

  handleScissors = () => {
    this.setState( state => {
      let choices = ["Rock", "Paper", "Scissors"]
      let choice = "Scissors";
      let rand = choices[Math.floor(Math.random() * choices.length)];
      if (choice === rand){
        return { option: "Tie", playerChoice: "Scissors", comp: rand }
      }
      if (rand === "Paper"){
        return { option: "You Win", playerChoice: "Scissors", comp: rand }
      }
      if (rand === "Rock"){
        return { option: "You Lose", playerChoice: "Scissors", comp: rand }
      }
    })
  }

  render = () => {
    return (
      <Container>
        <h1 style={{marginTop: "25px", display: "flex", justifyContent: "center", }}>This is Rock Paper Scissors</h1>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

    
        <Button onClick={(e) => this.handleRock(e)}>Rock</Button>
        <Button onClick={(e) => this.handlePaper(e)}>Paper</Button>
        <Button onClick={(e) => this.handleScissors(e)}>Scissors</Button>




        <p>{this.state.option}</p>
        <p>Player Choice: {this.state.playerChoice}</p>
        <p>Computer Choice: {this.state.comp}</p>
        <p>Wins:</p>
        <p>Losses:</p>
        <p>Ties:</p>
      </Container>

      


      
    );
  }
}
  

export default App;
