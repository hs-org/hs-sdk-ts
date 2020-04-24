import {HSUser} from "../user";
import {HSEntity} from "../../index";

export interface HSStore extends HSEntity {

    /**
     * Unique store identification field.
     */
    readonly id: string

    /**
     * Original store name.
     */
    readonly name: string

    /**
     * Description of the store.
     */
    readonly description: string

    /**
     * Object of the shop owner.
     * @see HSUser
     */
    readonly owner: HSUser

    /**
     * Store availability status.
     */
    readonly status: string

    /**
     * Name of the store category.
     */
    readonly category: string

    /**
     * Secure store visit address.
     */
    readonly domain: string

    /**
     * Logo image URL.
     * May return null if the store does not have a logo defined.
     */
    readonly logo?: string

    /**
     * Logo banner URL.
     * May return null if the store does not have a banner defined.
     */
    readonly banner?: string

}
