 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
 
  const assert = require('assert');
  const config = require('../config/mainConfig.js');
  const generators = require('../utilis/generators.js');
  const countries = ['AU','BR','DJ','EG', 'FR','DE','HK','IN','NG','NO','PT','SA','SE','US','AE','GB']
  const languages = ['en','fr','de','nb','pt','sv']
  const token = require('./token.json')
  const color = require('../utilis/consoleColor.js')
  
  describe('API automation - Organisation CRUD ->', function() {
    const rndConutrie = countries[Math.floor(Math.random() * countries.length)]
    const rndLangugae = languages[Math.floor(Math.random() * languages.length)]
 
     var testOrg = ''
     it('GET organisation', function() {
       allureReporter.addFeature('API automation')
       allureReporter.addSeverity('Blocker')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.get(`${config.orgCreationUrl}/organizations`,
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(200)
           var orgNumber = 0
           response.data.forEach(element => {
             if(element.name === 'Vivify') {
               color.log('Vivify organisation is found', 'success')
               expect(element.name).to.eql('Vivify')
             } 
             if(element.name.includes("APItest")) {
               var data = element
               testOrg = data
             }
             orgNumber++;
           })
           if (orgNumber < 100) {
            color.log(`Number of organisations is ${orgNumber}`, 'success')
           } else if(100 < orgNumber < 110) {
            color.log(`Number of organisations is ${orgNumber}`, 'warning')
           } else {
            color.log(`Number of organisations is ${orgNumber}`, 'error')
           }
         })
         .catch(function (error) {
           console.log(error);
           expect(error.response.data.message).to.be.undefined
         })
         .finally(function () {
           // always executed
         });
       })  
       testOrg;
     })
 
     var organisationCreated = ''
     var date = new Date().toLocaleString()
     var rnd = generators.randomStringFourDigits()
     it('POST organisation - wrong language code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: 'enn',
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
           (typeof error.response.status != "undefined" && error.response.status === 400) 
           ? color.log('Organisation can`t be created - wrong language code', 'success') 
           : color.log(`Organisation creation error with response ${error}`, 'error')
           expect(error.response.data.message).to.eql('The request is invalid.')
         })
       })  
     })
 
     it('POST organisation - language code starting with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: ' ',
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - language code starting with space', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
           expect(error.response.status).to.eql(400)
         })
       })  
     })
 
     it('POST organisation - empty language code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: '',
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - empty language code', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })
 
     it('POST organisation - empty countrie code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: '',
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - empty countrie code', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })
 
     it('POST organisation - countrie code starting with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: ' ',
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - countrie code starting with space', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
         })
       })  
     })
 
     it('POST organisation - wrong countrie code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: 'ZZ',
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - wrong countrie code', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })
 
     it('POST organisation - empty short name code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: '',
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - empty short name code', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })
 
     it('POST organisation - short name filled with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: '    ',
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - short name filled with space', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })
 
 
     it('POST organisation - wrong length of the short name code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: 333,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - wrong length of the short name code', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })
 
     it('POST organisation - shortName longer that 4 digits', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: 3333333,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - shortName longer that 4 digits', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
         })
       })  
     })
 
     it('POST organisation - create organisation with empty name', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: ``,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: 3333333,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           expect(response.status).to.eql(400)
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - create organisation with empty name', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         })
       })  
     })

     it('POST organisation - name that is already in DB', function() {
      allureReporter.addFeature('API automation - Organisation')
      allureReporter.addSeverity('Normal')
      const access_token = token.access_token
      browser.call(() => {
        return Axios.post(`${config.orgCreationUrl}/organizations`, 
        {
          blobContainer: "",
          blobPrefix: "",
          contactsIntegrationDistrictId: null,
          contactsIntegrationEnabled: false,
          contactsIntegrationProvider: "0",
          countryCode: rndConutrie,
          idpEndpoint: "",
          idpType: "b2c",
          integrationType: "",
          isValid: false,
          languageCode: rndLangugae,
          name: `Vivify`,
          organizationCode: "",
          publicId: `Vivify`,
          shortName: rnd,
          subdivisionCode: "",
          urlSuffix: "",
          validateUniqueId: true
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }).then(function (response) {
          expect(response.status).to.eql(400)
        })
        .catch(function (error) {
         (typeof error.response.status != "undefined" && error.response.status === 400) 
         ? color.log('Organisation can`t be created - name is already in DB', 'success') 
         : color.log(`Organisation creation error with response ${error}`, 'error')
         expect(error.response.status).to.eql(400)
        })
      })  
    })
 
     it('POST organisation', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Blocker')
       const access_token = token.access_token
       browser.call(() => {
         return Axios.post(`${config.orgCreationUrl}/organizations`, 
         {
           blobContainer: "",
           blobPrefix: "",
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           countryCode: rndConutrie,
           idpEndpoint: "",
           idpType: "b2c",
           integrationType: "",
           isValid: false,
           languageCode: rndLangugae,
           name: `APItest${date}`,
           organizationCode: "",
           publicId: `APItest${date}`,
           shortName: rnd,
           subdivisionCode: "",
           urlSuffix: "",
           validateUniqueId: true
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
           }
         }).then(function (response) {
           var data = response.data.id
           expect(response.status).to.eql(201)
           color.log('Organisation created', 'success')
           organisationCreated = data
         })
         .catch(function (error) {
          (typeof error.response.status != "undefined" && error.response.status === 200) 
          ? color.log('Organisation created', 'success') 
          : color.log(`Organisation creation error with response ${error}`, 'error')
           expect(error.response.data.message).to.be.undefined
         })
       })  
       organisationCreated;
     })
 
     it('EDIT organisation - wrong countrie code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       console.log(editOrg)
       browser.call(() => {
         return Axios.put(`${config.orgEditUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "ZZ",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - wrong countrie code', 'success') 
          : color.log(`Organisation editing error with response ${error}`, 'error')
         });
       })
     })
 
     it('EDIT organisation - countrie code starting with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "  ",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - countrie code starting with space', 'success') 
          : color.log(`Organisation editing error with response - <br>${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - empty countrie code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be created - empty countrie code', 'success') 
          : color.log(`Organisation editing error with response <br>${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - wrong language code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: rndConutrie,
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "zz",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited - wrong language code', 'success') 
          : color.log(`Organisation editing error with response <br>${error}`, 'error')
           expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - language code starting with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: rndConutrie,
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: " ",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited, wrong data inserted', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - empty language code', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: rndConutrie,
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited, wrong data inserted', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - wrong lenght of shortName, short', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '755',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited, wrong data inserted', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - wrong lenght of shortName, filled with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '    ',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited, wrong data inserted', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - wrong lenght of shortName, empty', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited, wrong data inserted', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - wrong lenght of shortName, long', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '755123',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited, wrong data inserted', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - change name with space', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: '   ',
           organizationCode: "",
           publicComments: null,
           publicId: '',
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited - change name with space', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
     it('EDIT organisation - change name to empty name', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Normal')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: '',
           organizationCode: "",
           publicComments: null,
           publicId: '',
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(400)
         })
         .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 400) 
          ? color.log('Organisation can`t be edited - change name in name that is already in DB', 'success') 
          : color.log(`Organisation editing error with response <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })

     it('EDIT organisation - change name that is already in DB', function() {
      allureReporter.addFeature('API automation - Organisation')
      allureReporter.addSeverity('Normal')
      const access_token = token.access_token
      const editOrg = testOrg
      browser.call(() => {
        return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
        {
          blobContainer: "usa",
          blobPrefix: '77t5',
          contactsIntegrationDistrictId: null,
          contactsIntegrationEnabled: false,
          contactsIntegrationProvider: "0",
          contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
          countryCode: rndConutrie,
          id: editOrg.id,
          idpEndpoint: "",
          idpType: "b2c",
          isValid: true,
          languageCode: "en",
          name: 'Vivify',
          organizationCode: "",
          publicComments: null,
          publicId: editOrg.name,
          shortName: '77t5',
          subdivisionCode: "",
          urlSuffix: "",
          userAccess: {isUserAdministrator: true},
          isUserAdministrator: true,
          validateUniqueId: true,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`
        }
        }).then(response => { 
          expect(response.status).to.eql(400)
        })
        .catch(error => {
         (typeof error.response.status != "undefined" && error.response.status === 400) 
         ? color.log('Organisation can`t be edited - change name to empty name', 'success') 
         : color.log(`Organisation editing error with response <br> ${error}`, 'error')
         expect(error.response.status).to.eql(400)
        });
      })
    })
 
     it('EDIT organisation', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Blocker')
       const access_token = token.access_token
       const editOrg = testOrg
       browser.call(() => {
         return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg.id}`,
         {
           blobContainer: "usa",
           blobPrefix: '77t5',
           contactsIntegrationDistrictId: null,
           contactsIntegrationEnabled: false,
           contactsIntegrationProvider: "0",
           contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg.id}/in/[filename].csv[SAStoken]`,
           countryCode: "PT",
           id: editOrg.id,
           idpEndpoint: "",
           idpType: "b2c",
           isValid: true,
           languageCode: "en",
           name: editOrg.name,
           organizationCode: "",
           publicComments: null,
           publicId: editOrg.name,
           shortName: '77t5',
           subdivisionCode: "",
           urlSuffix: "",
           userAccess: {isUserAdministrator: true},
           isUserAdministrator: true,
           validateUniqueId: true,
         },
         {
           headers: {
             Authorization: `Bearer ${access_token}`
         }
         }).then(response => { 
           expect(response.status).to.eql(200)
           color.log('Organisation has been edited', 'success')
         })
         .catch(error => {
          color.log(`Organisation cant be created with response - <br> ${error}`, 'error')
          expect(error.response.status).to.eql(500)
         });
       })
     })
 
     
     it('DELETE organisation', function() {
       allureReporter.addFeature('API automation - Organisation')
       allureReporter.addSeverity('Blocker')
       const access_token = token.access_token
       const deleteOrg = testOrg
       console.log(`${config.orgCreationUrl}/organizations/${deleteOrg.id}`)
       browser.call(() => {
         return Axios.delete(`${config.orgCreationUrl}/organizations/${deleteOrg.id}`,
           {
             headers: {
               Authorization: `Bearer ${access_token}`
           }
         }).then(response => { 
           expect(response.status).to.eql(200)
           color.log('Organisation is deleted', 'success')
         })
         .catch(error => {
          color.log(`Organisation is not deleted with response - <br> ${error}`, 'error')
          expect(error.response.status).to.eql(400)
         });
       })
     })
 
  });
  