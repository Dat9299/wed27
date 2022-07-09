// const self = {
//   name: "Đạt",
//   age: "23",
//   isHandsome: true,

//   EventTarget() {
//     console.log("Bla Bla Bla...");
//   },

//   walk() {
//     console.log("Walking on the ...");
//   },
//   speak() {
//     console.log("Hello Everyone, I'm Dat");
//   },
// };

// console.log(self);
// console.log(self.name);
// console.log(self.isHandsome);

// ưu tiên sử dụng DOT NOTATION

// DOT NOTATION => obj.key / obj.method()

// // sử dụng với key là 1 biến
// bracket notation => obj["key"] / obj["method"]()

//Tên thuộc tính không giới hạn như là tên biến => lưu về dạng chuỗi

// let self = {
//   name: "Đạt",
//   age: "23",
//   isHandSome: true,
// };

// console.log("name" in self);

// let key = "age";

// console.log(key in self);
// // const key = prompt("Bạn muốn biết thông tin gì về tôi?");
// // console.log(self[key]);

// // self.name;

// // self.name = "Mập";

// // selt.job = "Teacher";

// // selt["*"] = " Asterrisk";

// // duyệt qua các thuộc tính trong đối tượng

// for (let key in self) {
//   //   console.log(self[key]);
//   console.log(key + ": " + self[key]);
// }

// let dog = {
//   name: "Bingo",
//   age: 1,
//   breed: "Béc-giê",

//   bark() {
//     console.log(this.name + " is barking");
//   },

//   run() {
//     console.log(this.name + " is running on" + this.legs + " legs");
//   },

//   crazy() {
//     this.bark();
//     this.run();
//   },

//   toString() {
//     return this.name;
//   },

//   valueOf() {
//     return this.age;
//   },
// };

// console.log(String(dog));

// console.log(dog - 1);

// function Book(isbn, author, title, page) {
//   this.isbn = isbn;
//   this.author = author;
//   this.title = title;
//   this.page = page;
// }

// const book1 = new Book("1", "Đạt", "JavaScript", 10);
// const book2 = new Book("2", "Trí", "JavaScript", 10);
// const book3 = new Book("3", "Béo", "JavaScript", 10);
// const book4 = new Book("4", "Nhân", "JavaScript", 10);
// const book5 = new Book("5", "Rip", "JavaScript", 10);
// const book6 = new Book("6", "Hải", "JavaScript", 10);

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log(this.name + " is barking...");
};

Dog.prototype.eat = function () {
  console.log(name + "is eating...");
};

let sam = new Dog("Sam", 1, "Bull");

console.log(sam);

sam.bark();
sam.eat();

let bingo = new Dog("Bingo", 2, "pitbull");

console.log("Bingo");
bingo.bark();
bingo.eat();                                                                                                                                                                                                                                                                                                                                                          
