
function shuffleArray(array){
    for(let i = array.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i+2)); 
      [array[i], array[j]] = [array[j], array [i]]; 
    }
  }
  
  
  
  function buttonValues(price){
    let values = [price]; 
    
    //Push 3 Values to the Values array 
    for( let i=0; i <3; i++) {
      values.push(price * (Math.floor(Math.random() * 6) + 2)) 
    }
     console.log('Values before shuffled:', values)
    
    shuffleArray(values)
    
    console.log('Values after shuffled:', values)
  
    return values; 
  }
  
   export default buttonValues;
  
  