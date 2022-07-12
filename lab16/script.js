// Xử lý số
// 1
function quest1(r) {
  return (4 * 3.14 * Math.pow(r, 3)) / 3;
}

console.log("quest 1 Xử lý số", quest1(5));

// 2
function quest2(arr) {
  const newArr = arr.pop();
  const newArr2 = arr.shift();
  let result = 0;

  for (let index = 0; index < arr.length; index++) {
    result = result + arr[index];
  }

  return result;
}
console.log("quest 2 Xử lý số ", quest2([1, 2, 3, 4, 5]));

// 3
function quest3(number) {
  let arr = [];

  for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
      arr = [...arr, index];
    }
  }

  let result = 0;

  for (let index = 0; index < arr.length; index++) {
    result = result + arr[index];
  }

  return result;
}

console.log("quest 3 Xử lý số", quest3(5));

// 4
function quest4(n) {
  var flag = true;
  if (n < 2) {
    flag = false;
  } else {
    // lặp từ 2 tới n-1
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  // Kiểm tra biến flag
  if (flag == true) {
    return "là số nguyên tố ";
  } else {
    return "không là số nguyên tố ";
  }
}

console.log("quest 4 Xử lý số", quest4(6));
console.log("quest 4 Xử lý số", quest4(5));

// chuỗi
let str = "hello đẠt";

function capitalize(str) {
  let trimmed = str.trim();

  const arr = str.split(" ");
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    console.log("arr ", arr[index]);
    let firstChar = arr[index].slice(0, 1).toUpperCase();
    let restChar = arr[index].slice(1).toLowerCase();
    const fullName = firstChar + restChar;
    result = [...result, fullName];
  }
  return result.join(" ");
}
console.log("bài 1 Chuỗi", capitalize(str));

// Bai 2
let str1 = "hello đẠt"; // Hello Đạt

function capitalize(str) {
  let trimmed = str.trim();

  const arr = str.split(" ");
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let firstChar = arr[index].slice(0, 1).toLowerCase();
    let restChar = arr[index].slice(1).toLowerCase();
    const fullName = firstChar + restChar;
    result = [...result, fullName];
  }
  return result.join("-");
}
console.log("bài 2 Chuỗi", capitalize(str));

// mảng
function questM(arr) {
  let arr1 = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      arr1 = [...arr1, arr[index]];
    }
  }

  return arr1;
}

console.log("mảng Bài 1: ", questM([1, 2, 0, "NaN"]));

function quest2M(array) {
  let max = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (max < element.length) {
      max = element.length;
    }
  }

  let arr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.length == max) {
      arr = [...arr, element];
    }
  }

  return arr;
}

console.log("mảng Bài 2: ", quest2M(["aba", "aa", "ad", "c", "vcd"]));

//  xử lý object
// 1
let self = [
  { name: "Đạt", age: 23 },
  { name: "Trí", age: 28 },
  { name: "Bem", age: 20 },
  { name: "Chinh", age: 22 },
];

const resultobj = self.reduce(function (result, item) {
  return result + item.age;
}, 0);

console.log("Bai 1 xử lý object", resultobj / self.length);

// 2

let self1 = [
  { name: "Đạt", age: 23 },
  { name: "Trí", age: 28 },
  { name: "Bem", age: 20 },
  { name: "Chinh", age: 22 },
];

self1.sort(function (a, b) {
  if (a.age < b.age) {
    return 1;
  }
  if (a.age == b.age) {
    return 0;
  }
  if (a.age > b.age) {
    return -1;
  }
});

console.log("Bai 2 xử lý object", self1);

// 3
let self2 = [
  { name: "Dạt", age: 23 },
  { name: "Trí", age: 28 },
  { name: "Bem", age: 20 },
  { name: "Chinh", age: 22 },
];

self2.sort(function (a, b) {
  if (a.name.slice(0, 1) < b.name.slice(0, 1)) {
    return -1;
  }
  if (a.name.slice(0, 1) == b.name.slice(0, 1)) {
    return 0;
  }
  if (a.name.slice(0, 1) > b.name.slice(0, 1)) {
    return 1;
  }
});

console.log("Bai 3 xử lý object", self2);

// // 4
let self3 = [
  { name: "Dạt", age: 23 },
  { name: "Trí", age: 28 },
  { name: "hem", age: 20 },
  { name: "Huyền", age: 22 },
];

const bai4 = self3.filter((item) => {
  if (item.name.slice(0, 1) === "H" || item.name.slice(0, 1) === "h") {
    return item;
  }
});

console.log("bài 4 xử lý object ", bai4);

// bài tổng hợp
function quest1T(time, x) {
  let shortDate = new Date(time).getTime() + x * 100000;
  const dateNow = new Date().getTime();
  const gap = shortDate - dateNow;
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  return textDay + " : " + textHour + " : " + textMinute;
}

console.log("bài 1 Tổng hợp", quest1T("September 17, 2022 , 00:00:00", 7));

// 3
function bubbleSort(number) {
  const newNumber = number.toString().split("");

  let array = newNumber.map((item) => parseFloat(item));

  var size = array.length;
  // run loops two times: one for walking throught the array
  // and the other for comparison
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      // To sort in descending order, change > to < in this line.
      if (array[j] > array[j + 1]) {
        // swap if greater is at the rear position
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
var arr = [3, 5, -2, 14, -9, 30];
console.log("Bài 3 Tổng hợp", bubbleSort(530751).join(""));
