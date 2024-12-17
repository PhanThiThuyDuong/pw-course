import { test } from '@playwright/test';
test('test1', async ({ page }) => {
    await test.step('go trang meterial playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Vào trang to-do', async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });
    for (let i = 1; i<= 100;i++){
        await test.step(`Add Todo item ${i}`, async () => {
            await page.fill('#new-task', `Todo item ${i}`);
            await page.click('#add-task');
            await page.waitForSelector(`text=Todo item ${i}`, { timeout: 5000 });
        });
    }
    await page.waitForTimeout(5000);

})
