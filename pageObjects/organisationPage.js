 /* eslint-env jquery */

const { last } = require("lodash");

class OrganisationPage {
  // new user invite getters
  get inviteUserButton() {
    return $('a[id="btn-invite_user-OrganizationsEdit-PrimaryButton"]');
  }

  get importUsersButton() {
    return $(
      'a[id="btn-org_edit.import_user-OrganizationsEdit-PrimaryButton"]'
    );
  }

  get textAreaCSV() {
    return $('textarea[id="textarea-CSV"]')
  }

  get validateCSVButton() {
    return $('button[id="btn-ImportUsers-form.validate"]')
  }

  get saveCSVButton() {
    return $('button[id="btn-ImportUsers-form.save"]')
  }

  get editOrganisationButton() {
    return $('a[id="btn-org_edit.title-OrganizationsEdit-PrimaryButton"]');
  }

  get userFirstName() {
    return $(
      'input[data-automation-id="input-firstName-FirstName"]'
    );
  }

  get userLastName() {
    return $('input[data-automation-id="input-lastName-LastName"]');
  }

  get userEmail() {
    return $('input[data-automation-id="input-email-Email"]');
  }

  get userPhone() {
    return $('input[data-automation-id="input-phonenumber-PhoneNumber"]');
  }

  get userRole() {
    return $('div[data-automation-id="select-role-UserAdministrator"] > div > label > select');
  }

  get userSchool() {
    return $('div[data-automation-id="select-school-UserAdministrator"] > div  > label > select');
  }

  get userSchoolYear() {
    return $('div[data-automation-id="select-period-UserAdministrator"] > div  > label > select');
  }

  get userClass() {
    return $('div[data-automation-id="select-class-UserAdministrator"] > div  > label > select');
  }

  get confirmButton() {
    return $('button[id=btn-add_role-UserAdministrator]');
  }

  get invitationButton() {
    return $('button[id=btn-create_invitation-UserAdministrator-Button]');
  }

  get invitationLink() {
    return $('form  a[target="_blank"]');
  }

  get logoutButtonInvite() {
    return $(
      'button[data-automation-id="btn-logout-InvitationWelcome-PrimaryButton"]'
    );
  }

  // delete invite getters

  get deleteInviteButton() {
    return $('button[data-automation-id="btn-org_edit.delete-UserAdministrator"]');
  }

  get deleteInviteSmoke() {
    return $('button[button[data-automation-id="btn-org_edit.delete-2-UserAdministrator"]]')
  }

  get deleteConfirmButton() {
    return $(
      'button[data-automation-id="btn-org_edit.delete-UserAdministrator"]'
    );
  }

  get openUserMenuButton() {
    return $(
      'button[data-automation-id="user-profile-menu"]'
    )
  }

  get loggedUserName() {
    return $('button[data-automation-id="user-profile-menu"] > .user-info > span')
  }

  get exitModal() {
    return $('.close-button')
  }

  get toAdministrationButton() {
    return $('a[href="/admin/organizations"]')
  }

  get toQualityButton() {
    return $('a[href="/admin/quality-review"]')
  }

  get toResultsButton() {
    return $('a[href="/"]')
  }

  get logoutButton() {
    return $('a[href="/signout"]')
  }

  get changeLanguageButton() {
    return $('div[role="menu"] > div:nth-of-type(5)  span')
  }

  get saveEditUserButton() {
    return $('button[data-automation-id="btn-form.save-2-UserAdministrator"]')
  }

  get deleteRoleButton() {
    return $('tr:nth-of-type(2) > td:nth-of-type(5) > svg > path')
  }

  get deleteRegisteredUser() {
    return $('button[data-automation-id="btn-org_edit.delete-2-UserAdministrator"]')
  }

  get languageSelector() {
    return $('select[data-automation-id="language-select"]')
  }

  get homePageButton() {
    return $('header[data-automation-id="header"] > div > a:nth-of-type(1)')
  }


  // header

  openUserMenu() {
    return this.openUserMenuButton.click({force:true})
  }

  toAdminPage() {
    return this.toAdministrationButton.click({force:true})
  }

  toQualityPage() {
    return this.toQualityButton.click({force:true})
  }

  toResultsPage() {
    return this.toResultsButton.click({force:true})
  }

  logout() {
    this.logoutButton.waitForDisplayed(8000)
    return this.logoutButton.click({force:true})
  }

  changeLanguage() {
    this.changeLanguageButton.waitForDisplayed(8000)
    this.changeLanguageButton.click({force:true})
  }

