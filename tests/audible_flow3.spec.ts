import {test, expect} from '@playwright/test'

test('View images, read descriptions', async({page}) =>{
    await page.goto('https://www.audible.com/');
    await page.pause()

    await page.getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('Email or mobile phone number').fill('melissaramirezvillegas@gmail.com');
    await page.getByLabel('Continue').click();
    await page.getByLabel('Password').fill('OlinPruebas123');
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: 'audible, an amazon company' }).click();
    await page.getByPlaceholder('Find your next great listen').fill('dune');
    await page.getByLabel('Submit Search').click();
    await page.goto('https://www.audible.com/pd/Dune-Audiobook/B002V1OF70?qid=1710171646&sr=1-1&ref_pageloadid=not_applicable&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=KTKFD1Y8V3XD97Q186HG&pageLoadId=uq0ueP6hAyPOUpUi&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c');
    await page.getByAltText('Dune Audiobook By Frank').click();
    await page.getByRole('heading', { name: 'Critic reviews' }).click();
    await page.getByRole('heading', { name: 'What listeners say about Dune' }).click();
    await page.getByText('What listeners say about Dune Average customer ratings Overall 4.5 out of 5').click();

  await page.pause()

});