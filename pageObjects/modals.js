 /* eslint-env jquery */

 class Modals {
 
  get readingAbility() {
    return $('span[data-automation-id="reading_ability"]')
  }

  get schoolData() {
    return $('div[class="resultSummaryBar-infoIcon"]')
  }

  get comparisons() {
    return $('div[data-automation-id="comparison_info"]')
  }

  get yle() {
    return $('span[data-automation-id="gle"] ')
  }

  get readingCo() {
    return $('span[data-automation-id="readingResults"]')
  }

  get standardScore() {
    return $('span[data-automation-id="standard_score"]')
  }

  get readingAge() {
    return $('span[data-automation-id="readingAge"]')
  }

  get meanReadingSpeedCheckbox() {
    return $('span[data-automation-id="readText"]')
  }

  get commentCheckbox() {
    return $('span[data-automation-id="publicComments"]')
  }

  get readingAbilityTable() {
    return $('div[data-type="resultGroup"]')
  }

  get readingCoTable() {
    return $('div[data-type="readingResults"]')
  }

  get readingAgeTable() {
    return $('div[data-type="readingAge"]')
  }

  get meanReadingSpeedTable() {
    return $('span[data-automation-id="readText"]')
  }

  get precentile() {
    return $('div[data-type="resultGroup"]')
  }

  get answerNumber() {
    return $('div[class="pupil-questions__icon"]')
  }

  // student page modals

  get readingSpeedStudentPage() {
    return $('.screening-results-content__params > div:nth-of-type(2) .btn.icon.link-color > .u-color-opto-darkblue ')
  }

  get rapidNaming() {
    return $('.screening-results-content__params > div:nth-of-type(3) .btn.icon.link-color > .u-color-opto-darkblue ')
  }

  get saccadicLength() {
    return $('.screening-results-content__params > div:nth-of-type(4) .btn.icon.link-color > .u-color-opto-darkblue ')
  }

  get regressionFrequency() {
    return $('.screening-results-content__params > div:nth-of-type(5) .btn.icon.link-color > .u-color-opto-darkblue ')
  }

  get fixationTime() {
    return $('.screening-results-content__params > div:nth-of-type(6) .btn.icon.link-color > .u-color-opto-darkblue')
  }

  get yleStudentPage() {
    return $('.screening-results-content__params > div:nth-of-type(9) .btn.icon.link-color > .u-color-opto-darkblue')
  }

  get standardScoreStudentPage() {
    return $('.screening-results-content__params > div:nth-of-type(10) .btn.icon.link-color > .u-color-opto-darkblue')
  }

  get readingAgeStudentPage() {
    return $('.screening-results-content__params > div:nth-of-type(11) .btn.icon.link-color > .u-color-opto-darkblue')
  }

  get decoding() {
    return $('.screening-results-content__params > div:nth-of-type(12) .btn.icon.link-color > .u-color-opto-darkblue')
  }

  get readingAbilityStudentPage() {
    return $('h2 > div > .btn.icon.link-color > .u-color-opto-darkblue > path')
  }

  get questions() {
    return $('.pupil-questions > .pupil-questions__header > .pupil-questions__title > .pupil-questions__icon ')
  }

  get advancedParamters() {
    return $('.pupil-sortable-parameters__container > .pupil-sortable-parameters-button-container > .pupil-sortable-parameters__button')
  }

  clickTableElement(element) {
    $(`${element}`).click({force:true})
  }

  openAdvancedParamters() {
    this.advancedParamters.click({force:true})
  }
}

module.exports = new Modals();
