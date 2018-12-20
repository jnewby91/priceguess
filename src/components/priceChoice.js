import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './priceChoice.css' ;
import {connect} from 'react-redux'; 
import { addScore, changeQuestion } from '../actions';
import priceShuffle from '../utilities/priceShuffle'; 

function PriceChoice(props){
    if(props.data.currentProduct.products.length) {

        let value = props.data.currentProduct.products[0].regularPrice; 

        console.log('the value is:', value); 



    // shuffle props into an array  before mapping over the buttons 
    let values = priceShuffle(value);
    console.log('the values: ', values )

    //need to map over props for each button
    let choices= values.map((price, index) => (
    <button key={index} className='priceChoice'>{price}</button>))
    
    return (
        <div className="scoreboard">
            <h3>What's The Price?</h3>
                {choices}
            <Link to='/answerpage'><button type="submit">Make Guess</button></Link>
            <button onClick={()=> props.dispatch(changeQuestion())}>Dispatch</button>
        </div>
    )
    }

    else {
        return <p>Data Not Found</p>
    }

}

const mapStatetoProps = state => {
    let data = {
        currentProduct: {
          products: [
  
          ]
        }
      }
  
      if(state.bestBuyCall) {
        data = state.bestBuyCall 
      }
  
      return ({
        data
      })
  
  }

export default connect(mapStatetoProps)(PriceChoice)