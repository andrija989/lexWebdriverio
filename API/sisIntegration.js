/* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';
 
const assert = require('assert');
const config = require('../config/mainConfig.js');
const generators = require('../utilis/generators.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')

describe('SIS organisation crud ->', function() {
  const orgForAll = config.sisOrg
  const classID = config.sisClass

  it('POST student - SIS organisation', function() {
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
        color.log('POST - student can`t be added in SIS integration org', 'success') 
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - student can`t be added in SIS integration org', 'success') 
        : color.log(`POST - student can't be added in SIS integration org has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

 
  let allStudents = ''
  let crudStudent = ''
  it('GET all students from SIS class', function() {
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
    allStudents.forEach(element => {
      if(element.lastName == 'Svensson') {
        crudStudent = element
      }
    });
    crudStudent
  })

  it('EDIT student from SIS org', function() {
    allureReporter.addFeature('API automation - Student')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    const classs = classID
    const student = allStudents[0]
    browser.call(() => {
      return Axios.put(`${config.originUrl}/subjects/${org}/class/${classs}/subject/${student.id}`, 
      {
        birthDate: "2015-01-01T00:00:00.000Z",
        email: "mika@hakinen.com",
        firstName: "",
        gender: "F",
        grade: 1,
        id: student.id,
        identity: student.identity,
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
        ? color.log('POST - student - from SIS org', 'success') 
        : color.log(`POST - student - from SIS org has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

 
  it('DELETE student - from SIS org', function() {
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
        console.log(response)
        color.log('DELETE - from SIS org', 'success') 
        expect(response.status).to.eql(400)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('DELETE - from SIS org', 'success') 
        : color.log(`DELETE - from SIS org error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })
});
  