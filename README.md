# Direct_APIX

### Getting Started

1. Clone this repo

```
$ git clone https://github.com/brankas/Direct_APIX.git
```

2. Change working directory

```
$ cd Direct_APIX
```   

3. Fetch dependencies

```
$ npm install
```

4. Generate and use Bearer Token
    1. If you don't have an APIX Platform account yet, Register
       at: [link](https://apixplatform.com/login?loginRedirect=register)
    2. Login afterwards at: [link](https://apixplatform.com/login)
    3. Fetch the Bearer Token at: [link](https://apixplatform.com/api-console/try/direct/v1)
    4. Inject the Bearer Token via an environment variable:
    ```
    $ export BEARER_TOKEN='Bearer XXX' 
    ```

5. Generate and use Brankas Sandbox API Key
    1. If you don't have a Brankas user account yet, Register at: [link](https://brank.as/sign-up)
    2. Login afterwards at: [link](https://dashboard.brank.as/sign-in)
    3. Enter the password again to generate a Sandbox API Key at: [link](https://dashboard.brank.as/integration)
    4. Inject the API Key via an environment variable:
    ```
    $ export SANDBOX_API_KEY='XXX' 
    ```

6. Set the host url for the app
    - For running this app inside the APIX Platform, subdomain differs per user account. You will see your subdomain
      value when you first starts your APIX IDE. Format is usually `https://<EMAIL_ADDRESS>.solutions.apixplatform.com`.
      Inject it via an environment variable.
      ```
      # Email: jerrick.wong@brank.as; this is an example, change the values accordingly
      $ export HOST_URL='https://jerrick-wong-brank-as.solutions.apixplatform.com' 
      ``` 
    - For running this app locally
       ```
       $ export HOST_URL='http://localhost' 
       ``` 

5. Running the application
   ```
   $ npm run start    
   ```
