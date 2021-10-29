// Q1 1 2 3 4 ... 100
function printMany() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// printMany();

// Q2 1 4 7 ... 88
function printEvery3() {
  for (let i = 1; i <= 88; i += 3) {
    console.log(i);
  }
}
// printEvery3();

// Q3印出特定星星的量
function star(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += "*";
  }
  return res;
}
// console.log(star(3));
// console.log(star(10));

function generatePyramid() {
  var totalNumberofRows = 5;
  var output = "";
  for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += j + "  ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid();
