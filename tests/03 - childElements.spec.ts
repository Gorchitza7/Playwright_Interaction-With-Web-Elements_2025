import { test } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

test('locating child elements', async({page}) => {

	// Compact syntax
	await page.locator('nb-card nb-radio :text-is("Option 1")').click()

	// Working, but not compact syntax
	await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

	// combination regular locator method & user facing locator
	await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()

	// least desirable approach using method - nth()
	await page.locator('nb-card').nth(3).getByRole('button').click()
})
