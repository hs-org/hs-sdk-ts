export interface HSTheme {

    /**
     * Theme Name. This will be used as an identifier in any context that is required.
     * Spaces, bars, unicode characters, or underlines are not allowed.
     * Must contain only hyphens and alphanumeric characters.
     * Use lowercase only, if you want to use something differential, prefer the {@link displayName} field
     */
    name: string;

    /**
     * This is the display name of the theme, it will be shown to users who will see it.
     * There are no restrictions on characters, only their length.
     * Must contain a minimum of 3 characters and a maximum of 24 characters.
     */
    displayName: string;

    /**
     * Information from the author of the theme,
     * it is important that there are no themes from unknown authors,
     * it is possible to pass a {@link HSThemeAuthor#url} to the author page, Github profile or anything else that can be recognized.
     * @see HSThemeAuthor
     */
    author: HSThemeAuthor | string;

    /**
     * URL to the repository or official page of the theme.
     */
    url?: string;

    /**
     * Theme Category. All available categories can be seen in the documentation.
     */
    category?: string;
}

export interface HSThemeAuthor {

    /**
     * Name of the author of the theme.
     */
    name: string;

    /**
     * URL to the author's page or profile.
     */
    url: string;

}
