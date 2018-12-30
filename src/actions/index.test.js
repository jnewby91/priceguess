import {ADD_SCORE,addScore,CHANGE_QUESTION,changeQuestion,CHOSEN_ANSWER,chosenAnswer} from './index'; 

describe('addScore', () => {
    it('Should return the action', () => {
        const score = 100; 
        const action = addScore(score); 
        expect(action.type).toEqual(ADD_SCORE);
        expect(action.score).toEqual(score)
    })
})

describe('changeQuestion', () => {
    it('Should return the action', () => {
        const action = changeQuestion(); 
        expect(action.type).toEqual( CHANGE_QUESTION);
    })
})



/* Go to Q&A session for Action Test below. 

*/

// describe('chosenAnswer', () => {
//     it('Should return the action', () => {
//         const itemName= 'something';
//          const guessPrice = 10;
//         const correctPrice = "10";
//         const itemPrice = 10;
//         const productURL = 'something'; 
//         const action = chosenAnswer(); 
//         expect(action.type).toEqual( CHOSEN_ANSWER);
//         expect(action.correctPrice).toEqual(correctPrice); 
//         expect(action.guessPrice).toEqual(guessPrice);
//         expect(action.itemPrice).toEqual(itemPrice);
//         expect(action.itemName).toEqual(itemName);
//     })
// })