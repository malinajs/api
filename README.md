# api
API for all Malina's services

## Developing

Be sure you have access to Cloudflare workers and setup all needed KV stores for your development testing. 
Then create `.env` file with these variables in the project's root: 

```sh
CLOUDFLARE_AUTH_EMAIL = hello@me.com
CLOUDFLARE_ACCOUNTID = <account_id>
CLOUDFLARE_AUTH_KEY = <global_api_key>

WORKER_REPL_NAME=repl-dev
KV_REPL_GISTS=<kv_id>
```

Then run `npm run deploy` to push your workers to the Cloudflare to see it in action. You may debug it in playground in the Workers section of the Cloudflare dashboard.

## Release 

To release workers in production, just bump package version with ex. `npm version patch` (or do any other changes in `package.json` file) and commit changes to this repo. Then Github Action will deploy workers on Cloudflare.