# node-jsonwhois

A NodeJS Library for the [JsonWhois](http://jsonwhois.com "JsonWhois") API. It gathers social, whois and screenshot data for domains.

## Requirements

NodeJS & Unirest.

## Installing

 ``` sh
 $   npm install jsonwhois
 ```
## Configuring

 ``` js
    var JsonWhois = require('jsonwhois').apiKey('API KEY');
 ```
# Usage

  ``` js
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