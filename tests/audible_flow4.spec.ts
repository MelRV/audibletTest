import { test, expect } from '@playwright/test';

test('Manage orders and updates', async ({ page }) => {
  await page.goto('https://www.audible.com/es_US/?ref_pageloadid=jPVAwhpvCch7yHHT&ref=a_es-US_acc_t1_nav_header_logo&pf_rd_p=eb5f3a09-e45d-447f-867a-f3ef301ff165&pf_rd_r=7B3VVGP8SHE87W8VR8FG&pageLoadId=uyuTvFN2w3oecbb3&creativeId=2809d4d1-739a-4a4c-a7fb-2e127073d316');
  await page.getByRole('link', { name: 'Iniciar sesión' }).click();
  await expect(page.getByLabel('E-mail o celular')).toBeVisible();
  await page.getByLabel('E-mail o celular').click();
  await page.getByLabel('E-mail o celular').fill('melissaramirezvillegas@gmail.com');
  await page.getByLabel('Continuar').click();
  await page.getByLabel('Contraseña').fill('OlinPruebas123');
  await page.getByLabel('Ingresar').click();
  await page.locator('.hero-content').click();
  await page.getByRole('link', { name: '¡Hola, Olinprueba!' }).click();
  await page.getByRole('link', { name: 'Detalles de cuenta' }).click();
  await page.getByRole('link', { name: 'Preferencias' }).click();
  await page.getByLabel('Editar información de cuenta').click();
  await page.locator('#auth-cnep-edit-name-button').click();
  await page.locator('#ap_customer_name').click();
  await page.getByLabel('Guardar cambios').click();
  await page.locator('#auth-cnep-edit-email-button').click();
  await page.getByLabel('Continue').click();
  await page.goto('https://www.amazon.com/ap/cvf/request?arb=b8ba8319-f17a-40a5-b3df-f41745a1cb47');
  
});