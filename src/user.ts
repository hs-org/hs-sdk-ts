export interface User {

    /**
     * Unique user ID.
     */
    readonly id: string

    /**
     * Full name of the user.
     */
    readonly name: string

    /**
     * Email of the user.
     * May be null if user email visibility is set to {@link BUYERS_ONLY} or {@link PRIVATE}
     * @see visibility
     */
    readonly email?: string

    /**
     * Visibility level of the user personal data.
     */
    visibility: UserVisibility

}

export enum UserVisibility {

    /**
     * Everyone can see user personal data.
     */
    PUBLIC,

    /**
     * Only buyers can see user personal data.
     */
    BUYERS_ONLY,

    /**
     * No one can see the user personal data, only the user himself.
     */
    PRIVATE

}
