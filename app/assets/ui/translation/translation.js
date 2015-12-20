var translationJson = {
  /* Company - General */
  'company.general.candidate': require('./company/general/candidate'),
  /* Company - Components */
  'company.components.navbar': require('./company/components/navbar'),
  /* Company - Routes */
  'company.routes.candidates': require('./company/routes/candidates')
}

class Translation {
  constructor(path) {
    this.path = path
    if(!translationJson[this.path]) {
      console.log(`Translation for path [${path}] not found.`);
    }
  }
  getLanguage() {
    return 'th'
  }
  get(string) {
    // Temporary hold selected language from window.lang
    if(!translationJson[this.path][string]) {
      console.log(`Translation for [${string}] not found.`);
    }
    return translationJson[this.path][string][this.getLanguage()]
  }
}

module.exports = Translation
