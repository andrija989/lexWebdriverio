 /* eslint-env jquery */

 class QualityPage {
   get qualityButton() {
     return $('ul > li > a[data-automation-id="link-quality-review-Drawer-Link"]')
   }

   get firstStudentSelect() {
     return $('div[class="ReactVirtualized__Grid__innerScrollContainer"] > :nth-child(1) > :nth-child(1) > div[class="checkbox"]')
   }

   get secondStudentSelect() {
     return $('div[class="ReactVirtualized__Grid__innerScrollContainer"] > :nth-child(2) > :nth-child(1) > div[class="checkbox"]')
   }

   get publishButton() {
     return $('button[data-automation-id="btn-quality_review.comlete-ActionButtons"]')
   }

   get exitQualityPageButton() {
     return $('div[class=lightbox__close]')
   }

   get anonymizeCheckbox() {
     return $('label[for="quality_review.filters.anonymize"]')
   }

   get selectMarket() {
     return $('select[data-automation-id="quality_review.cultures"]')
   }

  get selectOrganisation() {
    return $('select[data-automation-id="quality_review.organizations"]')
  }

  get selectSchoolsQuality() {
    return $('div :nth-of-type(4) >.css-2b097c-container')
  }

  get selectClassesQuality() {
    return $('div :nth-of-type(5) >.css-2b097c-container')
  }

  get selectGradesQuality() {
    return $('div :nth-of-type(6) >.css-2b097c-container')
  }

  get selectStatusQuality() {
    return $('div :nth-of-type(7) >.css-2b097c-container')
  }

  get confirmButtonModal() {
    return $('button[data-automation-id="button-confirm-dialog-primary"]')
  }

   qualityPageLink() {
     this.qualityButton.click({force:true})
   }

   selectFirstStudent() {
     this.firstStudentSelect.click()
   }

   selectSecondStudent() {
     this.secondStudentSelect.click()
   }

   exitQualityPage() {
     this.exitQualityPageButton.click()
   }

   clickAnonymize() {
     this.anonymizeCheckbox.click()
   }

   selectMarketAction(market) {
     let selectBox = this.selectMarket
     return selectBox.selectByVisibleText(market);
   }

   selectOrganisationAction(organisation) {
     let selectBox2 = this.selectOrganisation
     return selectBox2.selectByVisibleText(organisation)
   }

   openSchoolsSelect() {
     return this.selectSchoolsQuality.click({ force:true })
   }

   openClassesSelect() {
    return this.selectClassesQuality.click()
  }

  openGradesSelect() {
    return this.selectGradesQuality.click()
  }

  openStatusSelect() {
    return this.selectStatusQuality.click()
  }

   reactSelectOption(type, number) {
     if(type === 'school') {
      return $(`.css-26l3qy-menu > .css-11unzgr > div[id="react-select-2-option-${number}"]`).click()
     } else if (type === 'class') {
      return $(`.css-26l3qy-menu > .css-11unzgr > div[id="react-select-3-option-${number}"]`).click()
     } else if (type === 'grade') {
      return $(`.css-26l3qy-menu > .css-11unzgr > div[id="react-select-4-option-${number}"]`).click()
     } else if (type === 'status') {
      return $(`.css-26l3qy-menu > .css-11unzgr > div[id="react-select-5-option-${number}"]`).click()
     }   
  }

  publish() {
    this.publishButton.click()
  }

  confirmClick() {
    this.confirmButtonModal.click()
  }
 }
module.exports = new QualityPage();
