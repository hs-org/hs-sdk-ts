export interface HSUser {

    /**
     * User unique ID.
     */
    readonly id: string

    /**
     * First name of the user.
     */
    readonly firstName: string

    /**
     * Last name of the user.
     */
    readonly lastName: string

    /**
     * User email address. Their availability is directly
     * affected by their level of {@link visibility}.
     */
    readonly email?: string

    /**
     * User account visibility level.
     */
    readonly visibility: number

}
