import {HSEntity} from "../../index";
import {HSThemeAuthor} from "./theme-author";

export interface HSTheme extends HSEntity {

    /**
     * Theme Name. This will be used as an identifier in any context that is required.
     * Spaces, bars, unicode characters, or underlines are not allowed.
     * Must contain only hyphens and alphanumeric characters.
     * Use lowercase only, if you want to use something differential, prefer the {@link displayName} field
     */
    readonly name: string;

    /**
     * This is the display name of the theme, it will be shown to users who will see it.
     * There are no restrictions on characters, only their length.
     * Must contain a minimum of 3 characters and a maximum of 24 characters.
     */
    readonly displayName: string;

    /**
     * Information from the author of the theme,
     * it is important that there are no themes from unknown authors,
     * it is possible to pass a {@link HSThemeAuthor#url} to the author page, Github profile or anything else that can be recognized.
     * @see HSThemeAuthor
     */
    readonly author: HSThemeAuthor;

    /**
     * URL to the repository or official page of the theme.
     */
    readonly url: string;

    /**
     * Theme Category.
     * All available categories can be seen in the documentation.
     */
    readonly category?: string;
}