  selectLanguage(language) {
    const selectBox = this.languageSelector;
    selectBox.selectByVisibleText(language);
    $('button[data-automation-id="button-confirm-dialog-primary"]').click()
  }

  homePageLink() {
    this.homePageButton.click()
  }

  // invite and create user setters
  
  inviteUser() {
    this.inviteUserButton.waitForDisplayed(8000)
    return this.inviteUserButton.click({ force: true });
  }

  setFirstName(name) {
    return this.userFirstName.setValue(name);
  }

  setLastName(lastName) {
    return this.userLastName.setValue(lastName);
  }

  setEmail(email) {
    return this.userEmail.setValue(email);
  }

  setPhone(phone) {
    return this.userPhone.setValue(phone)
  }

  selectRole(role) {
    const selectBox = this.userRole;
    return selectBox.selectByVisibleText(role);
  }

  selectSchool(school) {
    const selectBox = this.userSchool;
    return selectBox.selectByVisibleText(school);
  }

  selectSchoolYear(year) {
    const selectBox = this.userSchoolYear;
    return selectBox.selectByVisibleText(year);
  }

  selectClass(pickedClass) {
    const selectBox = this.userClass;
    return selectBox.selectByVisibleText(pickedClass);
  }

  confirmClass() {
    return this.confirmButton.click({ force: true });
  }

  createInvitation() {
    return this.invitationButton.click({ force: true });
  }

  // form for invite and new user creation
  
  submitAllInformationViaContactUsForm(
    firstName,
    lastName,
    emailAddress,
    role,
    school,
    year,
    pickedClass
  ) {
    if (firstName) {
      this.setFirstName(firstName);
    }
    if (lastName) {
      this.setLastName(lastName);
    }
    if (emailAddress) {
      this.setEmail(emailAddress);
    }
    if (role) {
      this.userRole.waitForEnabled(8000)
      this.selectRole(role);
    }
    if (school) {
      this.selectSchool(school);
    }
    if (year) {
      this.selectSchoolYear(year);
    }
    if (pickedClass) {
      this.selectClass(pickedClass);
    }
    this.confirmClass();
    this.createInvitation();
  }

  submitFeideInvite(
    firstName,
    lastName,
    emailAddress,
    role,
  ) {
    if (firstName) {
      this.setFirstName(firstName);
    }
    if (lastName) {
      this.setLastName(lastName);
    }
    if (emailAddress) {
      this.setEmail(emailAddress);
    }
    if (role) {
      this.selectRole(role);
    }
    this.confirmClass();
    this.createInvitation();
  }

  initationLinkClick() {
    return this.invitationLink.click();
  }

  deleteInvite() {
    this.deleteInviteButton.click({ force: true });
    this.deleteConfirmButton.waitForDisplayed(8000);
    this.deleteConfirmButton.click({ force: true });
  }

  deleteInviteSm() {
    this.deleteInviteSmoke.click({ force: true });
    this.deleteConfirmButton.waitForDisplayed(8000);
    this.deleteConfirmButton.click({ force: true });
  }

  deleteInviteRegistered() {
    this.deleteRegisteredUser.click({ force: true });
    this.deleteConfirmButton.waitForDisplayed(8000);
    this.deleteConfirmButton.click({ force: true });
  }
  

  saveEditUser() {
    this.saveEditUserButton.click()
  }

  deleteRole() {
    this.deleteRoleButton.click()
  }

  validateCSV() {
    this.validateCSVButton.waitForDisplayed(8000)
    this.validateCSVButton.click()
  }

  saveCSV() {
    this.saveCSVButton.waitForDisplayed(8000)
    this.saveCSVButton.click({force:true})
  }

  editUser(name, lastName, inputEmail, phone) {
    this.userFirstName.waitForDisplayed(8000)
    name = name || undefined
    lastName = lastName || undefined
    inputEmail = inputEmail || undefined
    phone = phone || undefined
    if(name != undefined) {
      this.userFirstName.clearValue()
      this.setFirstName(name)
    } 
    if(lastName !=undefined) {
      this.userLastName.clearValue()
      this.setLastName(lastName)
    } 
    if(inputEmail !=undefined) {
      this.userEmail.clearValue()
      this.setEmail(inputEmail)
    } 
    if(phone !=undefined) {
      this.userPhone.clearValue()
      this.setPhone(phone)
    }
    this.saveEditUser()
  }
}

module.exports = new OrganisationPage();
