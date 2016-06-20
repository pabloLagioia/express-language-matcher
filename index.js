var LanguageMatcher = require('./LanguageMatcher.js');

module.exports = function (acceptLanguage) {
  
  var languageMatcher = new LanguageMatcher(acceptLanguage);

  return function (req, res, next) {

    var bestLanguageMatch = acceptLanguage[0];
    
    var browserLanguage = req.headers['accept-language'];

    if (!browserLanguage) {
      browserLanguage = ['en'];
    }

    var browserLanguageList = browserLanguage.split(',');

    req.language = languageMatcher.matchLanguage(browserLanguageList) || languageMatcher.getDefaultLanguage();

    next();

  }

}