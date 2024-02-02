function arrayToList(arr) {
//   for(k = 0; k < arr.length; k++) {
//     tempList = {value: arr[k], rest: returnList};
//     Object.assign(returnList.rest, tempList);
//     console.log(returnList)
//   }
  let returnList = {}
  Object.assign(returnList.value: arr.shift[0], : arrayToList(arr))
  return(returnList);
}

function listToArray(list, arr) {
  
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
