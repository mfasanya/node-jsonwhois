var unirest = require('unirest');

JsonWhois = {
    apiKey: function (key){
        this.apiKey = key;
        this.base = "http://jsonwhois.com/api/v1";
        return module.exports;
    },
    whois : function(domain, done){
        unirest.get(this.base + 'whois')
            .headers({ 
                'Accept': 'application/json', 
                'Authorization': 'Token token=" ' + this.apiKey + ' "'
            })

            .query({
                "domain": domain
            })

            .end(function (response) {
                return done(response.body);
            });
    },
    screenshot: function(domain, done){
        unirest.get(this.base + 'screenshot')
            .headers({ 
                'Accept': 'application/json',
                'Authorization': 'Token token=" ' + this.apiKey + ' "'
            })

            .query({
                "domain": domain
            })

            .end(function (response) {
                return done(response.body);
            });
    }
}

module.exports = JsonWhois;
