// Bài 1: 
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong = tong + i;
}
console.log("Bài 1: Tổng từ 1 đến 100 bằng: " + tong);

//Bài 2
console.log("Bài 2: In bảng cửu chương từ 2 đến 9")
for (let i = 2; i <= 9; i++)
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }

//Bài 3 
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log("Bài 3: Mảng chứa các số lẻ từ 1 đến 99 là " + arr);

//Bài 4
const domain = "@gmail.com"
const emails = [];
for (let i = 0; i <= 10; i++) {
    let email = `user-${i}${domain}`;
    emails.push(email);
}
console.log("Bài 4 : in danh sách email người dùng và số thứ tự " + emails);

//Bài 5 
let doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 80 },
    { month: 3, total: 125 },
    { month: 4, total: 230 },
    { month: 5, total: 200 },
    { month: 6, total: 300 },
    { month: 7, total: 121 },
    { month: 8, total: 111 },
    { month: 9, total: 203 },
    { month: 10, total: 201 },
    { month: 11, total: 100 },
    { month: 12, total: 105 },
]
let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
}
console.log("Bài 5: Tổng doanh thu là: " + tongDoanhThu);
