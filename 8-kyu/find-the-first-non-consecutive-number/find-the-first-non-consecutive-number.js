function firstNonConsecutive(arr){
  for (let i = 1; i < arr.length; i++){
    if(arr[i] - arr[i - 1] !== 1){ // if consecutive is NOT equal to 1... 
      return arr[i]; // return element
    }
  }
  return null; // default
}