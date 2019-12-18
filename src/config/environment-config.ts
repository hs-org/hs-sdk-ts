import {HSConfig, HSConfigType} from "./hs-config";

export class HSEnvironmentConfig implements HSConfig {

    constructor() {
        if (!process.env)
            throw Error("Could not find environment variables.");
    }

    getConfig(): HSConfigType {
        let env = process.env;
        return {
            endpoint: env.HS_ENDPOINT,
            credentials: {
                accessKey: env.HS_ACCESS_TOKEN,
                secret: env.HS_SECRET
            }
        }
    }

}
