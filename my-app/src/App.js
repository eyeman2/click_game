import React, { Component } from 'react';
import Footer from '../src/components/Footer';
import './App.css';
import Tags from "./Tags.json";
import Nav from "../src/components/Nav"
import Cards from "../src/components/Cards"

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    Tags
};
handleOrder = () => {
  let tag = Tags.length;
  let temp;
  let index;

  while (tag > 0){
    index = Math.floor(Math.random() * tag);
    tag --;

    temp = Tags[tag];
    Tags[tag] = Tags[index];
    Tags[index] = temp;
    
  }
  this.setState({Tags})    

};
// newGame = () => {
//   Tags;
//   let newTag = Tags.slice(Tags, Tags++);
//   if(newTag === newTag.id){
//     alert("You lost.  Click image to start over");
//     this.setState({ score: this.state.score = 0 })
//   }
// console.log(newTag)
// console.log(this.id)
// console.log(Tags)
// }

handleScore = () => {
  this.setState({ score: this.state.score + 1});
  if (this.state.score >= this.state.topScore) {
    this.setState({ topScore: this.state.topScore + 1})
  }
  if (this.state.score === 11){

    this.setState({score: this.state.score = 0})
    alert("Congratulations!  You've won.");
  }
  this.handleOrder();
  // this.newGame()

};

  render() {
    return (
      
      <div className="App">
      <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
      />
        <header className="App-header">
          <h1 className="App-title">Clickity Clack</h1> 
          <h3> Choose each picture...</h3>

        </header>
        <p className="App-intro">
          ONCE
        </p>
        <div className="container">
  

        {this.state.Tags.map(tag => 
        <Cards onClick={this.handleScore}

        id={tag.id}
        key={tag.id}
        img={tag.img}
        name={tag.name}
        />
      )}
      
      </div>
      {/* Try to add a timer so the words come after the gif */}
      
      <Footer />
      </div>
    );
  }
}

export default App;
