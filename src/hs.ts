export type HappyShop = {
    endpoint: string,
    credentials: {
        key: string,
        secret: string
    }
}

let config: any = {};
const path = require('path');
const fs = require("fs");

function validateCredentials() {
    const cpath = path.resolve("hsconfig.json");
    if (!fs.existsSync(cpath)) {
        throw Error("Configuration file (hsconfig.json) not found.")
    }

    const conf = JSON.parse(fs.readFileSync(cpath)).toString("utf8");
    if (!conf.credentials)
        throw Error("Credentials not found in configuration file (hsconfig.json).");

    const cred = conf.credentials;
    if (!cred.key)
        throw Error("Missing \"key\" credential.");

    if (!cred.secret)
        throw Error("Missing \"secret\" credential.");

    if (!conf.endpoint)
        throw Error("Missing \"endpoint\" key.");

    config = conf;
}

validateCredentials();
export default <HappyShop> config;
