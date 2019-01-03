import React from 'react'; 
import './featuredItems.css'; 
import {Link} from 'react-router-dom'; 
import FeaturedTable from './featuredTable';

export default function FeaturedItems(props) {
    return (
        <div className='featuredItems'>
            <h2>Items Shown in the Game</h2>
            <h3>Click below to view items from the game</h3>
                <FeaturedTable />
               <Link to='/'><button>PLAY AGAIN !!!</button></Link>
        </div>
    ) 
}


