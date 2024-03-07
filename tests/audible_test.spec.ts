const { chromium } = require('playwright');
import {test, expect} from '@playwright/test'

test('View images, read descriptions', async({page}) =>{
    

    await page.goto('https://www.audible.com/');
  await page.getByRole('link', { name: 'Iniciar sesión' }).click();
  await page.getByLabel('E-mail o celular').click();
  await page.getByLabel('E-mail o celular').fill('melissaramirezvillegas@gmail.com');
  await page.getByLabel('Continuar').click();
  await page.getByLabel('Contraseña').press('CapsLock');
  await page.getByLabel('Contraseña').fill('Olin');
  await page.getByLabel('Contraseña').press('CapsLock');
  await page.getByLabel('Contraseña').fill('OlinPruebas123');
  await page.getByLabel('Ingresar').click();
  await page.getByPlaceholder('Find your next great listen').click();
  await page.getByPlaceholder('Find your next great listen').press('CapsLock');
  await page.getByPlaceholder('Find your next great listen').fill('Proyecto ');
  await page.getByPlaceholder('Find your next great listen').press('CapsLock');
  await page.getByPlaceholder('Find your next great listen').fill('Proyecto Hail ');
  await page.getByPlaceholder('Find your next great listen').press('CapsLock');
  await page.pause()
  await page.getByPlaceholder('Find your next great listen').fill('Proyecto Hail Mary');
  await page.pause()
  await page.getByRole('option', { name: 'Project Hail Mary By: Andy' }).click();
  await page.pause()

})