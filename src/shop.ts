import {User} from "./user";

export interface Shop {

    /**
     * Unique shop ID.
     */
    readonly id: string

    /**
     * Shop name.
     */
    name: string

    /**
     * Shop owner user.
     * @see User
     */
    readonly owner: User

    /**
     * Shop description.
     */
    description: string

    /**
     * Whether the store is online or offline.
     */
    isOnline: boolean

    /**
     * Store popularity level among your customers.
     */
    popularity: number

    /**
     * Shop creation date.
     */
    createdAt: Date

    /**
     * Last time there was any change to the store data structure.
     */
    updatedAt: Date

    /**
     * Store logo id.
     * This may be null if the store has not yet defined a logo or has removed it.
     */
    logo?: String

}
