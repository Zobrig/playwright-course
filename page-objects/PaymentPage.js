export class PaymentPage {
	constructor(page) {
		this.page = page

		this.discountCode = page.locator('[data-qa="discount-code"]')
	}

	activateDiscount = async () => {
		await this.page.pause()
	}
}