# Bài 5 
## DOM
1. DOM là gì?
DOM = Document Object Model 
Ví dụ thực tế 
Thẻ mở, thẻ đóng, thẻ tự đóng
2. Các thẻ thường gặp
<div>
<h1></h1> đến <h6></h6>
<form></form>
Thẻ text, email, radio, checkbox, file, color, range, date
Thẻ textarea
Thẻ radio button
Thẻ checkbox
Thẻ list và dropdown
Thẻ button
Thẻ tabble
Thẻ date picker
Thẻ slider
Thẻ iframe

##  Selector 
1. Selector là gì?
Là cách chọn phần tử trên trang
có nhiểu kiểu:
* XPath selector
* CSS selector
* Playwright selector
2. XPath selector
- XPath = XML Path 
- Có hai loại: 
* Tuyệt đối: đi dọc cây Dom bắt đầu bởi / 
* Tương đối: tìm dựa vào đặc tính
Bắt đầu bởi // 
//tenthe[@thuoctinh="giatri"]
* Nên dùng Xpath tương đối

## Playwright basic syntax
1. Test
Đơn vị cơ bản để khai báo một test
vd:
import {test} from '@playwright/test';
test('<tên test>',async ({page}) => {
    // code của test
})
2. Step
Đơn vị nhỏ hơn test, để khai báo từng step của test case
await test.step('Tên step', async () => {
    //code here
});
Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain 
test ('<tên step>', async ({page}) => {
    await test.step('Tên step', async () => {
    //code here
    });
});
3. Basic actions
- Navigate: 
await page.goto('https://pw-practice.playwrightvn.com/');
- Click:
single click
await page.locator("//button").click();
double click
await page.locator("//button").dblclick();
click chuột phải 
page.locator("//button").click({
    modifiers: ['Shift'],
})
- Input:
Fill
page.locator("//input").fill('playwright Viet Nam');
PressSequentially 
page.locator("//input).pressSequentially('Playwright Viet Nam', {
    delay: 100,
});
- Radio/checkbox
Lấy giá trị hiện tại đang là check hay không
const isChecked = 
page.locator("//input").isChecked();
check/uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);


