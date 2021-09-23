/* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';
 
const assert = require('assert');
const config = require('../config/mainConfig.js');
const generators = require('../utilis/generators.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')

describe('API automation ->', function() {
  const orgForAll = config.orgForAll
  const classID = config.classID

  it('POST student - grade 1', function() {
    allureReporter.addFeature('API automation - Student')
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
        color.log('POST - student grade 1', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - student grade 1', 'success') 
        : color.log(`POST - student grade 1 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    }) 
  })

  it('POST student - grade 4', function() {
    allureReporter.addFeature('API automation - Student')
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
        color.log('POST - student grade 4', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - student grade 4', 'success') 
        : color.log(`POST - student grade 4 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST student - grade 6', function() {
    allureReporter.addFeature('API automation - Student')
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
        color.log('POST - student grade 6', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - student grade 6', 'success') 
        : color.log(`POST - student grade 6 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST student - grade 8', function() {
    allureReporter.addFeature('API automation - Student')
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
        color.log('POST - student grade 8', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - student grade 8', 'success') 
        : color.log(`POST - student grade 8 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST student - grade 9', function() {
    allureReporter.addFeature('API automation - Student')
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
        grade: 9,
        lastName: "Hakinen",
        socialId: `123ApiTest5`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - student grade 9', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - student grade 9', 'success') 
        : color.log(`POST - student grade 9 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST student - grade 12', function() {
    allureReporter.addFeature('API automation - Student')
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
        grade: 12,
        lastName: "Hakinen",
        socialId: `123ApiTest6`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('POST - student grade 12', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('POST - student grade 12', 'success') 
        : color.log(`POST - student grade 12 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('POST student - grade that is not in the list', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
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
        grade: 15,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        console.log(response)
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - student - grade that doesnt exist', 'success') 
        : color.log(`POST - student - grade that doesnt exist has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('POST student - empty grade', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
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
        grade: "",
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - empty grade', 'success') 
        : color.log(`POST - student - empty grade has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('POST student - with empty first name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "",
        gender: "F",
        grade: 8,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - empty first name', 'success') 
        : color.log(`POST - student - empty first name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - with space on start of first name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "  ",
        gender: "F",
        grade: 8,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - only space in first name', 'success') 
        : color.log(`POST - student - only space in first name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - empty last name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
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
        lastName: "",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - empty last name', 'success') 
        : color.log(`POST - student - empty last name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - space on start of last name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
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
        lastName: "  ",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - only space in last name', 'success') 
        : color.log(`POST - student - only space in last name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - send wrong gender', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "L",
        grade: 8,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - send wrong gender', 'success') 
        : color.log(`POST - student - send wrong gender has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - email without @', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mikahakinen.com",
        firstName: "Mika",
        gender: "L",
        grade: 8,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - email without @', 'success') 
        : color.log(`POST - student - email without @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - email without .com', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen",
        firstName: "Mika",
        gender: "L",
        grade: 8,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - email without .com', 'success') 
        : color.log(`POST - student - email without .com has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('POST student - email space on start', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    browser.call(() => {
      return Axios.post(`${config.originUrl}/screenings/prepare/${org}/class/${classid}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: " @hakinen.com",
        firstName: "Mika",
        gender: "L",
        grade: 8,
        lastName: "Hakinen",
        socialId: `${generators.randomStringFourDigits()}api${generators.randomStringFourDigits()}`,
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
        ? color.log('POST - student - email with only space infront of @', 'success') 
        : color.log(`POST - student - email with only space infront of @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  var allStudents = ''
  it('GET all students', function() {
    allureReporter.addFeature('API automation - Student')
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
        expect(response.status).to.eql(200)
        allStudents = data
      })
      .catch(function (error) {
        console.log(error);
        expect(error.response.status).to.eql(200)
      })
    })  
    allStudents;
  })

  it('EDIT student name - empty string', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('POST - student name - empty string', 'success') 
        : color.log(`POST - student name - empty string has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student name - space on start of name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "   ",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('POST - student name - only space', 'success') 
        : color.log(`POST - student name - only space has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student last name - empty string', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "",
        socialId: "123ApiTest1",
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
        ? color.log('POST - student last name - empty string', 'success') 
        : color.log(`POST - student last name - empty string has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student last name - space on start of name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "   ",
        socialId: "123ApiTest1",
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
        ? color.log('POST - student last name - only space', 'success') 
        : color.log(`POST - student last name - only space has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student email - without @', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mikahakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('POST - student last name - without @', 'success') 
        : color.log(`POST - student last name - without @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student email - without .com', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('EDIT - student email - without .com', 'success') 
        : color.log(`EDIT - student email - without .com has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student email - space infront of @', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('EDIT - student email - without @', 'success') 
        : color.log(`EDIT - student email - without @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student email - empty email', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student email - empty email', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student email - empty email', 'success') 
        : color.log(`EDIT - student email - empty email has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student gender - to random letter', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "",
        firstName: "Mika",
        gender: "U",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('EDIT - student - gender to random letter', 'success') 
        : color.log(`EDIT - student - gender to random letter has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student gender - empty gender', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "",
        firstName: "Mika",
        gender: "X",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - empty gender', 'success')
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - empty gender', 'success') 
        : color.log(`EDIT - student - empty gender has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student gender', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "",
        firstName: "Mika",
        gender: "M",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - gender', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - gender', 'success') 
        : color.log(`EDIT - student - gender has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student email', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mikaaaa@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - email', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - email', 'success') 
        : color.log(`EDIT - student - email has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mikaaaa",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - name', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - name', 'success') 
        : color.log(`EDIT - student - name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student last name', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 1,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinenn",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - last name', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - last name', 'success') 
        : color.log(`EDIT - student - last name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student grade - empty grade', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: '',
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('EDIT - student - empty grade', 'success') 
        : color.log(`EDIT - student - empty grade has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student grade - grade that do not exist', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: '15',
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
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
        ? color.log('EDIT - student - grade that is not in the list', 'success') 
        : color.log(`EDIT - student - grade that is not in the list has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT student grade - to grade 3', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 3,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - to grade 3', 'success')
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - to grade 3', 'success') 
        : color.log(`EDIT - student - to grade 3 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student grade - to grade 5', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 5,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - to grade 5', 'success') 
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - to grade 5', 'success') 
        : color.log(`EDIT - student - to grade 5 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT student grade - to grade 8', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[5].id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "Mika",
        gender: "F",
        grade: 8,
        id: students[5].id,
        identity: students[5].identity,
        lastName: "Hakinen",
        socialId: "123ApiTest1",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - to grade 8', 'success')
        expect(response.status).to.eql(201)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 201) 
        ? color.log('EDIT - student - to grade 8', 'success') 
        : color.log(`EDIT - student - to grade 8 has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(201)
      })
    })  
  })

  it('EDIT prepare-re-test', function() {
    allureReporter.addFeature('API automation - Prepare=re-test')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/prepare/${org}/subjects`, 
      [{
        classId: classid,
        grade: 8,
        prepare: false,
        semester: null,
        subjectId: students[0].id
      },
      {
        classId: classid,
        grade: 6,
        prepare: false,
        semester: null,
        subjectId: students[1].id
      },
      {
        classId: classid,
        grade: 4,
        prepare: false,
        semester: null,
        subjectId: students[2].id
      },
      {
        classId: classid,
        grade: 1,
        prepare: false,
        semester: null,
        subjectId: students[3].id
      }],
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - prepare re-test', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - student - prepare re-test', 'success') 
        : color.log(`EDIT - student - prepare re-test error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('EDIT prepare-re-test', function() {
    allureReporter.addFeature('API automation - Prepare=re-test')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classid = classID
    const students = allStudents
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/prepare/${org}/subjects`, 
      [{
        classId: classid,
        grade: 8,
        prepare: false,
        semester: null,
        subjectId: students[0].id
      },
      {
        classId: classid,
        grade: 6,
        prepare: false,
        semester: null,
        subjectId: students[1].id
      },
      {
        classId: classid,
        grade: 4,
        prepare: false,
        semester: null,
        subjectId: students[2].id
      },
      {
        classId: classid,
        grade: 1,
        prepare: false,
        semester: null,
        subjectId: students[3].id
      }],
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - student - prepare re-test to false', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - student - prepare re-test to false', 'success') 
        : color.log(`EDIT - student - prepare re-test to false error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })
  })

  it('DELETE student 1', function() {
    console.log('ovde')
    console.log(allStudents)
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/subjects/${org}/subject/${students[0].id}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - student - 1', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - student - 1', 'success') 
        : color.log(`DELETE - student - 1 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('DELETE student 2', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const school = config.schoolID
    const students = allStudents
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/subjects/${org}/school/${school}/subject/${students[1].id}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - student - 2', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - student - 2', 'success') 
        : color.log(`DELETE - student - 2 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('DELETE student 3', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${students[2].id}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - student - 3', 'success') 
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - student - 3', 'success') 
        : color.log(`DELETE - student - 3 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('DELETE student 4', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/subjects/${org}/subject/${students[3].id}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - student - 4', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - student - 4', 'success') 
        : color.log(`DELETE - student - 4 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('DELETE student 5', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/subjects/${org}/subject/${students[4].id}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - student - 5', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - student - 5', 'success') 
        : color.log(`DELETE - student - 5 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('DELETE student 6', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const students = allStudents
    browser.call(() => {
      return Axios.delete(`${config.originUrl}/subjects/${org}/subject/${students[5].id}`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - student - 6', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - student - 6', 'success') 
        : color.log(`DELETE - student - 6 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })
});
  