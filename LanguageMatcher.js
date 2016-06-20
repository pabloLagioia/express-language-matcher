function LanguageMatcher(acceptLanguage) {

  if (!acceptLanguage) {
    acceptLanguage = ['en'];
  }

  if (!(acceptLanguage instanceof Array)) {
    throw new Error('Accept Languages must be an array');
  }

  if (acceptLanguage.length == 0) {
    throw new Error('At least one language must be accepted');
  }

  this.acceptLanguage = acceptLanguage;

  this.matchers = this.acceptLanguage.map(function(it) {
    return new RegExp(it, 'i')
  });

}

LanguageMatcher.prototype.getDefaultLanguage = function () {
  return this.acceptLanguage[0];
}

LanguageMatcher.prototype.matchLanguage = function(browserLanguage) {

  for (var i = 0; i < browserLanguage.length; i++) {

    for (var j = 0; j < this.matchers.length; j++) {

      if (this.matchers[j].test(browserLanguage[i])) {
        return this.acceptLanguage[j];
      }

    }

  }

};

module.exports = LanguageMatcher;