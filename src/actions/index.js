export const ADD_SCORE = 'ADD_SCORE'; 
export const addScore = (score) => ({
    type: ADD_SCORE, 
    score
})

export const CHANGE_QUESTION = 'CHANGE_QUESTION'; 
export const changeQuestion = () => ({
    type: CHANGE_QUESTION, 
    
})

export const CHANGE_ITEM = 'CHANGE_ITEM'; 
export const changeItem = (item) => ({
    type: CHANGE_ITEM, 
    itemName: item.itemName, 
    itemDescription: item.itemDescription
})

export const CHOSEN_ANSWER='CHOSEN_ANSWER'; 
export const chosenAnswer = (guessPrice, correctPrice, productURL, itemName, itemPrice) => ({
    type: CHOSEN_ANSWER,
    value: guessPrice,
    correctPrice, 
    productURL, 
    itemName,
    itemPrice 
})
