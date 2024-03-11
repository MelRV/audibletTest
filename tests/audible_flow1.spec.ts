import { test, expect } from '@playwright/test';
test.only('test', async ({ page }) => {
  await page.goto('https://www.audible.com/ap/signin');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Entrar' }).click();
  await page.getByLabel('E-mail ou número de telefone').click();
  await page.getByLabel('E-mail ou número de telefone').fill('me');
  await page.getByLabel('E-mail ou número de telefone').click();
  await page.getByLabel('E-mail ou número de telefone').fill('melissaramirezvillegas@gmail.com');
  await page.getByLabel('E-mail ou número de telefone').press('Enter');
  await page.getByLabel('Senha').fill('OlinPruebas123');
  await page.getByLabel('Faça seu login').click();
  await page.getByRole('link', { name: 'Oi, Olinprueba!' }).click();
  await page.getByRole('link', { name: 'Oi, Olinprueba!' }).click();
  await page.getByRole('link', { name: 'Sair' }).click();
  });