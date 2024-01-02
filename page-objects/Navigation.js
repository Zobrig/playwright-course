export class Navigation {
	constructor(page) {
		this.page = page

		this.basketCounter = page.locator('[data-qa="header-basket-count"]')
		this.checkoutLink = page.getByRole('link', { name: 'Checkout' })
		this.myAccountLink = page.getByRole('link', { name: 'My Account' })
	}

	getBasketCount = async () => {
		await this.basketCounter.waitFor()
		const text = await this.basketCounter.innerText()
		return parseInt(text, 10)
	}

	goToCheckout = async () => {
		await this.checkoutLink.waitFor()
		await this.checkoutLink.click()
		await this.page.waitForURL("/basket")
	}

	goToMyAccount = async () => {
		await this.myAccountLink.waitFor()
		await this.myAccountLink.click()
		await this.page.waitForURL("/my-account")
	}
}