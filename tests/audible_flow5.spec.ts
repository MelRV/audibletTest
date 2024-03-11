import { test, expect } from "@playwright/test";

test("View images, read descriptions", async ({ page }) => {
  await page.goto("https://www.audible.com/");
  await page.pause();

  await page.getByRole("link", { name: "Sign Up" }).click();
  await page.getByLabel("Email or mobile phone number").fill("melissaramirezvillegas@gmail.com");
  await page.getByLabel("Continue").click();
  await page.getByLabel("Password").fill("OlinPruebas123");
  await page.getByLabel("Sign In").click();

  await page.getByRole("link", { name: "¡Hola, Olinprueba!" }).click();
  await page.getByRole("link", { name: "Detalles de cuenta" }).click();
  await page.getByRole("link", { name: "Preferencias" }).click();
  await page.getByRole("link", { name: "Historial de Escucha" }).click();
  await page.locator(".adbl-page").click();
  await page.getByRole("link", { name: "Resumen de créditos" }).click();
  await page.getByRole("link", { name: "Preferencias" }).click();
  await page.locator("#listener_profile_edit").click();
  await page.locator("#listener_profile_name_field").click();
  await page.locator("#listener_profile_name_field").fill("Olinprueba1");
  await page.getByRole("button", { name: "Guardar" }).click();
  await page.getByRole("link", { name: "¡Hola, Olinprueba!" }).click();
  await page.getByRole("link", { name: "¿No eres Olinprueba? Cerrar" }).click();
  await page.pause();
});