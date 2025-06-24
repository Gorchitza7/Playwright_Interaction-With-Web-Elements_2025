import { test } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async ({page}) => {
	// find locator by Tag name:
	await page.locator('input').first().click()

	// find by ID:
	page.locator('#inputEmail1')

	// find by Class value
	page.locator('.shape-rectangle')

	// find by Attribute
	page.locator('[placeholder="Email"]')

	// find Class value (full value)
	page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

	// combine different selectors
	page.locator('input[placeholder="Email"]') // not put space here
	page.locator('input[placeholder="Email"][nbinput]') // add attribute [nbinput]
	page.getByRole('textbox', { name: 'Email' }) // option two

	// combine different selectors + add class
	page.locator('input[placeholder="Email"].shape-rectangle') // not put space here and add class

	// find by XPath (NOT RECOMMENDED)
	page.locator('//*[@id="inputEmail1"]')

	// find partial text match
	page.locator(':text("Using the Grid")')

	// find by exact text match
	page.locator(':text-is("Using the Grid")')

	// ------------------------------------------
	
})

