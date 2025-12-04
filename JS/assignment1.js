//q1
function createArray(a, b, c) {
  return [a, b, c];
}
console.log("Q1:", createArray(1, "hello", true));

//q2
function stringOnly(...args) {
  return args.filter(arg => typeof arg === "string");
}
console.log("Q2:", stringOnly(1, "apple", true, "banana", 42, "cat"));

//q3
function squareNumbers(...nums) {
  return nums.map(num => num * num);
}
console.log("Q3:", squareNumbers(2, 3, 4));

//q4
function getEvenNumbers(...nums) {
  return nums.filter(num => num % 2 === 0);
}
console.log("Q4:", getEvenNumbers(1, 2, 3, 4, 5, 6));

//q5
function collectNames(...names) {
  return names.map(name => name.toUpperCase());
}
console.log("Q5:", collectNames("sid", "raj"));

//q6
function makeUser(name, age, city) {
  return [{ name: name, age: age, city: city }];
}
console.log("Q6:", makeUser("Sid", 22, "Delhi"));

//q7
function addTen(...args) {
  return args.filter(arg => typeof arg === "number").map(num => num + 10);
}
console.log("Q7:", addTen(5, "hello", 20, true, 30));

//q8
function createFruitArray(...fruits) {
  if (fruits.length === 0) {
    return ["apple", "banana"];
  }
  return fruits;
}
console.log("Q8 (no args):", createFruitArray());
console.log("Q8 (with args):", createFruitArray("mango", "orange"));