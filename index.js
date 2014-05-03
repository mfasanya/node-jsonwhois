var unirest = require('unirest');

JsonWhois = {
    apiKey: function (key){
        this.apiKey = key;
        this.base = "http://jsonwhois.com/api/";
        return module.exports;
    },
    whois : function(domain, done){
        unirest.get(this.base + 'whois')
            .headers({ 'Accept': 'application/json' })

            .query({
                "apiKey": this.apiKey,
                "domain": domain
            })

            .end(function (response) {
                return done(response.body);
            });
    },
    screenshot: function(domain, done){
        unirest.get(this.base + 'screenshot')
            .headers({ 'Accept': 'application/json' })

            .query({
                "apiKey": this.apiKey,
                "domain": domain
            })

            .end(function (response) {
                return done(response.body);
            });
    }
}

module.exports = JsonWhois;