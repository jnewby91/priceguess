import React from 'react';
import { connect } from 'react-redux';
import './gameboard.css';
import ItemImage from './itemImage';
import ItemDescription from './itemDescription';
import Scoreboard from './scoreboard';
import PriceChoice from './priceChoice';
import Spinner from 'react-spinkit'; 
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
            return <div className='loadingSpinner'>                <h1>LOADING
                        <Spinner name="ball-pulse-sync" />
                        </h1>
                    </div>
        }


        return (
            <div className="background">
                <div className='scorePanel'>
                <Scoreboard />
                </div>
                <div className='displayPanel'>
                <div className='itemCard'>
                    <ItemImage />
                    <ItemDescription />
                </div>
                <div className='pricePanel'>
                 <PriceChoice />
                 </div>
                 </div>  
            </div>

        )
    }
}




const mapStatetoProps = (state) => {
    return ({
        loading: state.bestBuyCall.loading

    })
}

export default connect(mapStatetoProps)(GamePage); 