import { test } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

test('User facing locators', async({page}) => {

	// find element by Role - (ARIA) and NAME
	await page.getByRole('textbox', {name: 'Email'}).first().click()
	await page.getByRole('button', {name: 'Sign in'}).first().click()

	// find element by tag Label (text inside)
	await page.getByLabel('Email').first().click()

	// find element by Placeholder (text inside)
	await page.getByPlaceholder('Jane Doe').click()

	// find element by Text
	await page.getByText('Using the Grid').click()

	// add extra attribute - data-testid="SignIn" - in HTML file
	await page.getByTestId('SignIn').click()
	
	// find element by Title (text)
	await page.getByTitle('IoT Dashboard').click()
})