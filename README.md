# hs-sdk-ts
The official HappyShop SDK for JavaScript, available for browsers and mobile devices, or Node.js backends

## Installing
To install the this package using NPM, simply type the following into a terminal window:
```
npm install hs-sdk-ts
```

## Usage & Configuration
The HappyShop SDK bundles TypeScript definition files for use in TypeScript projects and to support tools that can read `.d.ts` files.
To use the TypeScript definition files within a Node.js project, simply import as you normally would.
```typescript
import HappyShop from '@hs-org/hs-sdk-ts'
```

To communicate with the server, some credentials must be set correctly.\
You need a `hsconfig.json` file with the following settings:
```json
{
  "endpoint": "https://api.happyshop.net",
  "credentials": {
    "key": "<your-api-key>",
    "secret": "<your-api-secret>"
  }
}
```

Your credentials are not validated at startup, only when a request is made to the server.
Your `key` and` secret` can be found through your developer settings on the HappyShop website.

## Getting Help
Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.
   
* Ask a question on StackOverflow and tag it with `hs-sdk-ts`.
* Join our [Discord Server](https://discord.gg/3R6sDTH) and ask anything.
* Open a support ticket with HappyShop Developer Support.
* If it turns out that you may have found a bug, please [open an issue](https://github.com/HappyMC/hs-sdk-ts/issues).

## Issues
If you encounter a bug with the HappyShop SDK for we would like to hear about it.
Search the existing issues and try to make sure your problem doesn't already exist before opening a new issue. 
It’s helpful if you include the version of the SDK, Node.js or browser environment and OS you’re using. 
Please include a stack trace and reduced repro case when appropriate, too.
The GitHub issues are intended for bug reports and feature requests.

## License
This SDK is distributed under the Apache License 2.0. See LICENSE.txt for more information.
