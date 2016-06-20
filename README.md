# express-language-matcher

##How to use
```
var express = require('express');
var app = express();
var language = require('express-language-matcher');

app.use(language(['en', 'fr']));

app.use(function(req, res) {

  //req.headers['accept-language'] = 'fr-CA,fr;q=0.8,es;q=0.6,en;q=0.4'

  console.log(req.language); // req.language == fr

});
```