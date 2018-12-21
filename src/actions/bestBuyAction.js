import {API_BASE_URL} from '../config';
const apiKey = process.env.REACT_APP_API_KEY; 

export const FETCH_ITEM_INFO_REQUEST = 'FETCH_ITEM_INFO_REQUEST';
export const fetchItemInfoRequest = () => ({
    type: FETCH_ITEM_INFO_REQUEST
})

export const FETCH_ITEM_INFO_SUCCESS = 'FETCH_ITEM_INFO_SUCCESS';
export const fetchItemInfoSuccess = currentProduct => ({
    type: FETCH_ITEM_INFO_SUCCESS,
    currentProduct
})

export const FETCH_ITEM_INFO_ERROR = 'FETCH_ITEM_INFO_ERROR';
export const fetchItemInfoError = error => ({
    type: FETCH_ITEM_INFO_ERROR,
    error
})

export const fetchItemInfo = () => dispatch => {
    const categories = [
    'Digital Cameras','Health ,Fitness & Beauty','Headphones','Home Audio','Home Automation & Security']
     
     const categoryName = categories[(Math.floor(Math.random()*categories.length)+3)]; 
     
     const page= (Math.floor(Math.random()*10) + 3);
     

    dispatch(fetchItemInfoRequest());
    //Split up API call properly in fetch
    fetch(`https://cors-anywhere.herokuapp.com/https://api.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=A3fUqjrVIUbZWiJcDlQcel89&sort=image.asc&show=image,name,regularPrice,url,shortDescription&pageSize=4&page=${page}&format=json`, {
        method: 'GET', 
        mode: "cors",
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText);
        }
         return res.json();
    }).then(actualPriceHistory => {dispatch(fetchItemInfoSuccess(actualPriceHistory))}
    )
}