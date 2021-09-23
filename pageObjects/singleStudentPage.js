 /* eslint-env jquery */

class SingleStudentPage {
  // recording move getters
  get moveRecordButton() {
    return $(
      'a[data-automation-id="a-organization-classes-pupil-recording-ScreeningRecords"]'
    );
  }

  get selectMoveSection() {
    return $('.css-1hwfws3');
  }

  get pickNewSectionButton() {
    return $('.css-1n7v3ny-option');
  }

  get confirmRecordMove() {
    return $('//button[contains(text(),"Save")]');
  }

  get moveBackRecordingButton() {
    return $(
      'li:nth-of-type(1) > .pupil-view-screening__slide > .pupil-view-screening__recordings > .screening-records > .sortable-table > .sortable-table__table .screening-records__edit > a:nth-of-type(2) > svg '
    );
  }

  // delete test result getters
  get deleteTestResultButton() {
    return $(
      '.pupil-view-screenings .pupil-view-screening__many:nth-of-type(1) .pupil-view-screening__edit .primary:nth-of-type(2)'
    );
  }

  get deleteTestResultButton2() {
    return $(
      '.pupil-view-screenings .pupil-view-screening__many:nth-of-type(2) .pupil-view-screening__edit .primary:nth-of-type(2)'
    );
  }

  get modalDeleteButton() {
    return $('//button[contains(text(),"Confirm")]');
  }

  // move result to other student getters
  get moveResultToOtherStudentButton() {
    return $(
      'button[data-automation-id="btn-movescreening-MoveScreeningSessionButton"]'
    );
  }

  get modalClassPickButton() {
    return $(
      'select[data-automation-id="class"]'
    );
  }

  get pick1StudentButton() {
    return $('select[data-automation-id="subjectId"]');
  }

  get confirmResultDoesntExists() {
    return $(
      '.pupil-view-screenings .pupil-view-screening__many:nth-of-type(1) .pupil-view-screening__slide .pupil-view-screening__recordings > div > div> table'
    );
  }

  get confirmThereIsOnlyOneResult() {
    return $(
      '.pupil-view-screenings .pupil-view-screening__many:nth-of-type(2) .pupil-view-screening__slide .pupil-view-screening__recordings > div > div> table'
    );
  }

  get studentResultsOnReview() {
    return $(
      'div:nth-of-type(3) > ._1jz37RfDTn9M9dsze07YFq._2WT5EigC26RHuJD03QwpUG > ._11kWI_aJHNPrdjdbUpMZPZ > div  ._15SsqFcatzjCHX7PsA6qYx'
    );
  }

  get graphResults() {
    return $(
      '.charts'
    );
  }

  get tableResults() {
    return $('.sortable-table');
  }

  get stickyWordsTable() {
    return $('.c-table--sortable')
  }

  get stickyWordsNumber() {
    return $$('c-table__tr')
  }

  get openStickyWordsModal() {
    return $('.btn.link.u-mt-2')
  }

  get closeModalButton() {
    return $('.close-button')
  }

  get myLexploreButton() {
    return $('a[data-automation-id="education-link"]')
  }

  get splitSessionButton() {
    return $('tr[data-automation-id="row1"] > td > div > a[data-automation-id="a-organization-classes-pupil-recording-ScreeningRecords"]')
  }

  get confirmQAButton() {
    return $('._1MqmcWYKpAJprWafbheCO4 > .btn.primary')
  }

  get reviewButton() {
    return $('button[data-automation-id="btn-pupil_editor.unpublish-single-PupilView-PrimaryButton"]')
  }

  get sessionSecondRecording() {
    return $$('tr[data-automation-id="row0"] > td > div > a[data-automation-id="a-organization-classes-pupil-recording-ScreeningRecords"]')
  }

  get closeError() {
    return $('button[class="lexplore-ds icon "]')
  }

  get session1Questions() {
    return $('li[class="pupil-view-screening pupil-view-screening__many"]:nth-child(1) >div[class="pupil-view-screening__questions"] > div[class="pupil-questions"]')
  }

  get session2Questions() {
    return $('li[class="pupil-view-screening pupil-view-screening__many"]:nth-child(2) >div[class="pupil-view-screening__questions"] > div[class="pupil-questions"]')
  }

  get reviewMessage() {
    return $('h3')
  }

  get qaMessage() {
    return $('.pupil-view-screening ul > li')
  }

  get reviewInstruction() {
    return $('._3tSaRf9TmZqCIV2EQZUXmj p')
  } 

  get recomendationText() {
    return $('._1FluQOONkuJk6ZeFHEw1lD > p:nth-of-type(1)')
  }
  
  moveRecordClick() {
    return this.moveRecordButton.click();
  }

  clickOnSelectSection() {
    return this.selectMoveSection.click();
  }

  selectNewSection() {
    return this.pickNewSectionButton.click();
  }

  saveRecordMove() {
    return this.confirmRecordMove.click();
  }

  // record move complete action
  fillRecordMoveForm() {
    this.moveRecordClick();
    this.saveRecordMove();
  }

  moveBackRecording() {
    this.moveBackRecordingButton.waitForDisplayed(8000);
    return this.moveBackRecordingButton.click();
  }

  // return record to owner complete action
  moveRecordBack() {
    this.moveBackRecording();
    this.saveRecordMove();
  }

  // delete result action
  deleteTestResultLink() {
    return this.deleteTestResultButton.click();
  }

  deleteSecondSession() {
    return this.deleteTestResultButton2.click()
  }

  confirmDeleteResult() {
    $('input[data-automation-id="confirm-delete-result-from-class-input"]').setValue('DELETE')
    this.modalDeleteButton.click();
  }

  // move result to other student
  moveResultClick() {
    return this.moveResultToOtherStudentButton.click();
  }

  modalClassPick() {
    const classPick = this.modalClassPickButton;
    return classPick.selectByVisibleText('Class with results');
  }

  pickAStudent(student) {
    const studentPick = this.pick1StudentButton;
    return studentPick.selectByVisibleText(student);
  }

  // move result complete action
  moveResultToOtherStudent() {
    this.moveResultClick();
    this.pick1StudentButton.waitForDisplayed(8000);
    this.pickAStudent();
  }

  selectReviewStudent() {
    this.studentResultsOnReview.click();
  }

  stickyWordsModalOpen() {
    this.openStickyWordsModal.click()
  }

  closeStickyModal() {
    this.closeModalButton.click()
  }

  myLexploreLink() {
    this.myLexploreButton.waitForDisplayed(8000)
    this.myLexploreButton.click()
  }

  splitSession() {
    this.splitSessionButton.waitForDisplayed(8000)
    this.splitSessionButton.click()
  }

  confirmQAMessage() {
    this.confirmQAButton.click()
  }

  clickReviewButton() {
    this.reviewButton.click()
  }

  clickCloseError() {
    this.closeError.click()
  }
}

module.exports = new SingleStudentPage();
