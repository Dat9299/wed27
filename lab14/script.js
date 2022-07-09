// let arr = ["Trí", "Đạt", "Hải", "Hà"];
// function logUpperName(name) {
//    console.log(name.toUpperCase());
// }

// arr.forEach(logUpperName)

// arr.forEach(console.log);

// forEach gọi hàm callback 1 lần với mối 1 giá trị trong mảng, callback có thể nhận tối đa 3 tham số (value, index, arr)

// find() sử dụng để tìm 1 cái giá trị trong mảng khớp với điều kiện (được đánh giá bởi hàm callback truyền vào)
// callbacl phải trả về kết quả là boolean (true | false) cho biết giá trị có phù hợp với điều kiện hay ko

// let arrNum = [2, 4, 3, 8];
// let totalArr = arrNum.reduce(function (total, number) {
//   total += number;
//   return total;
// });

// console.log(totalArr);

// mặc định hàm sort() là sắp xếp theo chuỗi

// sort() chỉ hoạt động tốt nếu các giá trị trong mảng đều là chuổi

// callback truyền vào sort phải trả về 1 giá trị số nguyên (âm, 0, dương) cho biết giá trị nào nhỏ hơn

// let sortArr = arrNum.sort(function (number1, number2) {
//   if (number1 < number2) return -1;
//   else return 1;
// });

// console.log(sortArr);

function max(arr) {
  let max = arr(0);

  for (let number of arr) 
  if (number > max) max = number;
  return max;
}

max([1, 5, 3, 4, 2]);
