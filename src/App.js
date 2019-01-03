import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
  <div className='LandingPage'>
    <nav>
      <h1>Price Guess?</h1>
      {/* <p>Tag Line Text</p> */}
      <Link id="instructions" to='/instructions'><p>How To Play </p> </Link>
    </nav>
    <main>  
      <h2>Can You Guess That Price?</h2>
      <p><span className= 'landingParagraph'>PriceGuess is a spin-off of the popular gameshow, the Price is Right. 
      
      You're presented with 4 choices of prices for a BestBuy product. 
      
      Choose the correct answer before the timer ends. </span> </p>
      <Link to='/gamepage'><a><span className='startGame'>Start Guessing!</span></a></Link>
      
    </main>
    </div>
    )
  }
}

export default App; 
