import {HappyShop} from "./hs";

export interface HSEntity {

    readonly createdAt: Date

    readonly updatedAt: Date

}

export * from "./types/payment"
export * from "./types/user"
export * from "./types/theme"
export * from "./types/store"
export * from "./config";

export default HappyShop;
