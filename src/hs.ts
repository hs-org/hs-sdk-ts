import Axios, {AxiosError, AxiosInstance} from "axios";
import {HSConfig} from "./config";

export class HappyShop {

    private readonly http!: AxiosInstance;
    private errorHandler: HSErrorHandler;

    constructor(private readonly config: HSConfig) {
        let conf = config.getConfig();
        this.http = Axios.create({
            baseURL: conf.endpoint,
            withCredentials: true,
            headers: {
                "X-Api-AccessKey": conf.credentials.accessKey,
                "X-Api-Secret": conf.credentials.secret
            }
        });
        this.errorHandler = (err: AxiosError) => {
            console.error("[HS] Error", err);
        }
    }

    /**
     * Sets the default error handler for all requests.
     * By default, an error handler is already defined with the function of only logging errors.
     * @param errorHandler
     */
    public setErrorHandler(errorHandler: HSErrorHandler): void {
        this.errorHandler = errorHandler;
    }

}

/**
 * A type to shorten the error handler.
 */
export type HSErrorHandler = (err: AxiosError) => void
