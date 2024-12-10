// Bài 1: 
console.log("Bài 1:");
const arr = [1, 3, 5, 32];
arr.forEach(item => console.log(item));

//Bài 2:
console.log("Bài 2:")
const arr2 = [1, 3, 5, 22, 12];
let total = 0;
let max = arr[0];
let min = arr[0];
arr2.forEach((value) => {
    total += value;
    if (value > max) {
        max = value;
    }
    if (value < min) {
        min = value;
    }
});
console.log("Tổng các phần tử của mảng: ", total);
console.log("Giá trị lớn nhất của mảng: ", max);
console.log("Giá trị bé nhất của mảng: ", min);

//Bài 3:
console.log("Bài 3");
let arr3 = [1, 5, 3, 65];
let arr3New = [];
arr3.forEach((value) => {
    arr3New.push(value * 2);
}
);
console.log("Giá trị các phần tử mảng mới là: ", arr3New);