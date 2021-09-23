 /* eslint-env jquery */

 class LexploreIntensive {
  get grade2to4Link() {
    return $('div:nth-of-type(1) > .l-fluency-grid > li:nth-of-type(1) > .c-fluency-card') // first element in grade to to grade 4
  }

  clickGrade2to4() {
    this.grade2to4Link.waitForDisplayed(8000)
    this.grade2to4Link.click()
  }
}

module.exports = new LexploreIntensive();
