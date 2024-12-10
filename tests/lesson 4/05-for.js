// Bài 1:
console.log("Bài 1:");
const student =
    { name: "Alex", age: 10 };
for (let property in student) {
    console.log(student[property]);
}

// Bài 2: 
console.log("Bài 2:");
let student2 =
    { name: "Alex", age: 10, salary: 20 };
let total = 0;
for (let property in student2) {
    console.log(typeof (student2[property]));
    if (typeof (student2[property]) === "number") {

        total += student2[property];
    }
}
console.log("Tổng các giá trị số của object là ", total);

//Bài 3:
console.log("Bài 3:")
const student3 =
    { name: "Alex", age: 10 };
let arr = [];
for (let property in student3) {
    arr.push(property);
}
console.log("Giá trị mảng mới là ", arr);