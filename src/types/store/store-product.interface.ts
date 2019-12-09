export interface HSStoreProduct {

    /**
     * Unique product identification.
     */
    id: string

    /**
     * Product seller identification code.
     */
    code: string

    /**
     * Product Title
     */
    title: string

    /**
     * Detailed description of the product.
     */
    description: string

    /**
     * Product price given in decimal.
     */
    price: number

    /**
     * Array containing all hashes of product images.
     */
    images: string[]

    /**
     * Date the product was added to the store.
     */
    readonly createdAt: Date

    /**
     * Last time the product was changed.
     */
    updatedAt: Date

}
