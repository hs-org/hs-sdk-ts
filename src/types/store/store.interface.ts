import {HSUser} from "../user";

export interface HSStore {

    /**
     * Unique store identification field.
     */
    readonly id: string

    /**
     * Original store name.
     */
    name: string

    /**
     * Description of the store.
     */
    description: string

    /**
     * Object of the shop owner.
     * @see HSUser
     */
    readonly owner: HSUser

    /**
     * Logo image URL.
     * May return null if the store does not have a logo defined.
     */
    logo?: string

    /**
     * Logo banner URL.
     * May return null if the store does not have a banner defined.
     */
    banner?: string

    /**
     * Date the store was created.
     */
    readonly createdAt: Date

    /**
     * Last time there was any modification to the store structure.
     */
    updatedAt: Date

}
