// Bài 1:
console.log("Bài 1:")
let arr = [1, 2, 3, 4, 3, 55, 23];
let value = 3;
let firstIndex = -1;
let lastIndex = -1;
let index = 0;
for (let element of arr) {
    if (element === value) {
        if (firstIndex === -1) {
            firstIndex = index;
        }
        lastIndex = index;
    }
    index++;
}
console.log("Vị trí phần tử đầu tiên là:", firstIndex);
console.log("Vị trí phần tử cuối cùng là :", lastIndex);

//Bài 2: 
console.log("Bài 2:");
let str ="playwright";
let daoNguocChuoi = [];
for ( let i = str.length - 1; i>=0; i--){
    daoNguocChuoi.push(str[i]);
}
console.log("Chuỗi đảo ngược là: ", daoNguocChuoi);

//Bài 3:
console.log("Bài 3");
let arr3 = [1,2,3,1,2,4,5];
let count = {};
let arr3New = [];
for( let element of arr3){
    count[element] = (count[element] || 0) + 1; 
}
for (let element in count){
    if(count[element] === 1){
        arr3New.push(Number(element));
    }
}
console.log("Các phần từ duy nhất trong mảng là", arr3New);