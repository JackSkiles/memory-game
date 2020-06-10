import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemoryCard from './components/MemoryCard'

function generateDeck(){
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø']
  let deck = [];
  for (let i = 0; i < 16; i++){
    deck.push({isFlipped: false, symbol: symbols[i%8]})
  }
  return shuffle(deck);
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
export default class App extends Component {
    pickCard(cardIndex){
      if(this.state.deck[cardIndex].isFlipped){
        return
      }
      const cardToFlip = {...this.state.deck[cardIndex]}
      cardToFlip.isFlipped = true;
      const newPickedCards = this.state.pickedCards.concat(cardIndex);
      const newDeck = this.state.deck.map((card, index) => {
        if(cardIndex === index){
          return cardToFlip;
        }
        return card;
      });
      this.setState({deck:newDeck, pickedCards:newPickedCards});
    }

    constructor(props){
      super(props);
      this.state = {
        deck: generateDeck(),
        pickedCards: []
      }
    }
    render() { 
      const cardsJSX = this.state.deck.map((card, index) => {
        return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        />
      });
      // const projects = [
      //   { name: 'Project Awesome', likes: 10 },
      //   { name: 'Project Awesomest', likes: 8 },
      //   { name: 'The Real project awesome', likes: 6 },
      //   { name: 'Project Sparkles', likes: 2 },
      //   { name: 'BreakfastTime', likes: 9 },
      //   { name: 'Eggz.io', likes: 5 },
      //   { name:'MakinBaconPancakes', likes: 10 }
      // ];
    return (
    <div className="App" title="Memory Game" subtitle="Match cards to win">
      <header className="App-header">
        <div>
          <h1>
            Memory Game
          </h1>
          <div className="subtitle-Cont">
            <h4 className="subtitle">
              Match cards to win
            </h4>
          </div>
        </div>
      </header>
      <div className="card-holder">
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    </div>
  );
  }
}
