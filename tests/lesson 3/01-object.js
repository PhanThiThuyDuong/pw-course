//Bài 1
let car = {
    make: "Toyata",
    model: "Corolla",
    year: "2021"
};
console.log("Bài 1: Năm sản xuất của xe: " + car.year);

//Bài 2
let person = {
    name: "Duong",
    address: {
        street: "Nguyễn Huệ",
        city: "Hồ Chí Minh",
        country: "Việt Nam"

    }
};
console.log("Bài 2: " + person.name + " đang ở đường " + person.address.street + " Thành phố " + person.address.city + " Quốc gia " + person.address.country);

//Bài 3
let student = {
    name: "Dương",
    grades: {
        math: "",
        english: ""
    }
};
student.grades["math"] = 9.0;
console.log("Bài 3: " + student.grades.math);

//Bài 4 
let product = {
    apple: 20,
    banana: 15,
    orange: 30
};
console.log("Bài 4:")
for (let nameProduct in product) {
    console.log(`${nameProduct} : ${product[nameProduct]}`)
};

//Bài 5 
let settings = {
    volume: "max",
    brightness: "min"
};
settings.volume = "min";
console.log("Bài 5: Setting volume " + settings.volume);

//Bài 6
let bike = {};
bike.color = "pink";
console.log("Bài 6: Màu sắc xe đạp " + bike.color);

//Bài 7
let employee = {
    name: "Dương",
    age: 26
}
delete employee.age;
console.log("Bài 7: ", employee);

//Bài 8
const school = { classA: ["An", "Bình", "Châu"], classB: ["Đào", "Hương", "Giang"] };
console.log("Bài 8: ", school);