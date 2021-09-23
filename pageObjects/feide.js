 /* eslint-env jquery */

const { times } = require("lodash")

 class FeidePage {
  get guestButton() {
    return $('form[id="discoform_other"] > ul > li:nth-of-type(1) > button[name="authselection"]  .media-body')
  }

  get userName() {
    return $('input[id="username"]')
  }

  get password() {
    return $('input[id="user_pass"]')
  }

  get loginButton() {
    return $('input[id="wp-submit"]')
  }

  get feideButton() {
    return $('img[alt="Feide"]')
  }

  get acceptFeide() {
    return $('button[name="continue"]')
  }

  guestButtonClick() {
    this.guestButton.waitForDisplayed(8000)
    this.guestButton.click()
  }

  inputUserName(name) {
    this.userName.waitForDisplayed(8000)
    this.userName.setValue(name)
  }

  inputPassword(password){
    this.password.waitForDisplayed(8000)
    this.password.setValue(password)
  }

  loginButtonClick() {
    this.loginButton.click()
  }

  loginFeide(name,password) {
    this.inputUserName(name)
    this.inputPassword(password)
    this.loginButtonClick()
  }

  feideButtonClick() {
    this.feideButton.click()
  }

  clickAcceptFeide() {
    this.acceptFeide.click()
  }
}

module.exports = new FeidePage();
