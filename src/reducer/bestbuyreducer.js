import * as actions from '../actions/bestBuyAction'

const initialState={
    loading: false, 
    error: null, 
    currentProduct: {
        products: [{
            name: 'name',
            image: 'https://img.bbystatic.com/BestBuy_US/images/products/6043/6043422_sa.jpg',
            regularPrice: '.99',
            url: 'https://google.com', 
            shortDescription: "Windows 104GB dedicated graphicsTechnical details: 6th Gen Intel&#174; Core&#8482; i7 processor; 17.3\" display; 16GB memory; 1TB hard drive; 256GB solid state driveSpecial features: Backlit keyboardNote: DVD/CD drive not included"
        }]
    }
}; 
/* 
    currentProduct.products
*/

export const bestBuyCallReducer = (state=initialState, action) => {
    if(action.type === actions.FETCH_ITEM_INFO_REQUEST) {
        return Object.assign({}, state, {
            loading: true, 
            error: null
        })
    }
    else if(action.type === actions.FETCH_ITEM_INFO_SUCCESS){
        return Object.assign({}, state, {
            currentProduct:  action.currentProduct,
            loading: false,
            error: null
        })
    }
    else if(action.type === actions.FETCH_ITEM_INFO_ERROR){
        
        return Object.assign({}, state, {
            error: action.error, 
            loading: false 
    })
    }
    return state;
}