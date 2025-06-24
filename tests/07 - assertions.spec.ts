import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

test('assertions', async({page}) => {

	const hasBasicFormButton = page.locator('nb-card').filter({hasText: 'Basic form'}).locator('button')

	// General assertion
	const value = 5
	expect(value).toEqual(5)

	const text = await hasBasicFormButton.textContent()
	expect(text).toEqual('Submit')

	// Locator assertion
	await expect(hasBasicFormButton).toHaveText('Submit')

	// Soft assertion
	await expect.soft(hasBasicFormButton).toHaveText('Submit')
	await hasBasicFormButton.click()
})