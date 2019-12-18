export interface HSGame {

    /**
     * Unique game identification.
     */
    readonly id: string

    /**
     * Name of the game
     */
    readonly name: string

    /**
     * Short description of the game
     */
    readonly description: string

    /**
     * URL of the game icon.
     */
    readonly icon: string

    /**
     * Date the game was added to the catalog.
     */
    readonly createdAt: Date

    /**
     * Last time the game description or icon was updated.
     */
    readonly updatedAt: Date

}
