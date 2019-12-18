import {HSConfigType} from "./hs-config";
import {HSConfig} from "..";
const path = require('path');
const fs = require("fs");

export class HSFileConfig implements HSConfig {

    private readonly config!: HSConfigType;

    constructor() {
        var fileName = "hsconfig.json";
        const cpath = path.resolve(fileName);
        if (!fs.existsSync(cpath)) {
            throw Error("Configuration file (" + fileName + ") not found.")
        }

        const conf = JSON.parse(fs.readFileSync(cpath)).toString("utf8");
        if (!conf.credentials)
            throw Error("Credentials not found in configuration file (" + fileName + ").");

        const cred = conf.credentials;
        if (!cred.accessKey)
            throw Error("Missing \"accessKey\" credential.");

        if (!cred.secret)
            throw Error("Missing \"secret\" credential.");

        if (!conf.endpoint)
            throw Error("Missing \"endpoint\" key.");

        this.config = conf;
    }

    getConfig(): HSConfigType {
        return this.config;
    }

}
