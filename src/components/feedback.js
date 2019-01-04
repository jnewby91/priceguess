import React from 'react'; 
import './feedback.css'; 
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';


function Feedback(props){
let correct = 0; 
let incorrect = 0; 

    for(let i=0; i< props.data.priceGuess.playerGuesses.length; i++){
        if(props.data.priceGuess.playerGuesses[i].correct){
            correct ++; 
        }  
        else if(!props.data.priceGuess.playerGuesses[i].correct){
            incorrect ++; 
        }
    }

    return(
        <div className='Feedback'>
            <h2>HOW DID YOU GUESS?</h2>
            <p>You Guessed <span id="rightScore">{correct}</span> right.</p>
            <p>You Guessed <span id="wrongScore">{incorrect}</span> wrong.</p>
            <p>Score: <span id="score">{props.data.priceGuess.score}</span></p>
            <Link to='/'><button type="submit">PLAY AGAIN </button></Link>
            <Link to='/featureditems'><button type="submit">Review Items Shown</button></Link>

        </div>
    ) 
}

 const mapStatetoProps = state => {
    let data = {
        currentProduct: {
          products: [
  
          ]
        }
      }
  
      if(state.bestBuyCall) {
        data = state
      }
  
      return ({
        data
      })
}

export default connect (mapStatetoProps) (Feedback);