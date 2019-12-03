export interface HSPaymentMethod {

    readonly id: string

    /**
     * Payment method name, cannot be acronyms or any shortened forms, must be full method name.
     */
    name: string

    /**
     * Current status of the payment method, in this case, its availability.
     * See {@link HSPaymentMethodStatus} for detailed status specification information.
     * @see HSPaymentMethodStatus
     */
    status: HSPaymentMethodStatus

    /**
     * Secure URL of the official payment method website.
     */
    url: string

}

/**
 * `available` = The payment method is available for use.
 *
 * `inactive` = The payment method is not available for use,
 * but has not been discontinued, may have been temporarily disabled.
 *
 * `deprecated` = The payment method has been discontinued,
 * not available for use and will be removed in the near future.
 */
export type HSPaymentMethodStatus = 'available' | 'inactive' | 'deprecated';
