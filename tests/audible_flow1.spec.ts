import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.audible.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('melissaramirezvillegas@gmail.com');
  await page.getByLabel('Email or mobile phone number').press('Enter');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Olin');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('OlinPruebas123');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Hi, Olinprueba!' }).click();
});