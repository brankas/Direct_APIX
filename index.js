const express = require('express')
const app = express()
const path = require("path");
const router = express.Router();

const swagger = require('swagger-client')
const port = 4200
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

var host_url = process.env.HOST_URL
var bearer_token = process.env.BEARER_TOKEN
var sandbox_api_key = process.env.SANDBOX_API_KEY

if(host_url === "" || host_url === undefined) {
  console.log("HOST_URL environment variable is required")
  process.exit(1)
} else if(host_url.includes("localhost") || host_url.includes("127.0.0.1")) {
  host_url += `:${port}`
}

if(bearer_token === "" || bearer_token === undefined) {
  console.log("BEARER_TOKEN environment variable is required")
  process.exit(1)
} else if (sandbox_api_key === "" || sandbox_api_key === undefined) {
  console.log("SANDBOX_API_KEY environment variable is required")
  process.exit(1)
}


// Landing Page
router.get("/", (req, res) => {
  res.render("index", {});
});

// Checkout
router.get("/checkout", (req, res) => {
  let host = host_url
  let success_page = host + "/success"
  let failed_page = host + "/failed"

  exports.main = function () {
    let checkout_request = {"from":{"type":"BANK","country":"PH"},"destination_account_id":"443760d8-bf53-11eb-9e5f-42010a970007","amount":{"cur":"PHP","num":"10000"},"memo":"Sample Transfer Memo","client":{"display_name":"AmazBay","short_redirect_uri":true,"return_url":success_page,"fail_url":failed_page}}
    let dt = new Date().toISOString();
    let url = "https://api.apixplatform.com/direct/v1/checkout"
    swagger.http({
      url: url,
      method: 'post',
      query: {},
      headers: {
        "X-Authorization": bearer_token,
        "x-api-key": sandbox_api_key
      },
        body: JSON.stringify(checkout_request)
    }).then((response) => {
        if(response.body.redirect_uri != "") {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"datetime": dt, "url": url, "raw_request":  checkout_request, "raw_response": {"body": response.body, "status": response.status, "redir": response.body.short_redirect_uri}}));
        }
    
    }).catch((err) => {
      console.error(err);
    })
  }
  this.main();
});


// Success page
router.get("/success", (req, res) => {
  res.render("success", {});
});

// Failed page 
router.get("/failed", (req, res) => {
  res.render("failed", {});
});

app.use("/", router);
app.listen(port, () => {
  console.log(`App listening at ${host_url}`
  )
})
