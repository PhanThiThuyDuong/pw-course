# Bài học lesson 3
## Git
1. Xem lịch sử commit 
git log 
2. Thay đổi commit  
git commit --amend
3. Thay đổi commit message
git commit --amend -m "message"
4. Đưa từ vùng staging về working directory
git restore --staged <file>
5. Đưa từ vùng reponsitory về working directory (uncommit)
git reset HEAD~1 (undo 1 commit)
6. Branching model 
*Dùng branch để tạo ra một vùng làm việc mới*
Branch = nhánh
*Tạo Branch*
git branch <ten_branch>
git checkout <ten_branch>
git checkout -b <ten_branch>
* Note: luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet
6. Bỏ qua file
*Dùng để bỏ qua các file không cần git theo dõi*
*Ignore file và ignore folder*
Gitignore 
## Javascript
1. Quy tắc
Convention = quy tắt
Convention giúp:
- Code theo 1 formart, dễ nhìn
- Người khác trong team dễ đọc code
Conventions
- snake_case_now_now <chưa dùng>
- kebab-case-now-now <tên file>
- camelCaseNowNow <tên biến>
- PascalCaseNowNow <tên class>
2. Console.log 
console.log("Nội dung");
console.log('Nội dung);
console.log(`${variable_name}`);
console.log("Phép tính" + bienTong + "Đơn vị");
3. Object 
Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số 
hocSinh
{
    ten;
    lop;
}
Gán: hocSinh.ten = "Duong";
4. Logical opertor 
&& cả 2 vế của mệnh đề đều đúng
|| một trong 2 vế đùng
!: đảo ngược lại giá trị của mệnh đề
5. Array mảng
Khai báo 
<Kiểu dữ liệu> <tên biến mảng> = ["giá trị 1","giá trị 2","giá trị 3"];
ví dụ 
let hsk11 = [Duong";"Khoa","Thư","Thao","Tien"];
hsk11[0] = "Duong";
hsk11[3] = "Thao";

6. Funtion
Hàm là đoạn code được đặt tên và có thể tái sử dụng , thực hiện 1 nhiệm vụ, chức năng hoặc tính toán cụ thể 
- Khai báo
function <nameFunction>(){
    //code
}
- Parameter
- Return value
7. Phạm vi biến 
- var : Global
- let : Scrope
8. Điều kiện nâng cao 
- Cú pháp
if... else : Nếu ... ngược lại 
if... else if ... if : câu lệnh if lồng nhau
switch <Điều kiện> case
default







