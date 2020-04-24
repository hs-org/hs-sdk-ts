import {HSEntity} from "../../index";

export interface HSStoreProduct extends HSEntity {

    /**
     * The product title.
     */
    readonly title: string

    /**
     * The complete and detailed description of the product.
     */
    readonly description: string

    /**
     * The customized code for the product, used by the store, for external references.
     */
    readonly code: string

    /**
     * The price of the product.
     */
    readonly unitPrice: number

    /**
     * List of URLs for product images.
     */
    readonly pictures: string[]

}
