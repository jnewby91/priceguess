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
