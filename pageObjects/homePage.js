 /* eslint-env jquery */

const { BrowserRouter } = require("react-router-dom");

class HomePage {
  get importStudentsButton() {
    return $(
      'button[data-automation-id="btn-import.students"'
    );
  }

  get publishTestSessionsButton() {
    return $(
      'button[data-automation-id="btn-changeScreeningsStatusName-ClassView"]'
    );
  }

  // class create getters

  get addClassButton() {
    return $('button[id=btn-add_class-GridTable-PrimaryButton] > span');
  }

  get inputClassName() {
    return $('input[data-automation-id="class_name"]');
  }

  get saveButton() {
    return $('button[data-automation-id="save_class"]');
  }

  // student create getters

  get addStudentButton() {
    return $('button[id=a-create-pupil-primary-button] > span');
  }

  get firstNameStudent() {
    return $('input[id=pupil-edit-first-name]');
  }

  get lastNameStudent() {
    return $('input[id=pupil-edit-last-name]');
  }

  get birthdayStudent() {
    return $('input[id=pupil-edit-birthdate]');
  }

  get birthdayYear() {
    return $('select[name="year"]')
  }

  get birthdayMonth() {
    return $('select[name="month"]')
  }

  get bithdayDay() {
    return $('select[name="day"]')
  }

  get uniqueIdStudent() {
    return $('input[id=pupil-edit-ssn]');
  }

  get gradeStudent() {
    return $('select[id=pupil-edit-grade]');
  }

  get genderStudent() {
    return $('select[id=pupil-edit-gender]');
  }

  // prepare for testing getters

  get prepareReTestButton() {
    return $('button[data-automation-id="prepare_screening"]');
  }

  get planedCheckBox1() {
    return $(
      "div[role='rowgroup'] > div:nth-of-type(1) > div:nth-of-type(1)  label"
    );
  }

  get planedCheckBox2() {
    return $(
      "div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(1)  label"
    );
  }

  get selectAll() {
    return $('label[for="prepare_screening.actions"]')
  }

  get confirmSelectionButton() {
    return $(
      'button[data-automation-id="btn-prepare_screening.next"]'
    );
  }

  get saveTestingButton() {
    return $('button[data-automation-id="btn-prepare_screening.save"]');
  }

  get closeButton() {
    return $('button[data-automation-id="btn-prepare_screening.close"]');
  }

  // remove class getters

  get removeClassButton() {
    return $('button[data-automation-id="btn-delete-class"]');
  }

  get confirmRemoveClassButton() {
    return $('button[data-automation-id="button-confirm-dialog-primary"]');
  }

  get addSchoolButton() {
    return $(
      'button[data-automation-id="btn-add_school-GridTable-PrimaryButton"]'
    );
  }

  get schoolNameInput() {
    return $('input[data-automation-id="school_name"]')
  }

  get editClassButton() {
    return $('button[data-automation-id="button-class-edit-primary-button"]')
  }

  // checkboxes student page 

  get checkboxName() {
    return $('label[for="pupil-sortable-displayName"]')
  }

  get checkboxBirthday() {
    return $('label[for="pupil-sortable-birthDate"]')
  }

  get checkboxGrade() {
    return $('label[for="pupil-sortable-grade"]')
  }

  get checkboxTestDate() {
    return $('label[for="pupil-sortable-latestScreeningDate"]')
  }

  get checkboxReadingCo() {
    return $('label[for="pupil-sortable-readingResults"]')
  }

  get checkboxPreviousResult() {
    return $('label[for="pupil-sortable-previousResult"]')
  }

  // header data

  get latestTest() {
    return $('div:nth-of-type(1) > .resultSummaryBar-prop-name')
  }

  get numberOfStudents() {
    return $('div:nth-of-type(2) > .resultSummaryBar-prop-name')
  }

  get numberOfParticipants() {
    return $('div:nth-of-type(3) > .resultSummaryBar-prop-name')
  }

  get participation() {
    return $('div:nth-of-type(4) > .resultSummaryBar-prop-name')
  }

  get closeModalwithNewOrg() {
    return $('button[data-automation-id="btn-intro_dialog.close-NewOrganization"]')
  }

  // excel export

  get excelExportButton() {
    return $('a[data-automation-id="btn_excel_export"]')
  }

  get downloadExcelButton() {
    return $('a[data-automation-id="download_excel"]')
  }

  get enableTrainingSchoolCheckbox() {
    return $('div[class="u-mb-1"] >div[class="checkbox"]')
  }

  get saveSchool() {
    return $('//button[contains(text(),"Save")]')
  }

  get notificationTraining() {
    return $('div[class="notification warning"]')
  }

  get saveStudentButton() {
    return $('button[type="submit"]')
  }

  uploadStudents() {
    return this.importStudentsButton.click();
  }

  // school create

  addSchool(name) {
    this.addSchoolButton.click();
    this.schoolNameInput.waitForDisplayed(8000)
    this.schoolNameInput.setValue(name)
    this.enableTrainingSchoolCheckbox.waitForDisplayed(8000)
    this.enableTrainingSchoolCheckbox.click()
    this.saveSchool.waitForEnabled(8000)
    this.saveSchool.click()
  }

