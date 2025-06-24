import { test } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

test('locating parent elements', async ({page}) => {

	// Search for a card (nb-card) with text and fields inside
	await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox', {name: 'Email'}).click()

	// Search for a card with a specific field ID
	await page.locator('nb-card', {has: page.locator('#inputPassword2')}).getByRole('textbox', {name: 'Password'}).click()
	
	// Filter cards by text:
	// Step 1 - Find all <nb-card> elements.
	// Step 2 - Leave only those with the text "Basic form".
	// Step 3 - In the filtered card, look for the Email field.
	await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: 'Email'}).click()

	// Чем отличается от первого примера:
	// locator('nb-card', {hasText: ...}) — ищет сразу с условием.
	// .filter({hasText: ...}) — сначала находит все карточки, потом фильтрует.

// --------------------------------------

	// Filter by another element inside
	await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Password'}).click()

	// Double filtering (by element + text)
	await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: 'Sign in'}).getByRole('textbox', {name: 'Email'}).click()

	// Search via parent element (locator('.') magic)
	await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: "Email"}).click()
})