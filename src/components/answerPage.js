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
        console.log(this.props.data)
        //Figure out a way to display if user got question correct or incorrect
    return(
        <div className="answerSection">
            <ItemImage />
            <p>Correct Price was:
                 <span className='correctAnswer'>
            {this.props.data.bestBuyCall.currentProduct.products[0].regularPrice}
                 </span>
            </p>
           <Link to='/gamepage'><button onClick={()=> {
               this.props.dispatch(addScore(this.props.data.priceGuess.score + 100));
               this.props.dispatch(changeQuestion());
               
               }}>Next Guess </button></Link>
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
