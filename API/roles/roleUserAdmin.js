 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
 
const assert = require('assert');
const config = require('../../config/mainConfig.js');
const generators = require('../../utilis/generators.js');
const countries = ['AU','BR','DJ','EG', 'FR','DE','HK','IN','NG','NO','PT','SA','SE','US','AE','GB']
const languages = ['en','fr','de','nb','pt','sv']
const token = require('./token.json')
const color = require('../../utilis/consoleColor.js')

describe('API automation - roles - user admin ->', function() {
  const rndConutrie = countries[Math.floor(Math.random() * countries.length)]
  const rndLangugae = languages[Math.floor(Math.random() * languages.length)]

  var testOrg = ''
  it('Role - user admin - GET organisation', function() {
    allureReporter.addFeature('API automation - Role - user admin')
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
        color.log('Role - user admin - GET organisation', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('Role - user admin - GET organisation', 'success')
        : color.log(`Role - user admin - GET organisation with response ${error}`, 'error')
          expect(error.response.status).to.eql(200)
      })
      .finally(function () {
        // always executed
      });
    })  
    testOrg;
  })

  var date = new Date().toLocaleString()
  var rnd = generators.randomStringFourDigits()

  it('Role - user admin - POST organisation - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
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
        expect(response.status).to.eql(403)
        color.log('POST - organisation - FORBIDEN', 'success')
      })
      .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 403) 
      ? color.log('POST - organisation - FORBIDEN', 'success')
      : color.log(`POST - organisation - FORBIDEN with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })  
  })

  it('Role - user admin - EDIT organisation - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const editOrg = config.vivify2Org
    browser.call(() => {
      return Axios.put(`${config.orgCreationUrl}/organizations/${editOrg}`,
      {
        blobContainer: "usa",
        blobPrefix: '77t5',
        contactsIntegrationDistrictId: null,
        contactsIntegrationEnabled: false,
        contactsIntegrationProvider: "0",
        contactsIntegrationUrl: `https://oplxcustsvcsneudev.blob.core.windows.net/contacts-import/${editOrg}/in/[filename].csv[SAStoken]`,
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
        expect(response.status).to.eql(403)
        color.log('EDIT - organisation - FORBIDEN', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - organisation - FORBIDEN', 'success')
        : color.log(`EDIT - organisation - FORBIDEN with response <br> ${error}`, 'error')
      expect(error.response.status).to.eql(403)
      });
    })
  })

  
  it('Role - user admin - DELETE organisation - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const deleteOrg = config.vivify2Org
    browser.call(() => {
      return Axios.delete(`${config.orgCreationUrl}/organizations/${deleteOrg}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`
        }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('DELETE - organisation - FORBIDEN', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('DELETE - organisation - FORBIDEN', 'success') 
        : color.log(`DELETE - organisation - FORBIDEN - forbiden with response <br> ${error}`, 'error')
      expect(error.response.status).to.eql(403)
      });
    })
  })

  var orgForAll = config.orgForAll
  var user = ''
  it('Role - user admin - POST user invite', function() {
    allureReporter.addFeature('API automation - Role - examiner admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "api@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
        {
          classId: classid,
          roleId: roleId,
          schoolId: schoolid,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - user invite', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('POST - user invite', 'success') 
        : color.log(`POST - user invite has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  var schoolID = ''
  it('Role - user admin - POST school - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`${config.originUrl}/schools/${org}`, 
      {
        groupCode: "",
        groupName: "",
        name: "APIschool",
        schoolCode: "",
        shortName: "",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - school - FORBIDEN', 'success')
        var data = response.data.id
        expect(response.status).to.eql(403)
        schoolID = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - school - FORBIDEN', 'success') 
        : color.log(`POST - school - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
    schoolID;  
  })

  it('Role - user admin - EDIT school name - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID;
    browser.call(() => {
      return Axios.put(`${config.originUrl}/schools/${org}`, 
      {
        canAccess: true,
        classes: 0,
        grade: null,
        gradeByPeriodAggregates: [],
        id: school,
        latestScreeningDate: null,
        name: "Apichange",
        organizationId: org,
        periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: "123"
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - school name - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - school name - FORBIDEN', 'success') 
        : color.log(`EDIT - school name - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })  
  })

  it('Role - user admin - EDIT school name - revert to old one - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID;
    browser.call(() => {
      return Axios.put(`${config.originUrl}/schools/${org}`, 
      {
        canAccess: true,
        classes: 0,
        grade: null,
        gradeByPeriodAggregates: [],
        id: school,
        latestScreeningDate: null,
        name: "APIschool",
        organizationId: org,
        periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: "123"
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - school name - revert to old name - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - school name - revert to old name - FORBIDEN', 'success') 
        : color.log(`EDIT - school name - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })  
  })

  var schoolID = config.schoolID
  var schoolAllData = ''
    
  it('Role - user admin - GET school - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID
    browser.call(() => {
      return Axios.get(`${config.originUrl}/results/organizations/${org}/schools`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('GET school - FORBIDEN', 'success') 
        : color.log(`GET school - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })  
    schoolAllData;
  })

  var classID = ''
  it('Role - user admin - POST class - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/classes/${org}/school/${school}/periods/${classPeriod}/classes`, 
      {
        name: "APIclass",
        shortName: "",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('Class Created - FORBIDEN', 'success')
        expect(response.status).to.eql(404)
      })
      .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 404) 
      ? color.log('POST - class - FORBIDEN', 'success') 
      : color.log(`POST - class - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(404)
      })
    })
  })

  var classID = config.classID

  it('Role - user admin - POST student - grade 1 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    var org = orgForAll
    var classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        lastName: "Hakinen",
        socialId: `123ApiTest1`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - student grade 1 - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - student grade 1 - FORBIDEN', 'success') 
        : color.log(`POST - student grade 1 - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    }) 
  })

  it('Role - user admin - POST student - grade 4 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 4,
        lastName: "Hakinen",
        socialId: `123ApiTest2`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - student grade 4 - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - student grade 4 - FORBIDEN', 'success') 
        : color.log(`POST - student grade 4 - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST student - grade 6 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 6,
        lastName: "Hakinen",
        socialId: `123ApiTest3`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - student grade 6 - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - student grade 6 - FORBIDEN', 'success') 
        : color.log(`POST - student grade 6 - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST student - grade 8 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 8,
        lastName: "Hakinen",
        socialId: `123ApiTest4`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - student grade 8 - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - student grade 8 - FORBIDEN', 'success') 
        : color.log(`POST - student grade 8 - FORBIDEN has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  var allStudents = ''
  it('Role - user admin - GET all students', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    browser.call(() => {
      return Axios.get(`${config.originUrl}/results/organizations/${org}/classes/${classs}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('GET - all students in current class', 'success')
        var data = response.data.subjectsData
        expect(response.status).to.eql(403)
        allStudents = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - FORBIDEN', 'success') 
        : color.log(`POST - import students - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })  
    allStudents;
  })

  var schoolAllData = ''

  it('Role - user admin - GET school', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID
    browser.call(() => {
      return Axios.get(`${config.originUrl}/results/organizations/${org}/schools`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        var orgNumber = 0
        response.data.forEach(element => {
          if(element.id === school && element.periodName === "20/21") {
            color.log('Api school - old school is found', 'success')
            expect(element.name).to.eql('APIschool')
          } 
          if(element.id === school && element.periodName === "20/21") {
            var data = element
            schoolAllData = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('GET - classes - FORBIDEN', 'success') 
        : color.log(`GET - classes - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })  
    schoolAllData;
  })

  it('Role - user admin - POST import students - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: classPeriod,
        pupils: [
          {
            className: "2MrSmith",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "john.marks@crossroads.com",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "John",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marks",
            schoolCode: null,
            schoolName: "Crossroads Elementary",
            uniqueId: "Z35620",
          },
          {
            className: "3MsFox",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Jessica",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "Johnson",
            schoolCode: null,
            schoolName: "Crossroads Elementary",
            uniqueId: "M61324",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - FORBIDEN', 'success')
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - FORBIDEN', 'success') 
        : color.log(`POST - import students - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST import students - UK import - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgUK
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: 'e91d8068-b4f2-456b-9e76-af60292cdafc',
        pupils: [
          {
            className: "2MrSmith",
            dateOfBirth: "2008-10-24T00:00:00",
            email: "john.marks@crossroads.com",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "John",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marks",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "Z35620",
          },
          {
            className: "3MsFox",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Jessica",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "Johnson",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "M61324",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - UK - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - UK - FORBIDEN', 'success') 
        : color.log(`POST - import students - UK - FORBIDEN  has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST import students - NORWAY import - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgNOR
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: '4abf2856-2e38-45e7-9e5f-bc76cee92a84',
        pupils: [
          {
            className: "2B",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "elliot.bruun@hanne.no",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Elliot",
            gender: 0,
            grade: 1,
            index: 2,
            lastName: "Bruun",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "Z235620"
          },
          {
            className: "3A",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Alva",
            gender: 1,
            grade: 2,
            index: 3,
            lastName: "Tanner",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "MT61324",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - NOR - FORBIDEN', 'success')
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - NOR - FORBIDEN', 'success') 
        : color.log(`POST - import students - NOR - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST import students - FRANCE import - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgFRA
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: 'bd52d8e0-e6fa-4781-bc3b-66615f9da020',
        pupils: [
          {
            className: "2B",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "elliot.bruun@hanne.no",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Elliot",
            gender: 0,
            grade: 1,
            index: 2,
            lastName: "Bruun",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "ZF235620"
          },
          {
            className: "3A",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Alva",
            gender: 1,
            grade: 2,
            index: 3,
            lastName: "Tanner",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "MT324",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - FRANCE - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - FRANCE - FORBIDEN', 'success') 
        : color.log(`POST - import students - FRANCE - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST import students - PORTUGAL import - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgPT
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: '16b8a41c-a3b5-4c71-9604-318c1062f563',
        pupils: [
          {
            className: "2B",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "elliot.bruun@hanne.no",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Elliot",
            gender: 0,
            grade: 1,
            index: 2,
            lastName: "Bruun",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "ZF453t20"
          },
          {
            className: "3A",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Alva",
            gender: 1,
            grade: 2,
            index: 3,
            lastName: "Tanner",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "MT324r2s",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - PORTUGAL - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - PORTUGAL - FORBIDEN', 'success') 
        : color.log(`POST - import students - PORTUGAL - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - POST import students - BRASIL import - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgBRA
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: '99fce301-9d6e-468e-acbf-eb85d50da432',
        pupils: [
          {
            className: "2B",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "elliot.bruun@hanne.no",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Elliot",
            gender: 0,
            grade: 1,
            index: 2,
            lastName: "Bruun",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "ZF45rfd3t20"
          },
          {
            className: "3A",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Alva",
            gender: 1,
            grade: 2,
            index: 3,
            lastName: "Tanner",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "MT32324df2r2s",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - BRASIL - FORBIDEN', 'success') 
        expect(response.status).to.eql(403)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('POST - import students - BRASIL - FORBIDEN', 'success') 
        : color.log(`POST - import students - BRASIL - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      })
    })
  })

  it('Role - user admin - EDIT - Hide recording RAN - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record1
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "RAN A",
        distance: 664.694641,
        duration: 11702,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 199,
        group: null,
        hasError: null,
        id: "5fe7aa1e-2709-4ecb-a9d5-f71014d3b2de",
        ipm: 222,
        methodName: null,
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Letters_AA+VT",
        percentile: null,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.63175821,
        quality: 95.771225,
        readingMode: "Aloud",
        regressionFrequency: 23.8095245,
        removed: true,
        removedComment: "Comment over API automation",
        saccadeAmplitude: 3.67594576,
        start: "2020-07-21T11:57:34+00:00",
        stickyWords: [],
        stimuliDuration: 9692,
        stimuliId: "c0c6b324-ea4f-4d12-8d44-7ea59f928720",
        stimuliType: "RAN",
        zScore: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - hide recording - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - hide recording - FORBIDEN', 'success') 
        : color.log(`EDIT - hide recording - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
    
  })

  it('Role - user admin - EDIT - Hide recording and comment back to seen RAN - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record1
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "RAN A",
        distance: 664.694641,
        duration: 11702,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 199,
        group: null,
        hasError: null,
        id: "5fe7aa1e-2709-4ecb-a9d5-f71014d3b2de",
        ipm: 222,
        methodName: null,
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Letters_AA+VT",
        percentile: null,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.63175821,
        quality: 95.771225,
        readingMode: "Aloud",
        regressionFrequency: 23.8095245,
        removed: false,
        removedComment: "",
        saccadeAmplitude: 3.67594576,
        start: "2020-07-21T11:57:34+00:00",
        stickyWords: [],
        stimuliDuration: 9692,
        stimuliId: "c0c6b324-ea4f-4d12-8d44-7ea59f928720",
        stimuliType: "RAN",
        zScore: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - unhide recording - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - unhide recording - FORBIDEN', 'success') 
        : color.log(`EDIT - unhide recording - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - EDIT - Comment as empty string RAN - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record1
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "RAN A",
        distance: 664.694641,
        duration: 11702,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 199,
        group: null,
        hasError: null,
        id: "5fe7aa1e-2709-4ecb-a9d5-f71014d3b2de",
        ipm: 222,
        methodName: null,
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Letters_AA+VT",
        percentile: null,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.63175821,
        quality: 95.771225,
        readingMode: "Aloud",
        regressionFrequency: 23.8095245,
        removed: false,
        removedComment: "     ",
        saccadeAmplitude: 3.67594576,
        start: "2020-07-21T11:57:34+00:00",
        stickyWords: [],
        stimuliDuration: 9692,
        stimuliId: "c0c6b324-ea4f-4d12-8d44-7ea59f928720",
        stimuliType: "RAN",
        zScore: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - comment - empty string', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - comment - empty string - FORBIDEN', 'success') 
        : color.log(`EDIT - comment - empty string - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - EDIT - Hide recording and comment TEXT 1 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record2
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "Text 2 G",
        distance: 660.566,
        duration: 20303,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 272,
        group: 5,
        hasError: null,
        id: "ed07c8cb-831a-4b6d-9e5b-4754ba4aafb8",
        ipm: 187,
        methodName: "v5",
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Text_2_GC+VT",
        percentile: 99,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.55594134,
        quality: 96.7835541,
        readingMode: "Aloud",
        regressionFrequency: 27.7777786,
        removed: true,
        removedComment: "z",
        saccadeAmplitude: 4.540712,
        start: "2020-07-21T11:57:48+00:00",
        stimuliDuration: 12827,
        stimuliId: "a5e323ef-0c04-4298-a221-2855ab849cbd",
        stimuliType: "TXT1",
        zScore: 195.477661,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - hide TEXT 1 - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - hide TEXT 1 - FORBIDEN', 'success') 
        : color.log(`EDIT - hide TEXT 1 - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - EDIT - UnHide recording and comment TEXT 1 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record2
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "Text 2 G",
        distance: 660.566,
        duration: 20303,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 272,
        group: 5,
        hasError: null,
        id: "ed07c8cb-831a-4b6d-9e5b-4754ba4aafb8",
        ipm: 187,
        methodName: "v5",
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Text_2_GC+VT",
        percentile: 99,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.55594134,
        quality: 96.7835541,
        readingMode: "Aloud",
        regressionFrequency: 27.7777786,
        removed: true,
        removedComment: "z",
        saccadeAmplitude: 4.540712,
        start: "2020-07-21T11:57:48+00:00",
        stimuliDuration: 12827,
        stimuliId: "a5e323ef-0c04-4298-a221-2855ab849cbd",
        stimuliType: "TXT1",
        zScore: 195.477661,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - unhide TEXT 1 - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - unhide TEXT 1 - FORBIDEN', 'success') 
        : color.log(`EDIT - unhide TEXT 1 - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - Hide recording and comment TEXT 2 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record2
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "Text 2 G",
        distance: 660.566,
        duration: 20303,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 272,
        group: 5,
        hasError: null,
        id: "ed07c8cb-831a-4b6d-9e5b-4754ba4aafb8",
        ipm: 187,
        methodName: "v5",
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Text_2_GC+VT",
        percentile: 99,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.55594134,
        quality: 96.7835541,
        readingMode: "Aloud",
        regressionFrequency: 27.7777786,
        removed: true,
        removedComment: "z",
        saccadeAmplitude: 4.540712,
        start: "2020-07-21T11:57:48+00:00",
        stimuliDuration: 12827,
        stimuliId: "a5e323ef-0c04-4298-a221-2855ab849cbd",
        stimuliType: "TXT1",
        zScore: 195.477661,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - hide TEXT 2', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - hide TEXT 2 - FORBIDEN', 'success') 
        : color.log(`EDIT - hide TEXT 2 - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - Hide recording and comment TEXT 2 - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record3
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/recording/${record}/remove`,
      {
        displayName: "Text 2 B",
        distance: 656.5371,
        duration: 11573,
        errorCode: null,
        errorMessage: null,
        fixationDuration: 204,
        group: 5,
        hasError: null,
        id: "dfffbd3b-ccc1-443f-ad73-7df567740dae",
        ipm: 344,
        methodName: "v5",
        micLevel: 100,
        micMuted: false,
        name: "284+En_Us_Text_2_BC+VT",
        percentile: 100,
        previousGroup: null,
        previousMethodName: null,
        previousPercentile: null,
        previousZScore: null,
        pupil: 2.55000019,
        quality: 92.20941,
        readingMode: "Silent",
        regressionFrequency: 20,
        removed: true,
        removedComment: "API comment",
        saccadeAmplitude: 4.744016,
        start: "2020-07-21T11:58:10+00:00",
        stimuliDuration: 6618,
        stimuliId: "13fe38f9-9a90-497a-b198-b496cadd4e8b",
        stimuliType: "TXT2",
        zScore: 354.2024,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - hide TEXT 2 and commented - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - hide TEXT 2 and commented - FORBIDEN', 'success') 
        : color.log(`EDIT - hide TEXT 2 - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - EDIT - Comment session - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record3
    const session = config.screening
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/session/${session}`,
      {
        comments: "d",
        publicComments: "Comment006",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('EDIT - comment session - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('EDIT - comment session - FORBIDEN', 'success') 
        : color.log(`EDIT - comment session - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('DELETE - Comment session - FORBIDEN', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record3
    const session = config.screening
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/session/${session}`,
      {
        comments: "",
        publicComments: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(403)
        color.log('DELETE - comment session - FORBIDEN', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 403) 
        ? color.log('DELETE - comment session - FORBIDEN', 'success') 
        : color.log(`DELETE - comment session - FORBIDEN has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(403)
      });
    })
  })

  it('Role - user admin - delete token', function() {
    allureReporter.addFeature('API automation - Role - user admin')
    allureReporter.addSeverity('Minor')
    var fs = require('fs');
    fs.unlink("./test/selenium/API/roles/token.json", (err) => {
    if (err) throw err;
    color.log('Successfully deleted Token.js', 'success');
    });
  });
});
