function reverseArray(arr) {
  let temp = [];
  for (i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  for (i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return(arr);
}

function reverseArrayInPlace(arr) {
  let temp = [];
  for (i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  for (i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return(arr);
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]