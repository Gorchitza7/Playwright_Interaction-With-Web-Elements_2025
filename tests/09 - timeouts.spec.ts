import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}, testInfo) => {
	await page.goto('http://uitestingplayground.com/ajax')
	await page.getByText('Button Triggering AJAX Request').click()

	// Увеличиваем таймаут для этого beforeEach на 2 секунды
	testInfo.setTimeout(testInfo.timeout + 2000)
})

test('timeouts', async ({page}) => {

	// Устанавливаем кастомный таймаут (10 сек) для этого теста
	test.setTimeout(10000)

	// Помечаем тест как "медленный" (таймаут ×3)
	test.slow()

	const successButton = page.locator('.bg-success')
	await successButton.click()
})