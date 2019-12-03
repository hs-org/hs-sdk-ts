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
    const conf = JSON.parse(fs.readFileSync(path.resolve("hsconfig.json")).toString("utf8"));
    if (!conf.credentials)
        throw Error("Credentials not found in configuration file (hsconfig.json).");

    const cred = conf.credentials;
    if (!cred.key)
        throw Error("Missing \"key\" credential.");

    if (!cred.secret)
        throw Error("Missing \"secret\" credential.");

    config = conf;
    if (!config.endpoint)
        config.endpoint = "https://api.happyshop.net";
}

validateCredentials();
export default config;
