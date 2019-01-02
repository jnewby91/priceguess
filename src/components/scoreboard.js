import React from 'react'; 

import Countdown from 'react-countdown-now'; 
import {chosenAnswer} from '../actions'
import './scoreboard.css' ;
import {Redirect} from 'react-router-dom';
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

 class  Scoreboard extends React.Component{
     constructor(props){
         super(props)
         this.state = {
             timerDone: false
         }
         
     }

     render(){
        if(this.state.timerDone) {
            return ( <Redirect to='/answerpage' />)

        }


     let price = 0; 
     let value = this.props.data.bestBuyCall.currentProduct.products[0].regularPrice;
     let productURL= this.props.data.bestBuyCall.currentProduct.products[0].url; 
     let name= this.props.data.bestBuyCall.currentProduct.products[0].name; 
     let itemPrice= this.props.data.bestBuyCall.currentProduct.products[0].regularPrice; 

     console.log(value, productURL,name,itemPrice)
    return (
        <div className="scoreboard">
            {/* <h4 className="timer"> 
                Timer: <span className="numberEmphasis"> 
                <Countdown date={Date.now() + 8000}
                onComplete={()=> {
                    this.props.dispatch(chosenAnswer(price, value, productURL, name, itemPrice))
                    this.setState({timerDone: true});
                }}
                /> seconds 
            </span>    
            </h4> */}
            <h4 className="score">Score:<span className="numberEmphasis"> {this.props.data.priceGuess.score} points</span></h4>
            <h4 className="question">Questions: 
                <span className="numberEmphasis"> {this.props.data.priceGuess.questions} /10
                </span>
            </h4>
        </div>
    )

     }



}  

const mapStatetoProps = state => {
    let data = {
        bestBuyCall: {
            currentProduct: {
                products: [
                    {
                        regularPrice: null, 
                        url: null , 
                        name: null ,
                        
                    }
        
                ]
              }
            }

        }
     
  
      if(state.bestBuyCall) {
        data = state
      }
  
      return ({
        data
      })
  
  }


export default connect(mapStatetoProps)(Scoreboard)



