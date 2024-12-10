const { ppid } = require("process");

//Bài 1
console.log("Bài 1:")
let lengthPerson = 1.70;
let wightPerson = 90;
calculateBMI(lengthPerson, wightPerson);
function calculateBMI(lengthPerson, wightPerson) {
    let personBMI = wightPerson / (lengthPerson * lengthPerson);
    // console.log (personBMI);
    if (personBMI < 18.5) {
        console.log("Thiếu cân");
    }
    else if (personBMI >= 18.5 && personBMI < 25) {
        console.log("Bình Thường");
    }
    else if (personBMI >= 25 && personBMI < 30) {
        console.log("Thừa Cân");
    }
    else if (personBMI >= 30) {
        console.log("Béo phì");
    }
}

//Bài 2
console.log("Bài 2:")
function transferF(doC) {
    let result = doC * 9 / 5 + 32;
    return result;

};
function transferC(doF) {
    let result = (doF - 32) * 5 / 9;
    return result;

};
let doC = 23;
let f = transferF(doC);
console.log("Chuyển đổi đô C sang F " + f);
console.log
let doF = 30;
let c = transferF(doF);
console.log("Chuyển đổi độ F sang C " + c);

//Bai 3
function tinhTongMang(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
    }
    return tong;

};
let arr = [3, 5, 3, 2];
tinhTongMang(arr)
let tong = tinhTongMang(arr);
console.log("Bài 3: Tổng mảng là: ", tong);

//Bài 4
function soNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Bài 4: ")
let arr4 = [1, 3, 5, 7, 13, 9];
for (let i = 0; i < arr4.length; i++) {
    let soMang = arr4[i];
    if (soNguyenTo(soMang)) {
        console.log(soMang + " Là số nguyên tố");
    }
    else {
        console.log(soMang + " Không là số nguyên tố");
    }
}

//Bài 5
console.log("Bài 5:")
let danhSachNguoiDung = [
    { name: 'Duong', email: 'Duong@gmail.com' },
    { name: 'Thu', email: 'Thu.gmailcom' },
    { name: 'Bao', email: 'Bao@.gmailcom' }
];
function capNhatEmail(name, newEmail) {
    for (let i = 0; i < danhSachNguoiDung.length; i++) {
        if (danhSachNguoiDung[i].name === name) {
            danhSachNguoiDung[i].email = newEmail;
            console.log("Email của " + name + "đã được cập nhật thành " + newEmail);
        }
    }
    console.log("Không tìm thấy người dùng có tên" + name);
}
capNhatEmail('Van', 'Van.new@gmail.com');
console.log(danhSachNguoiDung);

//Bài 6:
console.log("Bài 6:");
let danhSachHocSinh = [
    { name: 'Duong', score: 9 },
    { name: 'Thu', score: 9.2 },
    { name: 'Bao', score: 9.5 }
];
function tinhDiemTrungBinh(danhSachHocSinh) {
    let diemTrungBinh;
    let tongDiem = 0;
    for (let i = 0; i < danhSachHocSinh.length; i++) {
        tongDiem += danhSachHocSinh[i].score;
    }
    diemTrungBinh = tongDiem / danhSachHocSinh.length;
    console.log("Điểm trung bình là: " + diemTrungBinh);
}
tinhDiemTrungBinh(danhSachHocSinh);


//Bài 7:
console.log("Bài 7:")
let danhSachSanPham = [
    { nameProduct: 'Bánh', price: -9 },
    { nameProductproduct: 'Kẹo', price: 9.2 },
    { nameProduct: 'Nước ngọt', price: 9.5 }
];
function kiemTraGiaSanPham(danhSachSanPham) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
        if (danhSachSanPham[i].price > 0) {
            return true
        } else {
            return false
        }
    }
}
if (kiemTraGiaSanPham(danhSachSanPham)) {
    console.log("Tất cả các sản phẩm đều có giá lớn hơn 0");
} else {
    console.log("Có sản phẩm có giá trị nhỏ hơn 0");
}

//Bài 8: 
const gio = 8;
console.log("Bài 8:");
function kiemTraGioHoaDong(gio) {
    if (gio >= 9 && gio <= 21) {
        console.log("Đang mở cửa");
    } else {
        console.log("Không trong thời gian hoạt động của cửa hàng")
    }
}
kiemTraGioHoaDong(gio);

//Bài 9:
console.log("Bài 9:");
function tinhGiaVe(tuoi) {
    let giaVe = 0;
    if (tuoi <= 5) {
        giaVe = 0;
    } else {
        if (tuoi > 5 && tuoi < 18) {
            giaVe = 50;
        } else {
            if (tuoi >= 18) {
                giaVe = 100;
            }
        }
    }
    return giaVe;
}
const tuoi = 50;
console.log("Giá vé là:" + tinhGiaVe(tuoi));

//Bài 10:
console.log("Bài 10:")
const thang = 1;
inThang(thang);
function inThang(thang) {
    switch (thang) {
        case 1:
            console.log("Tháng 1");
            break;
        case 2:
            console.log("Tháng 2");
            break;
        case 3:
            console.log("Tháng 3");
            break;
        case 4:
            console.log("Tháng 4");
            break;
        case 5:
            console.log("Tháng 5");
            break;
        case 6:
            console.log("Tháng 6");
            break;
        case 7:
            console.log("Tháng 7");
            break;
        case 8:
            console.log("Tháng 8");
            break;
        case 9:
            console.log("Tháng 9");
            break;
        case 10:
            console.log("Tháng 10");
            break;
        case 11:
            console.log("Tháng 11");
            break;
        case 12:
            console.log("Tháng 12");
            break;
        default:
            console.log("Giá trị không hợp lệ");
            break;
    }
}

//Bài 11:
console.log("Bài 11:");
diemTongKet = 5.2;
console.log(phanLoaiHocSinh("Phân loại học sinh" + diemTongKet));
function phanLoaiHocSinh(diem) {
    let phanLoai;
    if (diem >= 8 && diem <= 10) {
        phanLoai = "Giỏi";
    } else {
        if (diem < 8 && diem >= 6.5) {
            phanLoai = "Khá";
        } else {
            if (diem >= 5 && diem < 6.5) {
                phanLoai = "Trung Binh";
            } else {
                if (diem > 0 && diem < 5) {
                    phanLoai = "Yếu";
                }
                else {
                    phanLoai = "Giá trị không hợp lệ";
                }
            }
        }
    }
    return phanLoai
}

//Bài 12:
console.log("Bài 12:");
function thongBaoThoiTiet(nhietDo) {
    console.log("Nhiệt độ hiện tại là: " + nhietDo + "°C");
  
    if (nhietDo >= 30) {
      console.log("Trạng thái thời tiết: Nóng");
    } else if (nhietDo >= 20 && nhietDo < 30) {
      console.log("Trạng thái thời tiết: Mát");
    } else {
      console.log("Trạng thái thời tiết: Lạnh");
    }
  }
  thongBaoThoiTiet(35);
