function range(start, end, step = 1) {
  if (start < end) {
    let arrange = [];
    for (k = start; k <= end; k += step) {
      arrange.push(k);
    }
    return(arrange);
  }
  else if (end < start) {
      let arrange = [];
      for (k = start; k >= end; k += step) {
        arrange.push(k);
      }
      return(arrange);
  }
  else {
    return;
  }
}

function sum(numbers) {
  let summ = 0;
  for (k = 0; k < numbers.length; k++) {
    summ += numbers[k];
  }
  return(summ);
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
