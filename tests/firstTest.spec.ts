import { test } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://localhost:4200/')
})

test.describe('Hooks and Flow Control 1', () => {
	test.beforeEach( async ({page}) => {
		await page.getByText('Forms').click()
	})
	
	test('The forms test', async ({page}) => {
		await page.getByText('Form Layouts').click()
	})
	test('Navigate to datepicker page', async ({page}) => {
		await page.getByText('Datepicker').click()
	})
})

test.describe('Hooks and Flow Control 2 - by role', () => {
	test.beforeEach( async ({page}) => {
		await page.getByRole('link', { name: 'Charts' }).first().click();
	})

	test('The echarts test', async ({page}) => {
		await page.getByText('Echarts').click()
	})
})


