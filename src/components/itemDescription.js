import React from 'react'; 

import './itemDescription.css';

import {connect} from 'react-redux'; 

 function ItemDescription(props) {
   if(props.data.currentProduct.products.length) {
    return (
      <div className="itemDescription">
        <h3>Description</h3>
          <p>{props.data.currentProduct.products[0].shortDescription}</p>
      </div>
    );
   }
   else {
     return <p>No Data Found</p>
   }
 
}

//how to map the array down below with different numbers
const mapStatetoProps = (state) => {
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

export default connect(mapStatetoProps)(ItemDescription); 