import {bestBuyCallReducer} from './bestbuyreducer'; 

import {FETCH_ITEM_INFO_SUCCESS,fetchItemInfoSuccess, fetchItemInfoRequest,   } from '../actions/bestBuyAction';



describe('bestBuyCallReducer', () => {
    //Set up dummy data
    const name = 'Some Product'; 
    const image = 'testImage.png';
    const regularPrice = '1.00'; 
    const url = 'testcomponents.com';
    const shortDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';


    it('Should set the initial state when nothing is passed in', () => {
        console.log(bestBuyCallReducer, typeof bestBuyCallReducer); 
        
        const state = bestBuyCallReducer(undefined, {type: '_UNKNOWN'}); 
        expect(state).toEqual({
            loading: false, 
            error: null, 
            currentProduct: {
                products: [{
                    name: 'name',
                    image: 'https://img.bbystatic.com/BestBuy_US/images/products/6043/6043422_sa.jpg',
                    regularPrice: '.99',
                    url: 'https://google.com', 
                    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                }]
        },
    })
})

    it('Should return the current state on an unknown action', () => {
        let currentState = {}; 
        const state = bestBuyCallReducer(currentState, {type: '_UNKNOWN'});
        expect(state).toBe(currentState);
    })

    describe('fetchItemInfoSuccess', ()=> {
        it('should start loading', () =>{
            let state; 
            state = bestBuyCallReducer(state, fetchItemInfoRequest());
            expect(state).toEqual({
                loading: true, 
                error: null, 
                currentProduct: {
                    products: [{
                        name: 'name',
                        image: 'https://img.bbystatic.com/BestBuy_US/images/products/6043/6043422_sa.jpg',
                        regularPrice: '.99',
                        url: 'https://google.com', 
                        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                    }]
            },
            })
        })
    });

    describe('fetchItemInfoSuccess', ()=> {
        it('should start loading', () =>{
            let state; 
            state = bestBuyCallReducer(state, fetchItemInfoRequest());
            expect(state).toEqual({
                loading: true, 
                error: null, 
                currentProduct: {
                    products: [{
                        name: 'name',
                        image: 'https://img.bbystatic.com/BestBuy_US/images/products/6043/6043422_sa.jpg',
                        regularPrice: '.99',
                        url: 'https://google.com', 
                        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                    }]
            },
            })
        })
    });



});