import { test } from '@playwright/test';
test('test1', async ({ page }) => {
    await test.step('go trang meterial playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Vào trang product page', async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });
    await test.step('Thêm sản phẩm 01', async () => {
        await page.locator('//button[@data-product-id="1"]').dblclick();
    });
    await test.step('Thêm sản phẩm 02', async () => {
        await page.locator('//button[@data-product-id="2"]').dblclick();
        await page.locator('//button[@data-product-id="2"]').click();
    });
    await test.step('Thêm sản phẩm 03', async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    });

    await page.waitForTimeout(5000);

})
