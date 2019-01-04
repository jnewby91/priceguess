
function shuffleArray(array){
    for(let i = array.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i+2)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }
  
  // I'll work on this later
  
  function buttonValues(price){
    let values = [price]; 
    
    //Push 3 Values to the Values array 
    for( let i=0; i <3; i++) {
      values.push(Math.round(price * (Math.floor(Math.random() * 3) + 2)) -.01) 
    }
    
    shuffleArray(values)
      
    return values; 
  }
  
   export default buttonValues;
  
  