 /* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';

const assert = require('assert');
const config = require('../config/mainConfig.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')

describe('API automation - Class CRUD ->', function() {
  var schoolID = config.schoolID
  var orgForAll = config.orgForAll
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

  it('POST class - empty name', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/classes/${org}/school/${school}/periods/${classPeriod}/classes`, 
      {
        name: "",
        shortName: "",
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
        ? color.log('POST - class - empty name', 'success') 
        : color.log(`POST - class has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST class - space string name', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID
    const classPeriod = schoolAllData.periodId
    browser.call(() => {
      return Axios.post(`${config.originUrl}/classes/${org}/school/${school}/periods/${classPeriod}/classes`, 
      {
        name: "  ",
        shortName: "",
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
      ? color.log('POST - class - space string name', 'success') 
      : color.log(`POST - class has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  var classID = ''
  it('POST class', function() {
    allureReporter.addFeature('API automation - Class')
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
        color.log('Class Created', 'success')
        var data = response.data.id
        expect(response.status).to.eql(201)
        classID = data
      })
      .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 201) 
      ? color.log('POST - class - empty name', 'success') 
      : color.log(`POST - class has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })
    classID;  
  })

  it('EDIT class name', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID;
    const classs = classID
    const period = schoolAllData.periodId
    browser.call(() => {
      return Axios.put(`${config.originUrl}/classes/${org}/school/${school}/classes/${classs}`, 
      {
        canAccess: true,
        canPublish: false,
        grade: null,
        gradeParticipationAggregates: [],
        id: classs,
        latestScreeningDate: null,
        name: "APIclass1",
        organizationId: org,
        pupils: 0,
        resultGroups: [],
        schoolId: school,
        schoolName: "APIschool",
        shortName: "APss",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - class - empty name', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 200) 
      ? color.log('EDIT - class - empty name', 'success') 
      : color.log(`EDIT - class has error with response ${error}`, 'error')
        expect(response.status).to.eql(200)
      })
    })  
  })

  it('EDIT class name - revert old name', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID;
    const classs = classID
    const period = schoolAllData.periodId
    browser.call(() => {
      return Axios.put(`${config.originUrl}/classes/${org}/school/${school}/classes/${classs}`, 
      {
        canAccess: true,
        canPublish: false,
        grade: null,
        gradeParticipationAggregates: [],
        id: classs,
        latestScreeningDate: null,
        name: "APIclass",
        organizationId: org,
        pupils: 0,
        resultGroups: [],
        schoolId: school,
        schoolName: "APIschool",
        shortName: "APss",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - class - revert old name', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 200) 
      ? color.log('EDIT - class - revert old name', 'success') 
      : color.log(`EDIT - class has error with response ${error}`, 'error')
        expect(response.status).to.eql(200)
      })
    })  
  })

  it('EDIT class name - empty string', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID;
    const classs = classID
    const period = schoolAllData.periodId
    browser.call(() => {
      return Axios.put(`${config.originUrl}/classes/${org}/school/${school}/classes/${classs}`, 
      {
        canAccess: true,
        canPublish: false,
        grade: null,
        gradeParticipationAggregates: [],
        id: classs,
        latestScreeningDate: null,
        name: "",
        organizationId: org,
        pupils: 0,
        resultGroups: [],
        schoolId: school,
        schoolName: "APIschool",
        shortName: "APss",
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
      ? color.log('EDIT - class - empty name', 'success') 
      : color.log(`EDIT - class has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT class name - starting with space', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID;
    const classs = classID
    const period = schoolAllData.periodId
    browser.call(() => {
      return Axios.put(`${config.originUrl}/classes/${org}/school/${school}/classes/${classs}`, 
      {
        canAccess: true,
        canPublish: false,
        grade: null,
        gradeParticipationAggregates: [],
        id: classs,
        latestScreeningDate: null,
        name: "  ",
        organizationId: org,
        pupils: 0,
        resultGroups: [],
        schoolId: school,
        schoolName: "APIschool",
        shortName: "APss",
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
      ? color.log('EDIT - class - starting with space', 'success') 
      : color.log(`EDIT - class has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST class - with name that is already in DB', function() {
    allureReporter.addFeature('API automation - Class')
    allureReporter.addSeverity('normal')
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
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 400) 
      ? color.log('POST - class - already in the DB', 'success') 
      : color.log(`POST - class has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('DELETE class', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/classes/${org}/classes/${classs}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - class', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - class', 'success') 
        : color.log(`DELETE - class has error with response ${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
  })

});
  