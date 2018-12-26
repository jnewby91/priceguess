import React from 'react';
import { connect } from 'react-redux';
import './gameboard.css';
import ItemImage from './itemImage';
import ItemDescription from './itemDescription';
import Scoreboard from './scoreboard';
import PriceChoice from './priceChoice';
import { fetchItemInfo } from '../actions/bestBuyAction';
import { fetchItemInfoRequest, fetchItemInfoSuccess } from '../actions/bestBuyAction';


export class GamePage extends React.Component {
    constructor(props) {
        super(props)
    }
    // Make constructor for the dispatch
    componentDidMount() {
        this.props.dispatch(fetchItemInfo())
    }

    render() {
        if (this.props.loading === true) {
            return <h1>LOADING</h1>
        }



        {/* 
            1. If loading or error state of the bestBuyCall is true, 
            then render don't render the ItemDescription or PriceChoice

            Possibly a spinner should go right here while loading

            2.After bestBuyCall.state.actualProducts has informationn in the state,
            the props can be mapped to Item Description adn Price Component 
        
        */}

        return (
            <div className="GamePage">
                <Scoreboard
                    timer={10}
                />
                <ItemImage />
                <ItemDescription />
                 <PriceChoice />
            </div>

        )
    }
}


//Finish setting up dispatch for the class

const mapStatetoProps = (state) => {
    return ({
        loading: state.bestBuyCall.loading

    })
    // ({
    //     itemDescription: state.bestBuyCall.currentProduct[state.bestBuyCall.currentProduct.length - 1].itemDescription
    // })

}

export default connect(mapStatetoProps)(GamePage); 