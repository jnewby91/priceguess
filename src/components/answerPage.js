import React from 'react'; 
import './answerPage.css'; 
import {Link} from 'react-router-dom'; 
import ItemImage from './itemImage';
import { connect } from 'react-redux';
import { addScore, changeQuestion } from '../actions';



export class AnswerPage extends React.Component{

    // componentWillUnmount(){
    // }
    render() {  
        //Figure out a way to display if user got question correct or incorrect
        let gamepage = '/gamepage'
        if(this.props.data.priceGuess.playerGuesses.length === 10){
            gamepage = '/feedback'
        }
    return(
        <div className="answerSection">
            <div className='answerPageBackground'>
            <div className='itemCard'>
            <ItemImage />
            <p>Correct Price was:
                 <span className='correctAnswer'>
            {this.props.data.bestBuyCall.currentProduct.products[0].regularPrice}
                 </span>
            </p>
            </div>
            <div className='theButton'>
            <Link to={gamepage}>
           
                <button  onClick={()=> {
                    this.props.dispatch(addScore(this.props.data.priceGuess.score + 100));
                    this.props.dispatch(changeQuestion());
                    
                    }}><h3>Next Guess</h3> 
                </button>
            </Link>
                </div>
                </div>
        </div>
    )
    }
}

const mapStatetoProps = state => {
    let data = {
        currentProducts: {
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

export default connect(mapStatetoProps) (AnswerPage); 
