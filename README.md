# Direct_APIX

### Getting Started
1. Clone this repo
`$ git clone https://github.com/brankas/Direct_APIX.git`

2. Change working directory
`$ cd Direct_APIX`

3. Fetch dependencies
`$ npm install`

4. Set the configs via env vars
```
# for running this app inside apix platform, subdomain differs per user account.
# use 'http://localhost' for local development.
# just change it accordingly.
$ export HOST_URL='https://jerrick-wong-brank-as.solutions.apixplatform.com' 
```

```
# contains the swagger bearer token when tring out the API on https://apixplatform.com/api-console/try/direct/v1
$ export BEARER_TOKEN='Bearer XXX' 
```

```
# contains the sandbox apikey generated on https://dashboard.brank.as/
$ export SANDBOX_API_KEY='XXX' 
```

5. Running the application
`$ npm run start`
