import * as actions from '../actions/index';
import {
    join
} from 'path';

const initialState = {
    score: 100,
    questions: 1,
    loading: false,
    error: null,
    correctGuessCount: 0,
    incorrectGuessCount: 0,
    currentPriceOptions: ['4.00', '5.00', '3.00', '2.00'],
    playerGuesses: [],
    currentProduct: [{
        itemName: '',
        productPicture: 'url',
        itemDescrtiption: '',
        itemPrice: ''
    }]
};


export const priceGuessReducer = (state = initialState, action) => {

    if (action.type === actions.ADD_SCORE) {
        /* Need to update points to the score if user got the correct answer and then update the store
         How comee the priceReducer is not being shown on AnswerPage. 
        */
       if(state.playerGuesses[state.playerGuesses.length -1].correct){
        return Object.assign({}, state, {
            //if correct answer is true then add score
            score: state.score + action.score    
        }) 
       }

       return state; 
       
    } else if (action.type === actions.CHANGE_QUESTION) {

        return Object.assign({}, state, {
            questions: state.questions + 1
        })

    }

    else if (action.type === actions.CHOSEN_ANSWER) {

        return Object.assign({}, state, {
            playerGuesses: [...state.playerGuesses, {
                questionNumber: state.questions, 
                chosenAnswer: action.value,
                correct: (action.value === action.correctPrice),
                productURL: action.productURL
            }]
        })

    }

    /* Need to add points to the score if user got the correct answer and then update the store*/

    return state;

}


//Ask Alex do I need to create another key value pair for products viewed 
//or just use actual Product History

// const defaultState = {
//     score: 0,
//     question: 1,
//     currentPriceOptions: [],
//     playerGuesses: [{questionNumber: 1, actualPrice: '1.11', guessedPrice: '2.22', correct: false, }],
//     currentProduct: [{itemName:'',productPicture:'url',itemDescription:''}],
// }