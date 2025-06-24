import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

// Long version 
test('Reusing the locators long', async({page}) => {
	await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: 'Email'}).fill('test@test.com')
	await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: 'Password'}).fill('UserWelcome7')
	await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('button').click()
})

// Compact version
test('Reusing the locators compact', async({page}) => {
	const hasUsingForm = page.locator('nb-card').filter({hasText: 'Using the Grid'})

	await hasUsingForm.getByRole('textbox', {name: 'Email'}).fill('test@test.com')
	await hasUsingForm.getByRole('textbox', {name: 'Password'}).fill('UserWelcome7')
	await hasUsingForm.getByRole('button').click()
})

// Adapted version
test('Reusing the locators adapted', async({page}) => {
	
	const hasHorizontalForm = page.locator('nb-card').filter({hasText: 'Horizontal form'})
	const emailField = hasHorizontalForm.getByRole('textbox', {name: 'Email'})
	const passwordField = hasHorizontalForm.getByRole('textbox', {name: 'Password'})

	await emailField.fill('test@test.com')
	await passwordField.fill('UserWelcome7')
	await hasHorizontalForm.locator('nb-checkbox').click()
	await hasHorizontalForm.getByRole('button').click()

	await expect(emailField).toHaveValue('test@test.com')
	await expect(passwordField).toHaveValue('UserWelcome7')
})