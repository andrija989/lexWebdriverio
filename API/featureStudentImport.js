 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
 
const assert = require('assert');
const config = require('../config/mainConfig.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')
  
describe('API automation - feature student import ->', function() {
  const orgForAll = config.orgForAll 
  const schoolID = config.schoolID
  var schoolAllData = ''

  it('GET school', function() {
    allureReporter.addFeature('API automation - School')
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
        color.log(error, 'error');
        expect(error.response.data.message).to.be.undefined
      })
    })  
    schoolAllData;
  })

  it('POST import students - empty first name', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "",
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
            firstName: "",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - empty first name', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - first name with space on start', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "  ",
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
            firstName: "   ",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - first name space on start', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - empty last name', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "",
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
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - empty last name', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - last name with space on start', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "   ",
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
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "  ",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - last name space on start', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - empty class name', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: classPeriod,
        pupils: [
          {
            className: "",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "john.marks@crossroads.com",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marcs",
            schoolCode: null,
            schoolName: "Crossroads Elementary",
            uniqueId: "Z35620",
          },
          {
            className: "",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "John",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - empty class name', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - class name with space on start', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: classPeriod,
        pupils: [
          {
            className: "   ",
            dateOfBirth: "2008-03-10T00:00:00",
            email: "john.marks@crossroads.com",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marcs",
            schoolCode: null,
            schoolName: "Crossroads Elementary",
            uniqueId: "Z35620",
          },
          {
            className: "   ",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "John",
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
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - class name with only space in name', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - empty unique ID', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marc",
            schoolCode: null,
            schoolName: "Crossroads Elementary",
            uniqueId: "",
          },
          {
            className: "3MsFox",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "Marc",
            schoolCode: null,
            schoolName: "Crossroads Elementary",
            uniqueId: "",
          }
        ],
        semester: null
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
        ? color.log('POST - import students - empty unique ID', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - empty school', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marc",
            schoolCode: null,
            schoolName: "",
            uniqueId: "Z35620",
          },
          {
            className: "3MsFox",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "Marc",
            schoolCode: null,
            schoolName: "",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - empty school', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - school name with space on start', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Marc",
            schoolCode: null,
            schoolName: "  ",
            uniqueId: "Z35620",
          },
          {
            className: "3MsFox",
            dateOfBirth: "2007-09-22T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Johnson",
            gender: 1,
            grade: 3,
            index: 3,
            lastName: "Marc",
            schoolCode: null,
            schoolName: "  ",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - school name with only space', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students - gender wrong value', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 7,
            grade: 2,
            index: 2,
            lastName: "Marc",
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
            firstName: "Johnson",
            gender: 9,
            grade: 3,
            index: 3,
            lastName: "Marc",
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
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - wrong gender value', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST import students - empty grade', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: "",
            index: 2,
            lastName: "Marc",
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
            firstName: "Johnson",
            gender: 1,
            grade: "",
            index: 3,
            lastName: "Marc",
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
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - empty grade', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST import students - wrong grade', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Normal')
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
            firstName: "Marc",
            gender: 0,
            grade: 15,
            index: 2,
            lastName: "Marc",
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
            firstName: "Johnson",
            gender: 1,
            grade: 11,
            index: 3,
            lastName: "Marc",
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - import students - wrong grade', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST import students', function() {
    allureReporter.addFeature('API automation - Import students')
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
        color.log('POST - import students', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students', 'success') 
        : color.log(`POST - import students has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolAllData = ''
  it('GET school', function() {
    allureReporter.addFeature('API automation - Import students')
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
          if(element.name === 'Crossroads Elementary' && element.periodName === "20/21") {
            color.log('Crossroads Elementary is found', 'success')
            expect(element.name).to.eql('Crossroads Elementary')
          } 
          if(element.name === 'Crossroads Elementary' && element.periodName === "20/21") {
            var data = element
            schoolAllData = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
    })  
    schoolAllData;
  })

  it('DELETE School', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolAllData.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE school', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school', 'success') 
        : color.log(`DELETE - school has error with response ${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
  })

  it('POST import students - UK import', function() {
    allureReporter.addFeature('API automation - Import students')
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
        color.log('POST - import students - UK', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - UK', 'success') 
        : color.log(`POST - import students - UK has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolUK = ''
  it('GET school- Uk import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgUK
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
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            color.log('API Elementary is found - UK organisation', 'success')
            expect(element.name).to.eql('API Elementary')
          } 
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            var data = element
            schoolUK = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
      .finally(function () {
        // always executed
      });
    })  
    schoolUK;
  })

  it('DELETE School - Uk import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgUK
    const school = schoolUK.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - school', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school', 'success') 
        : color.log(`DELETE - school has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })
  
  it('POST import students - SWE import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgSWE
    browser.call(() => {
      return Axios.post(`${config.originUrl}/import-pupils/${org}/save`, 
      {
        periodId: '491bc59f-9886-4f35-8fc5-97308eabdcde',
        pupils: [
          {
            className: "2A",
            dateOfBirth: "2008-05-10T00:00:00",
            email: "john.johansson@ostraskolan.se",
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "John",
            gender: 0,
            grade: 2,
            index: 2,
            lastName: "Johansson",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "20080510-6432"
          },
          {
            className: "3B",
            dateOfBirth: "2008-06-23T00:00:00",
            email: null,
            externalClassId: null,
            externalContactId: null,
            externalSchoolId: null,
            firstName: "Jessica",
            gender: null,
            grade: 3,
            index: 3,
            lastName: "Faberée",
            schoolCode: null,
            schoolName: "API Elementary",
            uniqueId: "20080612-8856",
          }
        ],
        semester: null
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - import students - SWE', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - SWE', 'success') 
        : color.log(`POST - import students - SWE has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolSWE = ''
  it('GET school- SWE import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgSWE
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
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            color.log('API Elementary is found - SWE ', 'success')
            expect(element.name).to.eql('API Elementary')
          } 
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            var data = element
            schoolSWE = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
      .finally(function () {
        // always executed
      });
    })  
    schoolSWE;
  })

  it('DELETE School - SWE import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgSWE
    const school = schoolSWE.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - school - SWE', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school - SWE', 'success') 
        : color.log(`DELETE - school - SWE has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('POST import students - NORWAY import', function() {
    allureReporter.addFeature('API automation - Import students')
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
        color.log('POST - import students - NOR', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - NOR', 'success') 
        : color.log(`POST - import students - NOR has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolNOR = ''
  it('GET school- NORWAY import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgNOR
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
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            color.log('API Elementary is found - NORWAY', 'success')
            expect(element.name).to.eql('API Elementary')
          } 
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            var data = element
            schoolNOR = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
      .finally(function () {
        // always executed
      });
    })  
    schoolNOR;
  })

  it('DELETE School - NORWAY import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgNOR
    const school = schoolNOR.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - school - NORWAY', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school - NORWAY', 'success') 
        : color.log(`DELETE - school - NORWAY has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('POST import students - FRANCE import', function() {
    allureReporter.addFeature('API automation - Import students')
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
        color.log('POST - import students - FRANCE', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - FRANCE', 'success') 
        : color.log(`POST - import students - FRANCE has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolFRA = ''
  it('GET school- FRANCE import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgFRA
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
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            color.log('API Elementary is found - FRANCE', 'success')
            expect(element.name).to.eql('API Elementary')
          } 
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            var data = element
            schoolFRA = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
      .finally(function () {
        // always executed
      });
    })  
    schoolFRA;
  })

  it('DELETE School - FRANCE import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgFRA
    const school = schoolFRA.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - school - FRANCE', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school - FRANCE', 'success') 
        : color.log(`DELETE - school - FRANCE has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('POST import students - PORTUGAL import', function() {
    allureReporter.addFeature('API automation - Import students')
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
        color.log('POST - import students - PORTUGAL', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - PORTUGAL', 'success') 
        : color.log(`POST - import students - PORTUGAL has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolPT = ''
  it('GET school- PORTUGAL import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgPT
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
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            color.log('API Elementary is found - PORTUGAL', 'success')
            expect(element.name).to.eql('API Elementary')
          } 
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            var data = element
            schoolPT = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
      .finally(function () {
        // always executed
      });
    })  
    schoolPT;
  })

  it('DELETE School - PORTUGAL import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgPT
    const school = schoolPT.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - school - PORTUGAL', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school - PORTUGAL', 'success') 
        : color.log(`DELETE - school - PORTUGAL has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('POST import students - BRASIL import', function() {
    allureReporter.addFeature('API automation - Import students')
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
        color.log('POST - import students - BRASIL', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - import students - BRASIL', 'success') 
        : color.log(`POST - import students - BRASIL has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  var schoolBRA = ''
  it('GET school- BRASIL import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgBRA
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
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            color.log('API Elementary is found - BRASIL', 'success')
            expect(element.name).to.eql('API Elementary')
          } 
          if(element.name === 'API Elementary' && element.periodName === "20/21") {
            var data = element
            schoolBRA = data
          }
          orgNumber++;
        })
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.data.message).to.be.undefined
      })
      .finally(function () {
        // always executed
      });
    })  
    schoolBRA;
  })

  it('DELETE School - BRASIL import', function() {
    allureReporter.addFeature('API automation - Import students')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = config.orgBRA
    const school = schoolBRA.id
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - school - BRASIL', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - school - BRASIL', 'success') 
        : color.log(`DELETE - school - BRASIL has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

});
