import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}) => {
	await page.goto('http://uitestingplayground.com/ajax')
	await page.getByText('Button Triggering AJAX Request').click()
})

test('Auto waiting', async({page}) => {

	const successButton = page.locator('.bg-success')
	await successButton.click()

	// ------ (it's done) - textContent() - have autowaiting
	const demoText = await successButton.textContent()
	expect(demoText).toEqual('Data loaded with AJAX get request.')

	// ------ (it's error) - allTextContents() - don't have autowaiting 
	const textDemo = await successButton.allTextContents() // Вернет массив
	expect(textDemo).toEqual('Data loaded with AJAX get request.') // Упадет, так как сравниваем массив со строкой

	// ------ (solution 'textDemo' problem):
	await successButton.waitFor({state: 'attached'})
	const solutionTextDemo = await successButton.textContent()
	expect(solutionTextDemo).toEqual('Data loaded with AJAX get request.')
})

test('alternative waits', async({page}) => {
	const successButton = page.locator('.bg-success')

	// ___ wait for element
	await page.waitForSelector('.bg-success') 

	// ___ wait for particular response - API ('RECOMMENDED') 
	// Ожидание AJAX-ответа:
	await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

	// ___ wait for network calls to be completed ('NOT RECOMMENDED')
	await page.waitForLoadState('networkidle')

	const text = await successButton.allTextContents()
	expect(text).toContain('Data loaded with AJAX get request.') // Правильное сравнение для массива
})