// Q4 boolean firstWorld isUpperCase
function isUpperCase(val) {
  // ''[0]為undefined 要判斷
  if (val.length == 0) {
    return false;
  }

  if (val[0] == val[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

// console.log(isUpperCase("Abc"));

// Q5 boolean allUppercase
function isAllUppercase(str) {
  // 先判斷參數是否為空
  if (str.length == 0) {
    return false;
  }
  // 給個變數預設全為大寫
  let allUppercase = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      allUppercase = false;
    }
    return allUppercase;
  }
}
// console.log(isAllUpperCase("ABCD")); //returns true
// console.log(isAllUppercase("")); //returns false
// console.log(isAllUppercase("ABCDEFGHIJKLm")); //returns false

// Q6找到第幾個數是大寫
function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return `${str[i]} ${i}`;
    }
    return -1;
  }
}
console.log(position("abcd")); // prints -1
console.log(position("AbcD")); // prints A 0
