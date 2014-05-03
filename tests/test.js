var JsonWhois = require('../index.js').apiKey('API KEY');

JsonWhois.whois("google.com", function(res){
    console.log(res);
});

JsonWhois.screenshot("google.com", function(res){
    console.log(res);
});
