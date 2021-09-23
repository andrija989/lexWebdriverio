 /* eslint-env jquery */

const { BrowserRouter } = require("react-router-dom");

class StudentResults {
  // review button
  get toReviewButton() {
    return $(
      'button[data-automation-id="btn-pupil_editor.review-single-PupilView-PrimaryButton"]'
    );
  }

  // comment and hide recording getters
  get editRecording() {
    return $(
      'tr:nth-of-type(1) > td:nth-of-type(1) > .screening-records__edit > a:nth-of-type(1) > svg'
    );
  }

  // publish results
  get publishResultsButton() {
    return $(
      'button[data-automation-id="btn-pupil_editor.complete-PupilView-PrimaryButton"]'
    );
  }

  get hideRecordingCheckbox() {
    return $('form > div:nth-of-type(1)  label');
  }

  get commentInput() {
    return $('input[data-automation-id="recording.edit.comment"]');
  }

  get saveEdit() {
    return $('//button[contains(text(),"Save")]');
  }
  // add comment button

  get addCommentButton() {
    return $(
      'button[data-automation-id="btn-results.addComment-EditSessionCommentButton"]'
    );
  }

  // edit result answers getters
  get editResultButton() {
    return $('button[data-automation-id="btn-set_result-SetResultButton"]');
  }

  get editResultButtonExaminer() {
    return $('button[data-automation-id="btn-set_result-SetResultButton-2"]');
  }

  get selectText1() {
    return $(
      '//body/reach-portal[1]/div[3]/div[1]/div[1]/div[2]/div[1]/span[1]/div[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/label[1]/select[1]'
    );
  }

  get selectText2() {
    return $(
      ':nth-of-type(1)>:nth-of-type(1)>[data-automation-id="dropdown-ReadingResultsSelector"]'
    );
  }

  get saveResultButton() {
    return $('button[data-automation-id="btn-set_result.save-SetResultButton"]');
  }

  // delete getters
  get deleteResultButton() {
    return $(
      'button[id="btn-pupil_editor.remove_screenin_session-DeleteScreeningSessionButton-PrimaryButton"]'
    );
  }

  get removeStudentButton() {
    return $('button[data-automation-id="btn-delete_pupil"]');
  }

  get deleteConfirmButton() {
    return $('button[data-automation-id="remove_pupil_dialog.confirm"]');
  }

  get deleteFromClassButton() {
    return $('button[data-automation-id="remove_pupil_from.class"]');
  }

  get deleteFromSchoolButton() {
    return $('button[data-automation-id="remove_pupil_from.school"]');
  }

  get deleteFromOrganisationButton() {
    return $('button[data-automation-id="remove_pupil_from.org"]');
  }

  get deleteInput() {
    return $('input[id=confirm-remove-pupil-from-class-input]');
  }

  get deleteInputSchool() {
    return $('input[id=confirm-remove-pupil-from-school-input]');
  }

  get deleteInputOrganisation() {
    return $('input[id=confirm-remove-pupil-from-org-input]');
  }

  get deleteButton() {
    return $('button[data-automation-id="remove_pupil_dialog.confirm"]');
  }

  // bring back the page of students class
  get linkToClass() {
    return $('li:nth-of-type(3) > a');
  }

  get editStudentButton() {
    return $('button[data-automation-id="btn-edit_pupil"]');
  }

  // move student to another school and class getters
  get moveStudentLink() {
    return $('button[data-automation-id="btn-move_pupil"]');
  }

  get selectSchoolButton() {
    return $('select[id=move-pupil-to-school]');
  }

  get selectClassButton() {
    return $('select[id=move-pupil-to-class]');
  }

  get moveButton() {
    return $('button[data-automation-id="btn-move_pupil"]');
  }

  get moveButton2() {
    return $('button[data-automation-id="move_pupil.primary"]');
  }

  get closeDialogButton() {
    return $('button[data-automation-id="btn-MovePupilDialog-secondary"]');
  }

  // student is active or not getter
  get studentStatus() {
    return $('._3yseueno8jfka3-gOJon8K');
  }

  // test status getters
  get studentPerformans() {
    return $('._2zunES36YLGU9_cQFCt2I-');
  }

  get testSchool() {
    return $('b[data-automation-id="screening.schoolName"]');
  }

  get testStatus() {
    return $(
      '.screening-results-reading-comprehension > .pupil-questions__header .pupil-questions__pre-title'
    );
  }

  // link to selected student class
  get backToClass() {
    return $('li:nth-of-type(3) > a');
  }

  get newSchoolResults() {
    return $('._3VAY-AY8tTUYwEUGrzCEtK._3tlbghmD7zGkctki7JYms0');
  }

  get selectMoveButton() {
    return $('.css-1hwfws3');
  }

  get unauthorisedButton() {
    return $(
      'div:nth-of-type(2) > ._2OHhR-xfr6me90NasOMCVS._3b3jGcBQaJ97sB9GBmaK6z > ._2WIgFk1W1x0GH26NqmhzWC > div  ._1NyaAjYPXZJNuvqkk8UJ12'
    );
  }

  // language changes getters

  get readingAbility() {
    return $('.screening-results-content__ability_header > .screening-results-content__header_text')
  }

