 /* eslint-env jquery */

 class MyLexploreHome {
  get lowScoreButton() {
    return $('.c-btn--color-danger')
  }

  get belowAverageScoreButton() {
    return $('.c-btn--color-warning')
  }

  get averageScoreButton() {
    return $('.c-btn--color-secondary')
  }

  get aboveAverageScoreButton() {
    return $('.c-btn--color-secondary-light')
  }

  get highScoreButton() {
    return $('.c-btn.c-btn--color-primary.c-btn--has-icon.c-btn--size-lg.c-btn--variant-contained.l-info-grid__aside-item')
  }

  get resultsPortalButton() {
    return $('div:nth-of-type(1) > .c-card__button > .c-btn.c-btn--color-primary.c-btn--variant-contained')
  }

  get leftNavLevel() {
    return $('.c-toc__list.js-toc-list > li:nth-of-type(1) > a')
  }

  get learnDash() {
    return $('div[class="ld-course-list-items row"]')
  }

  get courses() {
    return $('a[href="https://mydev.lexplore.com/courses/"]')
  }

  toResultsPortal() {
    this.resultsPortalButton.waitForDisplayed(8000)
    this.resultsPortalButton.click()
  }

  lowScoreClick() {
    this.lowScoreButton.waitForDisplayed(8000)
    this.lowScoreButton.click()
  }

  belowAverageClick() {
    this.belowAverageScoreButton.waitForDisplayed(8000)
    this.belowAverageScoreButton.click()
  }

  averageClick() {
    this.averageScoreButton.waitForDisplayed(8000)
    this.averageScoreButton.click()
  }

  aboveAverageClick() {
    this.aboveAverageScoreButton.waitForDisplayed(8000)
    this.aboveAverageScoreButton.click()
  }

  highScoreClick() {
    this.highScoreButton.waitForDisplayed(8000)
    this.highScoreButton.click()
  }

  goToCourses() {
    this.courses.click()
  }
}

module.exports = new MyLexploreHome();
