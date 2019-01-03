import React from 'react';
import './instructions.css'
import {Link} from 'react-router-dom'; 


export default function Instructions(props){
    return (
        <div className='instructionsPage'>
            <nav>
            <Link to='/'><h1>Price Guess?</h1></Link>
            {/* <p>Tag Line Text</p> */}
            <Link id="instructions" to='/instructions'><p>How To Play </p> </Link>
            </nav>
            <main>  
                <div className='instructionsBackground'>
                    <h2>How to Play?</h2>
                    <p id='objective'>In each game you'll presented with the gameboard below: </p>
                    <div className='gameboardImage'></div>
                    <p>The Main Objective of Price Guess is to guess the correct price before the 10 second timer ends 
                    </p>
                    <div className='scoreImage'></div>
                    <p>Select the correct price and your score will go up a 100 points
                    </p>
                    <div className='timerImage'></div>
                    <p>If your run out of time or guess incorrect no points will be added to your score
                    </p>
                    <div className='questionImage'></div>
                
                </div>
            </main>
        </div>

    )
}