import React from 'react'; 

import {connect} from 'react-redux'; 

 
function FeaturedTable(props){

    console.log(props)
    const featuredItems = props.data.priceGuess.playerGuesses.map((item, index)=> {
        return(<>
        <tr>
            <th>Item Name</th>
            <th>Price</th>
        </tr>
        <tr key={index}>
            <th><a href={props.data.priceGuess.playerGuesses[index].productURL}>{props.data.priceGuess.playerGuesses[index].itemName}</a></th>
            <th>{props.data.priceGuess.playerGuesses[index].itemPrice}</th>
        </tr>
        </>
        )
    })
   
   
    return (
        <div className='featuredTable'>
            <table>
                <tbody>
                    {featuredItems}
                </tbody>
            </table>
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

export default connect(mapStatetoProps)(FeaturedTable); 