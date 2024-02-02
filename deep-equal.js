function deepEqual(value, reference) {
  if(value === reference) {
    return(true);
  }
  for(k = 0; k < Object.keys(value).length; k++) {
    let key = Object.keys(value)[k];
    if (typeof reference[key] == 'object') {
        return(deepEqual(value[key], reference[key]));

    }
    else if(value[key] === reference[key]) {
        return(true);
    }
    else {
        return(false)
    }
    // if(typeof Object.keys(reference)[k] == typeof Object.keys(value)[k]) {
    //     if(Object.keys(value)[k] === Object.keys(reference)[k]) {
    //         return(true);
    //     }
  //}
}
  return(true);
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
//→ false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