  get readingCo() {
    return $('.screening-results-reading-comprehension > .pupil-questions__header .pupil-questions__pre-title')
  }

  get mean() {
    return $('p:nth-of-type(1) > span:nth-of-type(1)')
  }

  get aloud() {
    return $('p:nth-of-type(2) > span:nth-of-type(1)')
  }

  get silently() {
    return $('p:nth-of-type(3) > span:nth-of-type(1)')
  }

  get rapidNaming() {
    return $('div:nth-of-type(3)  .screening-results-content__header_text')
  }

  get precentile() {
    return $('div:nth-of-type(3)  .screening-results-content__header_text')
  }

  get question1() {
    return $('div:nth-of-type(1) > div:nth-of-type(2) > .QH8x1ebOwwjHr8Vw8XSX9 b')
  }

  get question2() {
    return $('div:nth-of-type(1) > div:nth-of-type(3) > .QH8x1ebOwwjHr8Vw8XSX9 b')
  }

  get question3() {
    return $('div:nth-of-type(1) > div:nth-of-type(4) > .QH8x1ebOwwjHr8Vw8XSX9 b')
  }

  get uniqueID() {
    return $('input[data-automation-id="pupil-edit-ssn"]')
  }

  get uniqueID() {
    return $('input[data-automation-id="pupil-edit-ssn"]')
  }

  // confirm that review button exists in single student page
  toReviewExists() {
    this.toReviewButton.waitForExist(15000);
  }

  // edit record
  clickEditRecord() {
    this.editRecording.click();
  }

  hideRecording() {
    this.hideRecordingCheckbox.click();
  }

  typeComment(comment) {
    this.commentInput.setValue(comment);
  }

  save() {
    this.saveEdit.click();
  }

  // hide and comment recording action
  hideAndCommentRecording(comment) {
    this.clickEditRecord();
    this.hideRecording();
    if (comment) {
      this.commentInput.clearValue();
      this.typeComment(comment);
    }
    this.save();
  }

  // crud of results
  editResult() {
    this.editResultButton.waitForDisplayed(12000);
    this.editResultButton.click({ force: true });
  }

  changeAnswer1(answer) {
    this.selectText1.waitForExist(15000);
    const selectBox = this.selectText1;
    return selectBox.selectByVisibleText(answer);
  }

  // changeAnswer2() {
  //   this.selectText2.waitForExist(15000);
  //   this.selectText2.click();
  //   $('._38Ur6XGyN3rXidJSMXfqnk').click();
  // }

  saveChangeResults() {
    this.saveResultButton.waitForDisplayed(8000);
    this.saveResultButton.click({ force: true });
  }

  changeAnswerResults(answer) {
    this.editResult();
    if (answer) {
      this.changeAnswer1(answer);
    }
    this.saveChangeResults();
  }

  deleteResult() {
    this.deleteResultButton.waitForDisplay(8000);
    this.deleteResultButton.click({ force: true });
    this.deleteResultButton.waitForDisplay(8000);
    this.deleteConfirmButton.click({ force: true });
  }

  // remove single student actions
  removeStudentClick() {
    this.removeStudentButton.click({ force: true });
  }

  deleteFromClassClick() {
    this.deleteFromClassButton.click({ force: true });
  }

  deleteFromSchoolClick() {
    this.deleteFromSchoolButton.click({ force: true });
  }

  deleteFromOrganisationClick() {
    this.deleteFromOrganisationButton.click({ force: true });
  }

  fillDeleteInput() {
    this.deleteInput.setValue('DELETE');
  }

  fillDeleteInputSchool() {
    this.deleteInputSchool.setValue('DELETE');
  }

  fillDeleteInputOrganisation() {
    this.deleteInputOrganisation.setValue('DELETE');
  }

  delete() {
    this.deleteButton.click();
  }

  clickLinkToClass() {
    this.linkToClass.click();
  }

  // move student to other class or school
  moveStudentClick() {
    this.moveStudentLink.click();
  }

  selectSchool(school) {
    const selectBox = this.selectSchoolButton;
    return selectBox.selectByVisibleText(school);
  }

  selectClass(cla) {
    const selectBox = this.selectClassButton;
    return selectBox.selectByVisibleText(cla);
  }

  moveStudent() {
      this.moveButton2.click({ force: true });
  }

  // move student to other school action
  moveStudentForm(school, cla) {
    this.moveStudentLink.waitForEnabled(12000);
    this.moveStudentClick();
    this.selectSchoolButton.waitForDisplayed(8000);
    this.selectSchool(school);
    this.selectClassButton.waitForDisplayed(8000);
    this.selectClass(cla);
    this.moveStudent();
    this.closeDialogButton.waitForDisplayed(8000);
    this.closeDialogButton.click({ force: true });
  }

  backToClassLink() {
    this.backToClass.click();
  }

  selectMoveRecording() {
    this.selectMoveButton.click();
    $('.css-2613qy-menu').click({ force: true });
  }

  // if user doesn`t have permision to see something
  unauthorized() {
    this.unauthorisedButton.waitForDisplayed(12000);
    this.unauthorisedButton.click();
  }

  editStudent() {
    this.editStudentButton.click()
  }
}

module.exports = new StudentResults();
