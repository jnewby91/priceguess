import React from 'react'; 

import Countdown from 'react-countdown-now'; 
import {chosenAnswer} from '../actions'
import './scoreboard.css' ;
import {connect} from 'react-redux'; 


const TimesUp = () =>  <p>You Ran Out of Time!</p>; 
const renderer =({seconds, completed}) => {
    if(completed){
      return <TimesUp />
    }
    else{
        return {seconds}
    }
};

 function Scoreboard(props){
    //  let price = 0; 
    //  let value = props.data.currentProduct.products[0].regularPrice;
    //  let productURL= props.data.currentProduct.products[0].url; 
    //  let name= props.data.currentProduct.products[0].name; 
    //  let itemPrice= props.data.currentProduct.products[0].regularPrice; 

    //  console.log(value, productURL,name,itemPrice)
    return (
        <div className="scoreboard">
            <h4 className="timer">
                Timer: <Countdown date={Date.now() + 10000}
                onComplete={()=> {
                    // chosenAnswer(price)
                    window.location = '/answerpage'
                }}
                /> seconds      
            </h4>
            <h4 className="score">Score: {props.score} points</h4>
            <h4 className="question">questions: {props.questions} /10</h4>
        </div>
    )
}  

const mapStatetoProps = state => ({
    score: state.priceGuess.score,
    questions: state.priceGuess.questions
})

export default connect(mapStatetoProps)(Scoreboard)



