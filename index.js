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
router.post("/checkout", (req, res) => {
  let host = host_url
  let success_page = host + "/success"
  let failed_page = host + "/failed"

  exports.main = function () {
  
    swagger.http({
      url: "https://api.apixplatform.com/direct/v1/checkout",
      method: 'post',
      query: {},
      headers: {
        "X-Authorization": bearer_token,
        "x-api-key": sandbox_api_key
      },
        body: JSON.stringify({"from":{"type":"BANK","country":"PH"},"destination_account_id":"443760d8-bf53-11eb-9e5f-42010a970007","amount":{"cur":"PHP","num":"10000"},"memo":"Sample Transfer Memo","client":{"display_name":"AmazBay","return_url":success_page,"fail_url":failed_page}})
    }).then((response) => {
        if(response.body.redirect_uri != "") {
            res.redirect(response.body.redirect_uri)
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
