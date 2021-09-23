 /* eslint-env jquery */

 class MyLexploreLogin {
  get azzureB2CButton() {
    return $('a[data-provider="b2c"]')
  }

  get menuButton() {
    return $('ul[id="menu-user-menu"]')
  }

  get svenskaLanguage() {
    return $(`a[lang="sv-SE"]`)
  }

  get norksLanguage() {
    return $(`a[lang="nb-NO"]`)
  }

  get englishLanguage() {
    return $(`a[lang="en-GB"]`)
  }

  get englishUsLanguage() {
    return $('a[lang="en-US"]')
  }

  get logoutButton() {
    return $('//a[contains(text(),"Logout")]')
  }

  get lexploreIntensiveButton() {
    return $('//a[contains(text(),"Lexplore Intensive")]')
  }

  get allPerentInstructionsButton() {
    return $('//a[contains(text(),"All parent instruction")]')
  }

  get hamburgerMenu() {
    return $('.c-hamburger--slider')
  }

  B2CClick() {
    this.azzureB2CButton.waitForDisplayed(8000)
    this.azzureB2CButton.click()
  }

  changeLanguage(language) {
    this.menuButton.waitForDisplayed(8000)
    this.menuButton.click()
    if(language == "svenska") {
      this.svenskaLanguage.waitForDisplayed()
      this.svenskaLanguage.click()
    } else if (language == "norsk") {
      this.norskLanguage.waitForDisplayed()
      this.norskLanguage.click()
    } else if (language == "english") {
      this.englishLanguage.waitForDisplayed(8000)
      this.englishLanguage.click()
    } else if (language == "usa") {
      this.englishUsLanguage.waitForDisplayed(8000)
      this.englishUsLanguage.click()
    }
  }

  clickHamburgerMenu() {
    this.hamburgerMenu.waitForDisplayed(8000)
    this.hamburgerMenu.click()
  }

  lexploreIntensiveOpen() {
    this.lexploreIntensiveButton.waitForDisplayed(8000)
    this.lexploreIntensiveButton.click()
  }

  parentInstructionClick() {
    this.allPerentInstructionsButton.waitForDisplayed() 
    this.allPerentInstructionsButton.click()
  }

  logout() {
    this.menuButton.waitForDisplayed(8000)
    this.menuButton.click()
    this.logoutButton.waitForDisplayed(8000)
    this.logoutButton.click()
  }

}

module.exports = new MyLexploreLogin();
