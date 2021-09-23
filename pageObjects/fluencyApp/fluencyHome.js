 /* eslint-env jquery */

 class FluencyHome {
  get arrowRight() {
    return $('footer > a[class="icon-arrow-right"]')
  }

  get firstSlide() {
    return $('nav[data-slideshow-bullets] > a:nth-child(1)')
  }

  get secondSlide() {
    return $('nav[data-slideshow-bullets] > a:nth-child(2)')
  }

  get thirdSlide() {
    return $('nav[data-slideshow-bullets] > a:nth-child(3)')
  }

  get fourthSlide() {
    return $('nav[data-slideshow-bullets] > a:nth-child(4)')
  }

  get menuButton() {
    return $('a[class="icon-star icon--after"]')
  }

  get navigation() {
    return $('nav[id="single-course-nav"]')
  }

  // reading letters in menu

  get group1() {
    return $('li:nth-of-type(1) > .dropdown-toggle')
  }

  get firstElementinGroup1() {
    return $('li:nth-of-type(1) > ul > li:nth-of-type(2) > a')
  }

  get group3() {
    return $('li:nth-of-type(3) > .dropdown-toggle')
  }

  get firstElementinGroup3() {
    return $('li:nth-of-type(3) > ul > li:nth-of-type(1) > a')
  }

  get group5() {
    return $('li:nth-of-type(5) > .dropdown-toggle')
  }

  get firstElementinGroup5() {
    return $('li:nth-of-type(5) > ul > li:nth-of-type(1) > a')
  }

  clickNext() {
    this.arrowRight.click({force:true})
  }

  openMenu() {
    this.menuButton.click()
  }

  openGroup(group) {
    this['group'+group].waitForDisplayed(8000);
    this['group'+group].click()
  }

  openFirstText(row) {
    this['firstElementinGroup'+row].waitForDisplayed(8000)
    this['firstElementinGroup'+row].click({force:true})
  }

  
}

module.exports = new FluencyHome();
