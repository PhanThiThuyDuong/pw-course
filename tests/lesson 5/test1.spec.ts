import { test } from '@playwright/test';
test('test1', async ({ page }) => {
    await test.step('go trang meterial playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Vào trang đăng ký', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });
    await test.step('Nhập họ tên', async () => {
        await page.locator('//*[@id="username"]').fill('Thuỳ Dương');
    });
    await test.step('Nhập email', async () => {
        await page.locator('//*[@id="email"]').fill('phantthduong.263@gmail.com');
    });
    await test.step('Check thông tin giới tính', async () => {
        await page.locator('//*[@id="female"]').check();
    });
    await test.step('Check thông tin hobbies', async () => {
        await page.locator('//*[@id="traveling"]').check();
    });
    await test.step('Check thông tin interests', async () => {
        await page.selectOption('#interests', { value: 'technology' });
    });
    await test.step('Check thông tin country', async () => {
        await page.selectOption('#country', { value: 'usa' });
    });
    // await test.step('Check thông tin ngày sinh', async () => {
    //     await page.fill('#dod', '03-26-1998');
    // })
    await test.step('submit resister', async () => {
        await page.locator('//*[@id="registrationForm"]/div[14]/button').click();
    });
    await page.waitForTimeout(5000);

})
