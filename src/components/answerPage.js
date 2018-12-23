import React from 'react'; 
import './answerPage.css'; 
import {Link} from 'react-router-dom'; 
import ItemImage from './itemImage';
import { connect } from 'react-redux';



export class AnswerPage extends React.Component{
    render() {
    return(
        <div className="answerSection">
            <ItemImage />
            <p>Correct Price was:
                 <span className='correctAnswer'>
                 {this.props.data.currentProduct.products[0].regularPrice}
                 </span>
            </p>
           <Link to='/gamepage'><button>Next Guess</button></Link>
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
        data = state.bestBuyCall
    }

    return ({
        data
    })
}

export default connect(mapStatetoProps) (AnswerPage); 
