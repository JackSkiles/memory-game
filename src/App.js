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
  constructor(props){
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }
  unflipCards(card1Index, card2Index){
    const card1 = this.state.deck[card1Index];
    const card2 = this.state.deck[card2Index];
    card1.isFlipped = false;
    card2.isFlipped = false;
    const newDeck = this.state.deck.map((card, index) => {
      if(card1Index === index){
        return card1
      }
      if(card2Index === index){
        return card2
      }
      return card
    })
    this.setState({deck:newDeck})
  }
    pickCard(cardIndex){
      if(this.state.deck[cardIndex].isFlipped){
        return
      }
      const cardToFlip = {...this.state.deck[cardIndex]}
      cardToFlip.isFlipped = true;
      let newPickedCards = this.state.pickedCards.concat(cardIndex);
      const newDeck = this.state.deck.map((card, index) => {
        if(cardIndex === index){
          return cardToFlip;
        }
        return card;
      });
      console.log(this.state.pickedCards)
      if(newPickedCards.length === 2){
        const card1Index = newPickedCards[0];
        const card2Index = newPickedCards[1];
        if(newDeck[card1Index].symbol != newDeck[card2Index].symbol ){
          setTimeout(() => {this.unflipCards(card1Index, card2Index)}, 1000);
        }
        newPickedCards = [];
      }
      this.setState({deck:newDeck, pickedCards:newPickedCards});
    }

    render() { 
      const cardsJSX = this.state.deck.map((card, index) => {
        return <MemoryCard
        pickCard={this.pickCard.bind(this,index)}
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
