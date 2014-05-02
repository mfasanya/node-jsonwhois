# node-jsonwhois

A NodeJS Library for the [JsonWhois](http://jsonwhois.com "JsonWhois") API. It gathers social, whois and screenshot data for domains.

## Requirements

NodeJS & Unirest.

## Installing

 ```
    npm install jsonwhois
 ```
## Configuring

 ``` node
    var JsonWhois = require('../index.js').apiKey('API KEY');
 ```
# Usage

  ``` node
    JsonWhois.whois("google.com", function(res){
        console.log(res);
    });

    JsonWhois.screenshot("google.com", function(res){
        console.log(res);
    });

  ```

And thats it!

## License

MIT