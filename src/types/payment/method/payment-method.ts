export interface HSPaymentMethod {

    /**
     * Unique payment id.
     */
    readonly id: string

    /**
     * Payment method name, cannot be acronyms or any shortened forms, must be full method name.
     */
    readonly name: string

    /**
     * Current status of the payment method, in this case, its availability.
     * See the documentation for detailed status specification information.
     */
    readonly status: string

    /**
     * Secure URL of the official payment method website.
     */
    readonly url: string

}
