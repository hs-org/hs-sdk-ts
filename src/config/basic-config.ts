import {HSConfig, HSConfigType} from "./hs-config";

export class HSBasicConfig implements HSConfig {

    private readonly config!: HSConfigType;

    constructor(
        private readonly endpoint: string,
        private readonly accessKey: string,
        private readonly secret: string
    ) {
        this.config = {
            endpoint,
            credentials: { accessKey, secret }
        }
    }

    getConfig(): HSConfigType {
        return this.config;
    }

}
