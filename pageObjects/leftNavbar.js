 /* eslint-env jquery */

class Navbar {
  get selectOrganisationButton() {
    return $('select[id=left-nav-select-organization]');
  }

  get selectVivifyOverviewPage() {
    return $('a[data-automation-id="filter-grid-item-link-Vivify"]');
  }

  get selectSchoolButton() {
    return $('select[id=left-nav-select-school]');
  }

  get selectGradeButton() {
    return $('select[id=left-nav-select-year-or-class]');
  }

  get selectStudentButton() {
    return $('select[id=left-nav-select-pupil]');
  }

  get anonymize() {
    return $('div[class="checkbox"] > label');
  }

  get selectGradeFilter() {
    return $('div :nth-of-type(1) >.css-2b097c-container')
  }

  get grade1filter() {
    return $('.css-26l3qy-menu > .css-11unzgr > div[id="react-select-2-option-1"]')
  }

  get grade8filter() {
    return $('.css-26l3qy-menu > .css-11unzgr > div[id="react-select-2-option-8"]')
  }

  get studentLaraInTable() {
    return $('._1jz37RfDTn9M9dsze07YFq._2WT5EigC26RHuJD03QwpUG')
  }

  get exitFromMultiSelect() {
    return $('div[class="css-xb97g8 react-select__multi-value__remove"]')
  }

  get studentTable() {
    return $('._1qoQBDKqqpST4gD4l_3Lgv')
  }

  get studentAbilityFilter() {
    return $('div :nth-of-type(2) >.css-2b097c-container')
  }

  get lowAbilityStudents() {
    return $('.css-26l3qy-menu > .css-11unzgr > div[id="react-select-3-option-1"]')
  }

  get selectHighStudents() {
    return $('.css-26l3qy-menu > .css-11unzgr > div[id="react-select-3-option-4"]')
  }

  get schoolyear() {
    return $('select[data-automation-id="left-nav-select-period"]')
  }

  selectSchoolYear(year) {
    this.schoolyear.waitForDisplayed(15000);
    const selectBox = this.schoolyear;
    return selectBox.selectByVisibleText(year);
  }

  selectOrganisation(org) {
    this.selectOrganisationButton.waitForDisplayed(15000);
    const selectBox = this.selectOrganisationButton;
    return selectBox.selectByVisibleText(org);
  }

  selectSchool(school) {
    this.selectSchoolButton.waitForDisplayed(15000);
    const selectBox = this.selectSchoolButton;
    return selectBox.selectByVisibleText(school);
  }

  selectGrade(grade) {
    this.selectGradeButton.waitForDisplayed(15000);
    const selectBox = this.selectGradeButton;
    return selectBox.selectByVisibleText(grade);
  }

  selectStudent(student) {
    this.selectStudentButton.waitForDisplayed(15000);
    const selectBox = this.selectStudentButton;
    return selectBox.selectByVisibleText(student);
  }

  // hide student identity
  clickAnonymize() {
    this.anonymize.click();
  }

  selectVivifyOverview() {
    this.selectVivifyOverviewPage.click({ force: true });
  }

  selectGradeFilterClick() {
    this.selectGradeFilter.click()
  }

  pickGrade1fromFilter() {
    this.grade1filter.click()
  }

  pickGrade8fromFilter() {
    this.grade8filter.click()
  }

  exitFromMultiSelectAction() {
    this.exitFromMultiSelect.click()
  }

  studentAbilityFilterClick() {
    this.studentAbilityFilter.click()
  }

  selectLowAbility() {
    this.lowAbilityStudents.click()
  }

  actionSelectHighStudents() {
    this.selectHighStudents.click()
  }
}

module.exports = new Navbar();
