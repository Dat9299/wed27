// let str = "hello wOrld  "; // Hello World

// function capitalize(str) {
//   let trimmed = str.trim();

//   let firstChar = trimmed.slice(0, 1); // nỗi .toUpperCase(); thì bỏ dòng dưới đc
//   let restChar = trimmed.slice(1); // nối .toLowerCase(); thì bỏ dòng dưới đc

//   firstChar = firstChar.toUpperCase();
//   restChar = restChar.toLowerCase();

//   let result = firstChar.concat(restChar);

//   return result;
// }

// console.log(capitalize(str));

// cách làm tắt
// let str = "hello wOrld  "; // Hello World
// function capitalize(str) {
//   let trimmed = str.trim();
//   return trimmed
//     .slice(0, 1)
//     .toUpperCase()
//     .concat(trimmed.slice(1).toUpperCase());
// }

// console.log(capitalize(str));

// for (let char of "Succesfully") {
//   console.log(char);
// }

let names = ["Sang", "Ba", "Đạt", "Trí"];

for (let index = 0; index < names.length; index++) {
  const name = names[index];
  console.log(index, name);
}

for (let index = names.length - 1; index >= 0; index--) {
  const name = names[index];
  console.log(index, name);
}
