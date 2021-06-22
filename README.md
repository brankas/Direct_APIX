# Direct_APIX

### Getting Started
1. Clone this repo
`$ git clone https://github.com/grikwong/Direct_APIX.git`

1. Change working directory
`$ cd Direct_APIX`

1. Fetch dependencies
`$ npm install`

1. Set the configs via env vars
```
$ export HOST_URL='https://jerrick-wong-brank-as.solutions.apixplatform.com' # for running this app inside apix platform, subdomain differs per user account, just change it accordingly. Use 'http://localhost' for local development
$ export BEARER_TOKEN='Bearer XXX' # contains the swagger bearer token when tring out the API on https://apixplatform.com/api-console/try/direct/v1
$ export SANDBOX_API_KEY='XXX' # contains the sandbox apikey generated on https://dashboard.brank.as/
```

1. Running the application
`$ npm run start`
