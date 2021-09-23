 /* eslint-env jquery */

const { BrowserRouter } = require("react-router-dom");
const { isThrowStatement } = require("typescript");

class AdministratorPage {
  get administratorLink() {
    return $('ul > li > a[data-automation-id="link-orgs-Drawer-Link"]');
  }

  get addOrganisation() {
    return $('a[id="btn-org_creator.add-OrganizationsList-PrimaryButton"]');
  }

  get editOrganisation() {
    return $('a[id="btn-org_edit.title-OrganizationsEdit-PrimaryButton"]');
  }

  get deleteOrganisation() {
    return $('a[id="btn-delete_organisation-OrganizationsEdit-PrimaryButton"]')
  }

  //  organisation form data

  get organisationName() {
    return $('input[name="name"]');
  }

  get organisationShortName() {
    return $('input[name="shortName"]');
  }
  
  get organisationPublicId() {
    return $('input[name="publicId"]');
  }

  get organisationCode() {
    return $('input[name="organizationCode"]');
  }

  get countryCode() {
    return $('select[name="countryCode"]');
  }

  get languageCode() {
    return $('select[name="languageCode"]');
  }

  get createOrganisaton() {
    return $('button[data-automation-id="create-org"]');
  }

  //  organisation filter 

  get filterOrganisation() {
    return $('th:nth-of-type(1) > div > input');
  }

  //  filtered results 

  get filteredOrganisation() {
    return $('td:nth-of-type(1) > div');
  }

  get returnToOverview() {
    return $('a[data-automation-id="btn_viewResults"]');
  }

  get allOrganisations() {
    return $('table > tbody > tr');
  }

  get vivify() {
    return $('=Vivify')
  }

  get inputDeleteOrganisation() {
    return $('input[data-automation-id="confirm-remove-organization-from-class-input"]')
  }

  get deleteOrgConfirm() {
    return $('button[data-automation-id="remove_organization_dialog.confirm"]')
  }

  get selectCreatedUser() {
    return $('//a[contains(text(),"Andrija Admin")]')
  }

  get changeIDP() {
    return $('button[data-automation-id="btn-org_edit.change_login_type.title-UserAdministrator"]')
  }

  get selectNewIDP() {
    return $('.center.change-login-type.popup > div > div:nth-of-type(1) > label > select')
  }

  get saveIDPchange() {
    return $('button[data-automation-id="btn-Popup-form.save"]')
  }

  get invitationIDP() {
    return $('.invitations-pending > ._3MFAGmRpLdYMrn4NrdSWTb > table a')
  }

  get invitationLink() {
    return $('form  a[target="_blank"]')
  }

  get cleverImportError() {
    return $('a[href="/admin/organization/8006a255-d226-48f0-b6c9-3e3c1303528f/import-log"]')
  }

  get lastCleverImport() {
    return $('tr:last-child > td:nth-of-type(1)').getText()
  }

  get exportLogButton() {
    return $('//span[contains(text(),"Export logfile")]')
  }

  get grabEditUser() {
    return $('//a[contains(text(),"Supervisor 1")]')
  }

  get settingsTab() {
    return $('a[data-automation-id="org-profile"]')
  }

  clickAdministratorButton() {
    this.administratorLink.waitForDisplayed(8000);
    return this.administratorLink.click({ force: true });
  }

  clickAddOrganisation() {
    return this.addOrganisation.click({ force: true });
  }

  clickEditOrganisation() {
    return this.editOrganisation.click({ force:true })
  }

  clickDeleteOrganisation() {
    return this.deleteOrganisation.click({ force:true })
  }
  //  input seters for organisation create

  selectContryCode(code) {
    const selectBox = this.countryCode;
    return selectBox.selectByVisibleText(code);
  }

  selectLanguageCode(language) {
    const selectBox = this.languageCode;
    return selectBox.selectByVisibleText(language);
  }

  clickCreateOrganisation() {
    return this.createOrganisaton.click({ force: true });
  }

  returnToOverviewPage() {
    return this.returnToOverview.click();
  }

  //  create organisation complete function

  createOrganisationForm(
    organisation,
    shortOrg,
    organisationFull,
    contryCode,
    language
  ) {
    if (organisation) {
      this.organisationName.setValue(organisation);
    }
    if (shortOrg) {
      this.organisationShortName.setValue(shortOrg);
    }
    if (organisationFull) {
      this.organisationPublicId.setValue(organisationFull);
    }
    if (contryCode) {
      this.selectContryCode(contryCode);
    }
    if (language) {
      this.selectLanguageCode(language);
    }
    this.createOrganisaton.scrollIntoView()
    this.clickCreateOrganisation();
  }

  selectVivify() {
    this.vivify.click({ force: true });
  }

  deleteOrgConfirmClick() {
    this.deleteOrgConfirm.click({ force:true })
  }

  selectIDPuser() {
    this.selectCreatedUser.click()
  }

  clickChangeIDP() {
    this.changeIDP.click()
  }

  selectIDP(IDP) {
    const selectBox = this.selectNewIDP;
    return selectBox.selectByVisibleText(IDP);
  }

  saveIDP() {
    this.saveIDPchange.click()
  }

  changeIDPtoNew() {
    this.clickChangeIDP()
    browser.pause(1000)
    this.selectIDP('Office 365')
    this.saveIDP()
  }

  invitationClick() {
    this.invitationIDP.waitForDisplayed(10000)
    this.invitationIDP.click()
  }

  invitationLinkClick() {
    this.invitationLink.click()
  }

  cleverErrorClick() {
    this.cleverImportError.waitForDisplayed(8000)
    this.cleverImportError.click()
  }

  exportLog() {
    this.exportLogButton.waitForDisplayed(8000)
    this.exportLogButton.click()
  }

  openEditUser(name, lastName) {
    $(`//a[contains(text(),"${name} ${lastName}")]`).click()
  }

  findCreatedUser(name, lastName) {
    $(`//a[contains(text(),"${name} ${lastName}")]`).waitForDisplayed(8000)
  }

  toSettings() {
    this.settingsTab.click()
  }
}

module.exports = new AdministratorPage();
