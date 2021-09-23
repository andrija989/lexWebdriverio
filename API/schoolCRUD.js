 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
 
const assert = require('assert');
const config = require('../config/mainConfig.js');
const generators = require('../utilis/generators.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')

describe('API automation - School CRUD ->', function() {

  const orgForAll = config.orgForAll
  it('POST school - empty string', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`${config.originUrl}/schools/${org}`, 
      {
        groupCode: "",
        groupName: "",
        name: "",
        schoolCode: "",
        shortName: "",
        type: 0
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
        ? color.log('POST - school - empty string', 'success') 
        : color.log(`POST - school - empty string has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('POST school - name that is already in DB', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`${config.originUrl}/schools/${org}`, 
      {
        groupCode: "",
        groupName: "",
        name: "Move school",
        schoolCode: "",
        shortName: "",
        type: 0
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
        ? color.log('POST - school - already in DB', 'success') 
        : color.log(`POST - school - already in DB has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('POST school - space string', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`${config.originUrl}/schools/${org}`, 
      {
        groupCode: "",
        groupName: "",
        name: "   ",
        schoolCode: "",
        shortName: "",
        type: 0
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
        ? color.log('POST - school - space string', 'success') 
        : color.log(`POST - school - space string has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  var schoolID = ''
  it('POST school', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`${config.originUrl}/schools/${org}`, 
      {
        groupCode: "",
        groupName: "",
        name: "APi school",
        schoolCode: "",
        shortName: "",
        type: 0
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - school', 'success')
        var data = response.data
        expect(response.status).to.eql(201)
        schoolID = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('POST - school', 'success') 
        : color.log(`POST - school has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })
    schoolID;  
  })

  it('EDIT school name - to empty string', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Normal')
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
        id: school.id,
        latestScreeningDate: null,
        name: "",
        organizationId: org,
        periodId: "a9450a08-91de-4f0b-bb62-e49c5e0800e8",
        participation: 0,
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: school.shortName
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
        ? color.log('EDIT - school name - empty string', 'success') 
        : color.log(`EDIT - school name - empty string has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT school name - to space string', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Normal')
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
        id: school.id,
        latestScreeningDate: null,
        name: "   ",
        organizationId: org,
        participation: 0,
        periodId: "a9450a08-91de-4f0b-bb62-e49c5e0800e8",
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: school.shortName
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
        ? color.log('EDIT - school name - space string', 'success') 
        : color.log(`EDIT - school name - space string has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })
  
  it('EDIT school name', function() {
    allureReporter.addFeature('API automation - School')
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
        id: school.id,
        latestScreeningDate: null,
        name: "Apichange",
        organizationId: org,
        participation: 0,
        periodId: "a9450a08-91de-4f0b-bb62-e49c5e0800e8",
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: school.shortName
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - school name', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - school name', 'success') 
        : color.log(`EDIT - school name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('EDIT school name - revert to old one', function() {
    allureReporter.addFeature('API automation - School')
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
        id: school.id,
        latestScreeningDate: null,
        name: "APi school",
        organizationId: org,
        periodId: "a9450a08-91de-4f0b-bb62-e49c5e0800e8",
        participation: 0,
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: school.shortName
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - school name - revert to old name', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - school name - revert to old name', 'success') 
        : color.log(`EDIT - school name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('EDIT school name - to a name that already exists in DB', function() {
    allureReporter.addFeature('API automation - School')
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
        id: school.id,
        latestScreeningDate: null,
        name: "Move school",
        organizationId: org,
        periodId: "a9450a08-91de-4f0b-bb62-e49c5e0800e8",
        participation: 0,
        periodName: "20/21",
        pupils: 0,
        resultGroups: [],
        screeningRequestId: null,
        screeningRequestName: null,
        screeningRequestStatus: null,
        shortName: school.shortName
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - school name - revert to old name', 'success') 
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - school name - already in DB', 'success') 
        : color.log(`EDIT - school name  - already in DB has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('DELETE School', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = schoolID
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/schools/${org}/school/${school.id}`, 
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
        : color.log(`DELETE - school has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })
});
