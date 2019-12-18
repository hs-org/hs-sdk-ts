export type HSConfigType = {
    endpoint: string,
    credentials: {
        accessKey: string,
        secret: string
    }
};

export interface HSConfig {
    
    getConfig(): HSConfigType

}