  // class create setters
  clickAddClass() {
    return this.addClassButton.click({ force: true });
  }

  setClassName(name) {
    return this.inputClassName.setValue(name);
  }

  save() {
    return this.saveButton.click({ force: true });
  }

  saveStudent() {
    return this.saveStudentButton.click()
  }

  fillClassForm(className) {
    this.addClassButton.waitForDisplayed(8000);
    this.clickAddClass();
    this.inputClassName.waitForDisplayed(8000);
    if (className) {
      this.setClassName(className);
    }
    this.save();
  }

  // student create setters
  clickAddStudent() {
    return this.addStudentButton.click();
  }

  setStudentFirstName(firstName) {
    return this.firstNameStudent.setValue(firstName);
  }

  setStudentLastName(lastName) {
    return this.lastNameStudent.setValue(lastName);
  }

  setStudentBirthday(birthday) {
    return this.birthdayStudent.setValue(birthday);
  }

  setBirthdayYear(year) {
    this.birthdayYear.waitForDisplayed(15000);
    const selectBox = this.birthdayYear;
    return selectBox.selectByVisibleText(year);
  }

  setBirthdayMonth(month) {
    this.birthdayMonth.waitForDisplayed(15000);
    const selectBox = this.birthdayMonth;
    return selectBox.selectByVisibleText(month);
  }

  setBirthdayDay(day) {
    this.bithdayDay.waitForDisplayed(15000);
    const selectBox = this.bithdayDay;
    return selectBox.selectByVisibleText(day);
  }

  setStudentUniqueId(id) {
    return this.uniqueIdStudent.setValue(id);
  }

  selectGrade(grade) {
    const selectBox = this.gradeStudent;
    return selectBox.selectByVisibleText(grade);
  }

  selectGender(gender) {
    const selectBox = this.genderStudent;
    return selectBox.selectByVisibleText(gender);
  }

  createStudentForm(firstName, lastName, birthday, uniqueId, grade, gender) {
    this.clickAddStudent();
    let year = birthday.substring(6, 10)
    let month = birthday.substring(3, 5)
    let day = birthday.substring(0, 2)
    if (firstName) {
      this.firstNameStudent.waitForDisplayed(8000);
      this.setStudentFirstName(firstName);
    }
    if (lastName) {
      this.lastNameStudent.waitForDisplayed(8000);
      this.setStudentLastName(lastName);
    }
    if (birthday) {
      this.setBirthdayYear(year)
      if(month.substring(0,1) == '0') {
        month = month.substring(1,2)
        this.setBirthdayMonth(month)
      } else {
        this.setBirthdayMonth(month)
      }
      if(day.substring(0,1) == '0') {
        day = day.substring(1,2)
        this.setBirthdayDay(day)
      } else {
        this.setBirthdayDay(day)
      } 
    }
    if (uniqueId) {
      this.uniqueIdStudent.waitForDisplayed(8000);
      this.setStudentUniqueId(uniqueId);
    }
    if (grade) {
      this.gradeStudent.waitForDisplayed(8000);
      this.selectGrade(grade);
    }
    if (gender) {
      this.genderStudent.waitForDisplayed(8000);
      this.selectGender(gender);
    }
    this.saveStudentButton.waitForDisplayed(8000);
    this.saveStudent();
  }

  // prepare for test setters
  clickPrepareReTest() {
    return this.prepareReTestButton.click();
  }

  uncheckTest() {
    this.selectAll.waitForDisplayed(10000)
    return this.selectAll.click({ force: true });
  }

  confirmSelect() {
    return this.confirmSelectionButton.click({ force: true });
  }

  saveTesting() {
    return this.saveTestingButton.click();
  }

  close() {
    return this.closeButton.click();
  }

  testStudentsOnOff() {
    this.prepareReTestButton.waitForDisplayed(3000);
    this.clickPrepareReTest();
    this.planedCheckBox1.waitForDisplayed(8000)
    this.uncheckTest();
    this.confirmSelect();
    this.saveTesting();
    this.close();
    $(
      'd50MdCFt0M2WvqTu4oIn1 Kz8SxMv1DdHZCPUdI3DBI _1JGqIgAz7pHNqS4g3iN3Aj'
    ).isDisplayed(undefined, false);
  }

  // remove class action

  removeClass() {
    this.removeClassButton.waitForDisplayed(8000);
    this.removeClassButton.click();
  }

  confirmRemoveClass() {
    this.confirmRemoveClassButton.waitForDisplayed(8000);
    this.confirmRemoveClassButton.click({ force: true });
  }

  // accept new org in your account

  closeModal() {
    this.closeModalwithNewOrg.waitForDisplayed(8000)
    this.closeModalwithNewOrg.click()
  }

  // excel export 

  excelExport() {
    this.excelExportButton.click()
  }
}

module.exports = new HomePage();
