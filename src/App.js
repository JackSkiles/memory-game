import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemoryCard from './components/MemoryCard'

function App() {
  const projects = [
    { name: 'Project Awesome', likes: 10 },
    { name: 'Project Awesomest', likes: 8 },
    { name: 'The Real project awesome', likes: 6 },
    { name: 'Project Sparkles', likes: 2 },
    { name: 'BreakfastTime', likes: 9 },
    { name: 'Eggz.io', likes: 5 },
    { name:'MakinBaconPancakes', likes: 10 }
  ];
  return (
    <div className="App" title="Memory Game" subtitle="Match cards to win">
      <header className="App-header">
        <div>
          <h1>
            Memory Game
          </h1>
        </div>
        <div className="subtitle-Cont">
          <subtitle className="subtitle">
            Match cards to win
          </subtitle>
        </div>
      </header>
      <div className="card-holder">
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      </div>
      <div>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      </div>
      <div>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      </div>
      <div>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      <MemoryCard></MemoryCard>
      </div>
      {/* <MemoryCard></MemoryCard> */}
      {/* { projects.map((project, index) => {
        return <div><MemoryCard 
        ></MemoryCard></div>
      })} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eat pancakes!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
