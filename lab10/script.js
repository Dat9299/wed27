// input = Number(prompt("Nhập một số bất kỳ", 0));

// if (prompt) {
//   console.log("Đây là số chẵn");
// } else {
//   console.log("Đây là số lẻ!");
// }

// // thực hiện 1 trong 2 đoạn mã tùy thuộc vào điều kiện đúng hay sai
// if (condition) {
// } else {
// }

// // thực thi đoạn mã trong if nếu điều kiện đúng, nếu điều không đúng thì không làm gì cả

// // dạng if else lồng nhau
// if (isWeeken) {
//   // Nếu nay là cuối tuần
//   if (haveMoney) {
//     // nếu mà có tiền

//     if (haveGirlFriend) {
//       // nếu có người yêu
//       console.log("Rủ người yêu đi chơi");
//     }
//   } else {
//     // Không có người yêu
//     console.log("rủ bạn đi nhậu");
//   }
// } else {
//   // ko có tiền
//   console.log("Chuẩn bị giấy ăn");
// }

// // Khi mà điều kiện nó không liên quan đến nhau-> tách riêng là từng if else
// // ví dụ
// if (isMonday) {
// }

// if (isTuesday) {
// }

// // Khi mà điều kiện nó liên quan đến nhau -> kiểm tra điều kiện nhỏ nhất ( hiểm/ tập giá trị nhỏ nhất trước)

// // kết hợp các điều kiện cho cấu trúc gọn gàng

// if (isWeeken || isHoliday) {
//     if (haveMoney && haveGirlFriend) console.log("Rủ người yêu đi xem phim");
//     else if (haveMoney) console.log("Rủ bạn đi nhậu");
//     else console.log("Chuẩn bị giấy ăn");
// } else console.log("Xách đít đi làm/đi học");

function isOddNumber(number) {
  if (number % 2 != 0) {
    // return number % 2 != 0;
    return true;
  } else {
    return false;
  }
}

if (isOddNumber(1)) console.log("1 là số lẻ");

console.log(isOddNumber(1));
console.log(isOddNumber(2));
console.log(isOddNumber(3));
console.log(isOddNumber(4));

function maxOfTwo(a, b) {
  if (a > b) return a;
  else return b;
}

console.log(maxOfTwo(1, 2)); //2
console.log(maxOfTwo(8, 4)); //8
console.log(maxOfTwo(11, 8)); //11

function divisibleByThreeAndFive(number) {
  if (number % 3 == 0 && number % 5 == 0) return true;
  else return false;
}

console.log(divisibleByThreeAndFive(15));
console.log(divisibleByThreeAndFive(30));
console.log(divisibleByThreeAndFive(34));

// câu 4
function season(month) {
  if (month == 12 || month == 1 || month == 2) console.log("winner");
  else if (month == 3 || month == 4 || month == 5) console.log("spring");
  else if (month == 6 || month == 7 || month == 8) console.log("summer");
  else console.log("fall");
}
season(5);
season(10);
season(12);

// câu 5

function trafficLight(light) {
  if (light === "Red") console.log("Dừng lại");
  if (light === "Green") console.log("Được phép di chuyển");
  if (light === "Yellow") console.log("Giảm tốc độ và dừng lại");
}

trafficLight("Green");
trafficLight("Red");

// cau 6
function calcCommissions(totalSales) {
  if (totalSales <= 100000000) return totalSales * 0.05;
  else if (totalSales <= 300000000) return totalSales * 0.1;
  else return totalSales * 0.2;
}

console.log(calcCommissions(800000000));
console.log(calcCommissions(1800000000));
console.log(calcCommissions(500000000));

// lever 2

//1
function isLeafYear(year) {
  if (year % 4 == 0) {
    console.log("nam do la nam nhuan");
  } else console.log("nam do k nhuan");
}

console.log(isLeafYear(2021));
console.log(isLeafYear(2040));

//2
function daysOfMonth(month, year) {
  if (
    (month == 1 || month == 3 || month == 5 || month == 7 || month == 8,
    month == 10,
    month == 12)
  )
    console.log(31);
  if (month == 4 || month == 6 || month == 9 || month == 11) console.log(30);
  if (month == 2 && year % 4 == 0) console.log(29);
  else console.log(28);
}

//3
function calcGrade(point) {
  if (point < 4) console.log("Xếp loại F");
  else if (4 <= point < 5.5) console.log("Xếp loại D");
  else if (5.5 <= point < 7.0) console.log(": Xếp loại C");
  else if (7 <= point < 8.5) console.log("Xếp loại B");
  else console.log(" Xếp loại A");
}

console.log(calcGrade(3.75));
console.log(calcGrade(5));

//4
function calcTaxiFee(km) {
  if (km < 30) return 10000 + 11000 * km;
  else if (km > 31) return 10000 + 11000 * 31 + (km - 31) * 9500;
}

console.log(calcTaxiFee(17));
console.log(calcTaxiFee(32));
console.log(calcTaxiFee(1));

//5
function maxOfThree(a, b, c) {
  let max;
  if (a > b) {
    max = a;
  } else max = b;
  if (max < c) {
    max = c;
  }
  if (max == a && max == b) {
    console.log("gia tri lon nhat la a , b");
  } else if (max == a && max == c) {
    console.log("gia tri lon nhat la a , c");
  } else if (max == b && max == c) {
    console.log("gia tri lon nhat la b , c");
  } else console.log("gia tri lon nhat la " + max);
}
console.log(maxOfThree(100, 40, 55));

// chữa bài 1, 2, 5, 6

// 1
function isLeafYear(year) {
  if (year % 400 == 0) return true;
  else if (year % 4 == 0 && year % 100 != 0) return true;
  else return false;
}

console.log(isLeafYear(2000));
console.log(isLeafYear(2100));
console.log(isLeafYear(2200));
console.log(isLeafYear(2300));

// 2
function daysOfMonth(month, year) {
  if (month == 2) {
    if (isLeafYear(year)) {
      return 29;
    } else {
      return 28;
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
  else return 31;
}

console.log(daysOfMonth(2, 2004));
console.log(daysOfMonth(2, 2100));
console.log(daysOfMonth(4, 2000));
console.log(daysOfMonth(1, 2001));

// 6
function solveEquation(a, b, c) {
  if (a == 0 && (b == 0) & (c == 0)) return Infinity;

  if (a == 0 && b == 0) return null;

  if (a == 0) return -c / b;
  const delta = b ** 2 - 4 * a * c;
  if (delta < 0) return null;

  const x1 = (-b + delta ** 0.5) / (2 * a);
  const x2 = (-b - delta ** 0.5) / (2 * a);

  return [x1, x2];
}

console.log(solveEquation(2, 4, 5));
console.log(solveEquation(20, 44, 15));
console.log(solveEquation(21, 42, 59));


//  ví dụ về switch /case
// function daysOfMonth(month, year) {
//   switch (month) {
//     case 2:
//       if (isLeafYear(year)) return 29;
//       else return 28;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;

//     default:
//       return 31;
//   }
// }

// console.log(daysOfMonth(2, 2004));
// console.log(daysOfMonth(2, 2100));
// console.log(daysOfMonth(4, 2000));
// console.log(daysOfMonth(1, 2001));
