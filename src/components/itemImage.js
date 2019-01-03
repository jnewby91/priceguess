import React from "react";

import "./itemImage.css";

import {connect} from 'react-redux';

 function ItemImage(props) {
  if(props.data.currentProduct.products.length) {
    return ( <div className="itemImage">
    <h3>{props.data.currentProduct.products[0].name}</h3>
    <img className="image" src={props.data.currentProduct.products[0].image} alt="itemImage" />
  </div>
    )
  }
   else {
     return (<p> No Data Found </p>)
   }
  ;
}
ItemImage.defaultprops= {
  itemName: "Item Name",
  productPicture:"https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_55-512.png"
};


//how to map the array down below with different numbers
//Maybe make a for loop that handle the index of the actual product History array 
//As 
// const indexNum = state.currentProduct.length - 1; 

const mapStatetoProps = (state) => {
  let data = {
    currentProduct: [{
      products: []
    }]
  };

  if(state.bestBuyCall.currentProduct) {
    data = state.bestBuyCall
  }
  
  return ({
    data
  })

}

export default connect(mapStatetoProps)(ItemImage);

//