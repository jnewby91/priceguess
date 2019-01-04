import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './priceChoice.css' ;
import {connect} from 'react-redux'; 
import {chosenAnswer} from '../actions';
import priceShuffle from '../utilities/priceShuffle'; 

function PriceChoice(props){
    if(props.data.currentProduct.products.length) {

        let value = props.data.currentProduct.products[0].regularPrice; 




    let values = priceShuffle(value);
    let productURL= props.data.currentProduct.products[0].url; 
    let name= props.data.currentProduct.products[0].name
    let itemPrice= props.data.currentProduct.products[0].regularPrice


    let choices= values.map((price, index) => (
        <Link key={index} to='/answerpage'>
        <button
            key={index}  
            onClick={()=>props.dispatch(chosenAnswer(price, value, productURL,name, itemPrice))}  
            className='priceChoice'>{price}
            </button>
            </Link>
       ))
       
    
    return (
        <div className="priceChoices">
            <h3>What's The Price?</h3>
                {choices}
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