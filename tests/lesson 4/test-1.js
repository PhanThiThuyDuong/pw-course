//Bài 1: Khởi động Tàu Vũ trụ K11
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
let crew = ["Dương", "Đức", "Tiên", "Dũng", "Thư", "Thảo", "Thanh", "Trang", "Khoa"];
function launchShip(crew, mission) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: " + crew + " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!");
}
launchShip(crew, mission);

//Bài 2: Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
const distance = calculateDistance(100, 24);
console.log("Khoảng cách đến hành tinh bí ẩn là: " + distance + "km");

//Bài 3: Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}
const timeToHex = convertTimeToHex(120);
console.log("Thời gian trên hành tinh này là: " + timeToHex + "s");

//Bài 4: Khám phá kho báu
//Cách 1:
function decryptCode(code) {
    let decrypted = [];
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char === char.toLowerCase()) {
            decrypted += char.toUpperCase();
        } else if (char === char.toUpperCase()) {
            decrypted += char.toLowerCase();
        } else {
            decrypted += char;
        }
    }
    return decrypted;
}
const code = "K11 Challenge";
const codeDecrypt = decryptCode(code);
console.log("Mật mã kho báu là: " + codeDecrypt);
//Cách 2
// function decryptCode(code) {
//     let decrypted = [];
//     for (let char of code) {
//         if (char === char.toLowerCase()) {
//             decrypted += char.toUpperCase();
//         } else if (char === char.toUpperCase()) {
//             decrypted += char.toLowerCase();
//         } else {
//             decrypted += char;
//         }
//     }
//     return decrypted;
// }
// const code = "K11 Challenge";
// const codeDecrypt = decryptCode(code);
// console.log("Mật mã kho báu là: " + codeDecrypt);
//Cách 3
// function decryptCode(code) {
//     let decrypted = [];
//     for (let i in code) {
//         let char = code[i];
//         if (char === char.toLowerCase()) {
//             decrypted += char.toUpperCase();
//         } else if (char === char.toUpperCase()) {
//             decrypted += char.toLowerCase();
//         } else {
//             decrypted += char;
//         }
//     }
//     return decrypted;
// }
// const code = "K11 Challenge";
// const codeDecrypt = decryptCode(code);
// console.log("Mật mã kho báu là: " + codeDecrypt);
//Cách 4 
// function decryptCode(code) {
//     let decrypted = [];
//     [...code].forEach(char => {
//         if (char === char.toLowerCase()) {
//             decrypted += char.toUpperCase();
//         } else if (char === char.toUpperCase()) {
//             decrypted += char.toLowerCase();
//         } else {
//             decrypted += char;
//         }
//     }
//     );
//     console.log(decrypted);
//     return decrypted;
// }
// const code = "K11 Challenge";
// const codeDecrypt = decryptCode(code);
// console.log("Mật mã kho báu là: " + codeDecrypt);

//Bài 5: Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();