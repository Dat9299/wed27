// alert để hiển thị một thông báo trên trình duyệt
// alert(mesage)
console.log("Hello Tôi là JavaScript");
// không bắt buộc phải có ; kết thúc dọng lệnh
console.log("Xin Chào Em Cô Gái Ngày Hôm Qua");

// console.log để hiện thị thông (giá trị/kết quả) ra tab console
// console.log(data)

// 3 từ khóa khai báo biến var, let, const
// cú pháp: keywword variableName = value,
// Biến khai báo với let và const chỉ khai báo một lần
let myName = "Đạt";

let myAge = 30;

let myJob = "Student";

let myHobbies = "Play Game";

// Khai báo biến không đi kèm giá trị
let myPhoneNumber;

// Biến giống như một cái hộp cho phép chứa các giá trị bên trong
myPhoneNumber = "0387712xxx";

// Thay đổi dữ liệu của biến
myJob = "Player";

// Truy cập giá trị của biến
// console.log(myPhoneNumber) sẽ ra console.log(0387712xxx)
console.log(myPhoneNumber);

console.log(myName);

console.log(myAge);

console.log(myJob);

console.log(myHobbies);

// Hằng số(const) sử dụng cho các giá trị xác định được từ đầu và giá trị đó không bao giờ thay đổi

// các ký tự cơ bản
//  kiểu nguyên thủy - kiểu cơ bản - primitive

//  Số (number) - sử dụng ký tự số để biểu diễn giá trị
let todayLuckyNumber = 68;
let myHeight = 1.69;

// chuỗi (string) -  cho phép sử dụng các ký tự bất kỳ
// đặt trong "" '' ``

// logic (Boolean) - chỉ có 2 hằng số true/false
let amIHandsome = true;
let amIRich = false;

// undefined - đại diện một giá trị chưa được xác định
let something; // undefined

// null - đại diện cho một biến không có giá trị

// object - kiểu phực hợp
// cho phép lưu trữ nhiều giá trị trong 1 biến duy nhất
// mỗi giá trị(value) ánh xạ với 1 khóa (key/property)
// key: value,
// Đạt 23 Student Play game
let dat = {
  name: "Đạt",
  age: 23,
  job: "Student",
  hobbies: "Play game",
  isHandsome: true,
};

// cú pháp để truy cập từng giá trị đơn lẻ
// obj.key

console.log(dat.name);
console.log(dat.isHandsome);

console.log(console);

console.error("Ahihi Đồ Ngốc");

// typeof kiếm tra kiểu
// kết quả in khai báo
console.log(typeof dat);
console.log(typeof todayLuckyNumber);

// function (gói các đoạn mã thành 1 block/khối mã)
// function là cách để cấu trúc mã và tái sử dụng mã
// cú pháp function funcName() {}
// input của hàm được khai báo bên trong() parameters(tham số)
function greeting(name) {
  // sử dụng, chp phép in hàng loạt nhiều giá trị
  //   console.log("Hàm nhận vào tham số name có giá trị là:", name);
  //   console.log("Chào mừng Đạt đến trang wed!");

  // sử dụng cú pháp nối chuỗi
  console.log("Chào mừng" + name + " đến trang wed!");
}

// console.log("Chào mừng Đạt đến trang wed!");
// console.log("Chào mừng Trí đến trang wed!");
// console.log("Chào mừng Béo đến trang wed!");
// console.log("Chào mừng Rùa đến trang wed!");

// gọi hàm funcName()
// truyền input vào cho hàm - arguments
// input truyền vào theo thứ tự tường ứng trong khai báo
greeting("Đạt"); // name = "Đạt"
greeting("Trí"); // name = "Trí"
greeting("Béo"); // name = "Béo"
greeting("Rùa"); // name = "Rùa"
greeting("Quang"); // name = "Quang"

// 1- thực hiện tác vụ/công việc nào đó

// function add(a, b) {
//   let result = a + b;
//   return result;
// }

// const result = add(1, 2); // 3
// console.log("Kết quả phép tính 1 + 2 = " + result);

// function sub(a, b) {
//   let result = a - b;
//   return result;
// }

// const result = sub(7, 5);
// console.log("Kết quả phép tính 7 - 5 = " + result);

// function div(a, b) {
//   let result = a / b;
//   return result;
// }

// const result = div(15, 5);
// console.log("Kết quả phép tính 15 / 5 =" + result);

function mul(a, b) {
  let result = a * b;
  return result;
}

const result = mul(2, 3);
console.log("Kết quả phéo tính 2 * 3 = " + result);


// alert("message")
// console.log(data)


// với toán tử +
// - Nếu có 1 toán hạng là chuỗi thì sẽ chuyển toán hàng còn lại thành chuỗi -> phép nối chuỗi
// - còn lại tất cả trường hợp khác => chuyển về số => cộng số

// với tất cả toán tử khác - * / % ** => chuyển về số => tính toán số

// NaN => nếu là cộng chuỗi thì => chuỗi
// => nếu là các phép tính khác => NaN
