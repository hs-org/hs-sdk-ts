class HappyShop {

    endpoint: string = "https://api.happyshop.net";
    config: any = {};
}

const hs = new HappyShop();
const path = require('path');
const fs = require("fs");

function validateCredentials() {
    const config = JSON.parse(fs.readFileSync(path.resolve("config.json")).toString("utf8"));
    if (!config.credentials)
        throw Error("Credentials not found in configuration file.");

    const cred = config.credentials;
    if (!cred.key)
        throw Error("Missing \"key\" credential.");

    if (!cred.secret)
        throw Error("Missing \"secret\" credential.");

    hs.config = config;
}

validateCredentials();
export default HappyShop;
