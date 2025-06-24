import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

test('Extracting values', async ({page}) => {

	// Single test valuee
	const hasBasicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
	const buttonText = await hasBasicForm.locator('button').textContent()

	expect(buttonText).toEqual('Submit')

	// All text values
	const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
	expect(allRadioButtonsLabels).toContain('Option 1')

	// Input value
	const emailField = hasBasicForm.getByRole('textbox', {name: 'Email'})
	await emailField.fill('test@test.com')
	const emailValue = await emailField.inputValue()
	expect(emailValue).toEqual('test@test.com')

	const placeholderValue = await emailField.getAttribute('placeholder')
	expect(placeholderValue).toEqual('Email')
})