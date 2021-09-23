 /* eslint-env jquery */

class School {
  get editSchoolButton() {
    return $(
      '//span[contains(text(),"Edit school")]'
    );
  }

  get removeSchoolButton() {
    return $(
      'button[data-automation-id="button-delete-school-primary-button"]'
    );
  }

  get editClassButton() {
    return $('button[id="button-class-edit-primary-button"]');
  }

  get removeClassButton() {
    return $('button[data-automation-id="btn-delete-class"]');
  }

  // students data table

  get studentNameTable() {
    return $('div[data-type="displayName"]');
  }

  get studentBirthdayTable() {
    return $('div[data-type="birthDate"]');
  }

  get studentReadingAbilityTable() {
    return $('div[data-type="resultGroup"]');
  }

  get studentGLETable() {
    return $('div[data-type="gle"]');
  }

  get studentReadingComprehentionTable() {
    return $('div[data-type="readingResults"]');
  }

  get studentScreaningStatusTable() {
    return $('div[data-type="screeningStatus"]');
  }

  get studentInternalCommentsTable() {
    return $('div[data-type="internalComment"]');
  }

  get studentPublicCommentsTable() {
    return $('div[data-type="publicComments"]');
  }

  get confirmDeleteInput() {
    return $('input[data-automation-id="confirm-remove-school-input"]')
  }

  get confirmRemoveSchoolButton() {
    return $('button[data-automation-id="button-confirm-dialog-primary"]');
  }

  confirmRemoveSchool() {
    this.confirmRemoveSchoolButton.waitForDisplayed(8000);
    this.confirmRemoveSchoolButton.click({ force: true });
  }

  removeSchool() {
    this.removeSchoolButton.click()
    this.confirmDeleteInput.waitForDisplayed(8000)
    this.confirmDeleteInput.setValue('DELETE')
    this.confirmRemoveSchool()
  }
  
}

module.exports = new School();
