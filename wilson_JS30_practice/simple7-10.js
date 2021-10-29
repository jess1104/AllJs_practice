// Q7 計算陣列比第二參數小的有幾個
function findSmallCount(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      count++;
    }
    return count;
  }
}

// console.log(findSmallCount([1, 2, 3], 2) + "個"); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0) + "個"); // returns 0

// Q8 計算陣列比第二參數小的有幾個之外還要加總起來
function findSmallerTotal(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
// console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25

// Q9獎小於第二參數的抓出來放進新陣列
function findAllSmall(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]

// Q10加總ARR
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}
console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]
