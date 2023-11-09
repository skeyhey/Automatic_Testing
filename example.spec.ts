import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120000)
  await page.goto('https://www.24mx.ie/');
  await page.getByRole('link', { name: 'Motocross Gear', exact: true }).click();
  await page.getByRole('link', { name: 'Water Bottles' }).click();
  await page.getByRole('link', { name: '24MX Track Water Bottle Personalised €9.45 -37% €14.99 199 Reviews 24MX Track Water Bottle' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.locator('div').filter({ hasText: /^YOUR CART IS EMPTY Continue shopping cart$/ }).click();
});
