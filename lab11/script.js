// cau 1
// function printNumbers(a, b) {
//   for (let i = a; i < b; i++) {
//     console.log(i);
//   }
// }
// console.log(printNumbers(2, 5));

// cau 2
// function printNumbers(a, b) {
//   for (let i = b; i >= a; i--) {
//     console.log(i);
//   }
// }
// console.log(printNumbers(3, 5));

// cau 3

function sumOfOddNumbers(a, b) {
  let total = 0;

  let min = a;
  max = b;

  if (a > b) {
    min = b;
    max = a;
  }

  for (let i = a; i <= b; i++) {
    if (i % 2 != 0) total += 1;
  }

  return total;
}
console.log(sumOfOddNumbers(1, 10));
console.log(sumOfOddNumbers(10, 1));

// cau 4

function divisor(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) console.log(i);
  }
}

divisor(15);
divisor(24);

// cau 5
function factorial(n) {
  let total = 1;

  for (let i = 2; i <= n; i++) {
    total *= i;
  }

  return total;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(6));

// cau 6
function countFolding(thickness) {
  thickness *= 1000; // đổi đơn vị sang mét

  let count = 0;
  let currentThickness = 0.1;

  while (currentThickness < thickness) {
    currentThickness *= 2; // gấp đôi tờ giấy
    count++; // đếm 1 lần
  }
  return count;
}

console.log(countFolding(1));
console.log(countFolding(10));
console.log(countFolding(100));

// câu 7
function countYears(dad, son) {
  let year = 0;

  while (son * 2 != dad) {
    son++; // tăng 1 tuổi
    dad++; // tăng 1 tuổi
    year++;
  }
  return year;
}

console.log(countYears(40, 8));
console.log(countYears(22, 1));
console.log(countYears(33, 2));

// câu 8
function num0fLegs() {
  const CHICK_LEGS = 2;
  const DOG_LEGS = 4;

  let chicken = 1;
  let dogs = 36 - chicken;

  while (chicken * CHICK_LEGS + dogs * DOG_LEGS != 100) {
    chicken++;
    dogs--;
  }

  console.log("Số gà là", chicken);
  console.log("Số chó là", dogs);
}

num0fLegs(14, 20);
