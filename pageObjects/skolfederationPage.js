 /* eslint-env jquery */

const { BrowserRouter } = require("react-router-dom")

 class Skolfederation {
  get skolfederationButton() {
    return $('img[id="login_button_text_schoolfederation"]')
  }

  get skolFederationTrialIDP() {
    return $('//div[@id="all_idps"]//span[@class="button"][contains(text(),"Login using Skolfederation Trial IdP")]')
  }

  get pickSletter() {
    return $('div[id="idp_filter"] > ul > li:nth-of-type(11) > a')
  }

  get displayNameInput() {
    return $('input[name="displayName"]')
  }

  get checkboxDisplayedName() {
    return $('input[name="YESdisplayName"]')
  }

  get eduPersonPrincipalName() {
    return $('input[name="eduPersonPrincipalName"]')
  }

  get checkboxPrincipalName() {
    return $('input[name="YESeduPersonPrincipalName"]')
  }

  get givenName() {
    return $('input[name="givenName"]')
  }

  get checkboxGivenName() {
    return $('input[name="YESgivenName"]')
  }

  get emailInput() {
    return $('input[name="mail"]')
  }

  get checkboxEmail() {
    return $('input[name="YESmail"]')
  }

  get snInput() {
    return $('input[name="sn"]')
  }

  get checkboxSn() {
    return $('input[name="YESsn"]')
  }

  get submitButton() {
    return $('input[id="yesbutton"]')
  }

  get skolfederationInviteButton() {
    return $('img[alt="Skolfederationen"]')
  }

  loginWithSkolfederation() {
    this.skolfederationButton.click()
  }

  selectSletter() {
    this.pickSletter.waitForDisplayed(8000)
    this.pickSletter.click()
  }

  findSkolFederationTrialIDP() {
    this.selectSletter()
    this.skolFederationTrialIDP.waitForDisplayed(8000);
    this.skolFederationTrialIDP.click()
  }

  insertDisplayName(name) {
    this.displayNameInput.waitForDisplayed(8000)
    this.checkboxDisplayedName.click()
    this.displayNameInput.setValue(name)
  }

  insertPrincipalName(name) {
    this.checkboxPrincipalName.click()
    this.eduPersonPrincipalName.setValue(name)
  }

  insertGivenName(name) {
    this.checkboxGivenName.click()
    this.givenName.setValue(name)
  }

  insertEmail(email) {
    this.checkboxEmail.click()
    this.emailInput.setValue(email)
  }

  insertSn(sn) {
    this.checkboxSn.click()
    this.snInput.setValue(sn)
  }

  submitForm() {
    this.submitButton.scrollIntoView()
    this.submitButton.click()
  }

  clickSkolFederation() {
    this.skolfederationInviteButton.click()
  }
}

module.exports = new Skolfederation();
