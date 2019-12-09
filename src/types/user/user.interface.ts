export interface HSUser {

    /**
     * Unique user ID.
     */
    readonly id: string

    /**
     * First name of the user.
     */
    readonly firstName: string

    /**
     * First name of the user.
     */
    readonly lastName: string

    /**
     * Email of the user.
     * May be null if user email visibility is set to `BUYERS_ONLY` or `PRIVATE`
     */
    readonly email?: string

}
