 /* eslint-env jquery */

class LoginPage {
  get loginWithEmailAndPassword() {
    return $('a[id=login_button_b2c]');
  }

  get logintWith365() {
    return $('a[id="login_button_aad"]');
  }

  get inputEmail() {
    return $('input[type="email"]');
  }

  get inputPassword() {
    return $('input[id=password]');
  }

  get inputNewPassword() {
    return $('input[id=newPassword]');
  }

  get inputRePassword() {
    return $('input[id=reenterPassword]');
  }

  get submitButton() {
    return $('button[type="submit"]');
  }

  get signInButton() {
    return $('button[id="next"]')
  }

  get b2cButton() {
    return $('a[data-provider="b2c"]');
  }

  get greetingMassage() {
    return $('[id=greeting]');
  }

  get invitePassword() {
    return $('form > div > div:nth-of-type(1)  input');
  }

  get invitePasswordConfirmation() {
    return $('form > div > div:nth-of-type(2)  input');
  }

  get agreeTerms() {
    return $('div[id=invitation-welcome-terms-Terms] label');
  }

  get savePassword() {
    return $('button[type=submit]');
  }

  get selectRegion() {
    return $('select[id="region-select"]');
  }

  get inputEmail365() {
    return $('input[type="email"]');
  }

  get next365() {
    return $('input[type="submit"]');
  }

  get passwordInput365() {
    return $('input[name="passwd"]');
  }

  get IDPloginWiht365() {
    return $('button[data-automation-id="btn-invitation-welcome-button-Office365"]')
  }

  get loginWithFeideButton() {
    return $('a[id="login_button_feide_oidc"]')
  } 

  get labelFeide() {
    return $('label')
  }

  get displayNameOffice() {
    return $('div[id="displayName"]')
  }

  get europeButton() {
    return $('a[data-provider="northeurope"]')
  }

  clickLabel() {
    this.labelFeide.click()
  }

  loginWithEmail() {
    this.loginWithEmailAndPassword.waitForDisplayed(12000);
    this.loginWithEmailAndPassword.click({ force: true });
  }

  logintWithOffice365() {
    this.logintWith365.waitForDisplayed(8000)
    this.logintWith365.click();
  }

  loginWithFeide() {
    this.loginWithFeideButton.waitForDisplayed(8000)
    this.loginWithFeideButton.click()
  }

  clickSubmitButton() {
    return this.submitButton.click({ force: true });
  }

  setEmail(email) {
    this.inputEmail.waitForDisplayed(12000);
    return this.inputEmail.setValue(email);
  }

  setPassword(password) {
    this.inputPassword.waitForDisplayed(12000);
    return this.inputPassword.setValue(password);
  }

  
  setNewPassword(password) {
    this.inputNewPassword.waitForDisplayed(12000);
    return this.inputNewPassword.setValue(password);
  }

  
  setRePassword(password) {
    this.inputRePassword.waitForDisplayed(12000);
    return this.inputRePassword.setValue(password);
  }

  signIn(){
    this.signInButton.waitForDisplayed(12000)
    return this.signInButton.click()
  }

  setInvitePassword(password) {
    return this.invitePassword.setValue(password);
  }

  setInvitePasswordConfirm(passwordConfirmation) {
    return this.invitePasswordConfirmation.setValue(passwordConfirmation);
  }

  checkAgreeWithTerms() {
    return this.agreeTerms.click({force:true});
  }

  submitPassword() {
    return this.savePassword.click();
  }

  selectRegionAction(region) {
    const selectBox = this.selectRegion;
    return selectBox.selectByVisibleText(region);
  }

  set365Email() {
    this.inputEmail365.setValue('test@lexplore.com');
  }

  clickSubmit365() {
    return this.next365.click();
  }

  setPassword365() {
    return this.passwordInput365.setValue('Ruz38359');
  }

  pick365() {
    this.IDPloginWiht365.click() 
  }

  selectEurope() {
    this.europeButton.click()
  }
}

module.exports = new LoginPage();
