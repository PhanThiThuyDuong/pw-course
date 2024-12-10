# Bài học lesson 04 
## Javascript basic 
1. Phạm vi của biến 
- let : Scope: {} phạm vi biến khai báo let nằm trong dấu ngoặc {}
- var : Global : Có phạm vi toàn cục 
- ưu tiên sử dụng let thay vì var để hạn chế lỗi tiềm ẩn
2. Điều kiện nâng cao
- if ... else 
if (condition){
    //run code khi condition = true;
} else {
    // run code khi condition = false;
}
- if ... else if ... if lồng nhau 
if (condition1){
    //run code khi condition1 = true;
} else if (condition2){
    // run code khi condition2 = true;
    else if (condition3){
        //run code khi condition3=true;
    } else {
        run code khi không có điều kiện nào đúng
    }
}
- switch ... case : 
switch(bieu_thuc){
    case gia_tri_1:
    //run code
    break;
    case gia_tri_2:
    //run code
    break;
    default:
    //runcode khi tất cả case false
}
3. So sánh 
- == và != 
So sánh kiểu "lỏng lẻo" 
convert giá trị về kiểu "lớn hơn"
- === và !== 
So sánh tuyệt đối
4. Loop nâng cao 
- for .. in 
ví dụ
let hocSinh ={
    Duong : 9,
    Bao : 10,
    Dung : 8
}
for (let property in hocSinh){
    console.log(hocSinh[property]);
}
- forEach
array.forEach ((value,index) => {
    // code
});
ví dụ:
const phanLoai = ["Giỏi","Khá","Trung bình"];
phanLoai.foEach ((value,index) => {
    console.log(`${index} ${value}`)
})
- for... of
const colors = ["red","pink","black"];
for (const color of colors){
    console.log(color);
}
5. Phân biệt break và continue
- break: thoát ra khỏi vòng lặp
- continue: bỏ qua vòng lặp chạy tới vòng lặp tiếp theo
