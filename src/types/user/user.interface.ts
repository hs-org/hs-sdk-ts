import {HSUserVisibility} from "./user-visibility.enum";

export interface HSUser {

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
    visibility: HSUserVisibility

}
