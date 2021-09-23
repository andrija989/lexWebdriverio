 /* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';
import { ConfigurationManager } from '@microsoft/applicationinsights-common';
import { userRole } from '../pageObjects/organisationPage.js';

const assert = require('assert');
const config = require('../config/mainConfig.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')

describe('API automation ->', function() {
  var orgForAll = config.orgForAll
  var user = ''
  it('POST user invite - without first name', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - without first name', 'success') 
        : color.log(`POST - user - without first name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - first name starting with space', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "  ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - first name only space', 'success') 
        : color.log(`POST - user - first name only space has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - without last name', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "API",
        idpEndpoint: null,
        idpType: "",
        lastName: "",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - without last name', 'success') 
        : color.log(`POST - user - without last name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  
  it('POST user invite - last name starting with space', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "API",
        idpEndpoint: null,
        idpType: "",
        lastName: " ",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - last name only space', 'success') 
        : color.log(`POST - user - last name only space has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - without email', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "",
        firstName: "API",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - without email', 'success') 
        : color.log(`POST - user - without email has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - wrong format email - no @', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "randomgmail.com",
        firstName: "API",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - email without @', 'success') 
        : color.log(`POST - user - email without @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - wrong format email - no .com', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail",
        firstName: "API",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - email without .com', 'success') 
        : color.log(`POST - user - email without .com has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - wrong format email - starting with space', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "@gmail",
        firstName: "API",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null}],
        0: {roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: null},
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
        ? color.log('POST - user - email only space infront of @', 'success') 
        : color.log(`POST - user - email only space infront of @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - without role', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{}],
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
        ? color.log('POST - user - without role', 'success') 
        : color.log(`POST - user - without role has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  
  it('POST user invite - with role that doesn`t exist', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-164hfj8ros61", schoolId: null, classId: null}],
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
        ? color.log('POST - user - without role that does`t exist', 'success') 
        : color.log(`POST - user - without role that doest exist has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('POST user invite - role with school that doesn`t exist', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: '124edsfg23324fds', classId: null}],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(500)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - user - with role and school that does`t exist', 'success') 
        : color.log(`POST - user -  with role and school that doest exist exist has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(500)
      })
    })  
  })

  it('POST user invite - role with class that doesn`t exist', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/invitations/${org}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{roleId: "04c1577b-fe5d-4cd3-8d9e-321ffc5ae7ae", schoolId: null, classId: '124edsfg23324fds'}],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(500)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 500) 
        ? color.log('POST - user - with role and class that does`t exist', 'success') 
        : color.log(`POST - user -  with role and class that doest exist exist has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(500)
      })
    })  
  })

  var user = ''
  it('POST user invite', function() {
    allureReporter.addFeature('API automation - User')
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
        var data = response.data
        expect(response.status).to.eql(201)
        user = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('POST - user invite', 'success') 
        : color.log(`POST - user invite has error with response: \n${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
    user;
  })

  it('EDIT user invite - without first name', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - empty name', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - empty name', 'success') 
        : color.log(`EDIT - user invite - empty name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT user invite -first name with space on start', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "   ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - first name only space', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - first name only space', 'success') 
        : color.log(`EDIT - user invite - first name only space has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('EDIT user invite - without last name', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - without last name', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - without last name', 'success') 
        : color.log(`EDIT - user invite - without last name has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('EDIT user invite - last name space on start', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "    ",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - last name space on start', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - last name space on start', 'success') 
        : color.log(`EDIT - user invite - last name space on start has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })
  })

  it('EDIT user invite - without email', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - without email', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - without email', 'success') 
        : color.log(`EDIT - user invite - without email has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('EDIT user invite - wrong email format - no @', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "apigmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - wrong email format - no @', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - wrong email format - no @', 'success') 
        : color.log(`EDIT - user invite - wrong email format - no @ has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('EDIT user invite - wrong email format - no .com', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - wrong email format - no .com', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - wrong email format - no .com', 'success') 
        : color.log(`EDIT - user invite - wrong email format - no .com has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('EDIT user invite - wrong email format - space on start', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "   @gmail",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            class: "class",
            classId: classid,
            id: userEdit.roles.id,
            periodId: "c03e92e2-4e5b-468d-b0dd-85ae7b6b126b",
            periodName: "19/20",
            roleId: roleId,
            roleName: "Teacher",
            school: "Api school - old",
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - wrong email format - space on start', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - wrong email format - space on start', 'success') 
        : color.log(`EDIT - user invite - wrong email format - space on start has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    }) 
  })

  it('EDIT user invite - without role', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const classid = config.classID
    const roleId = config.teacherRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{        
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(400)
        color.log('EDIT - user invite - without role', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - user invite - without role', 'success') 
        : color.log(`EDIT - user invite - without role has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(400)
      })
    })  
  })

  it('EDIT user invite - change role', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleId = config.orgOverviewRole
    const schoolid = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            roleId: roleId,
            schoolId: schoolid
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        color.log('EDIT - user invite - role changed to org overview', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - role changed to org overview', 'success') 
        : color.log(`EDIT - user invite - role changed to org overview has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('EDIT user invite - change role - supervisor', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleId = config.supervisorRole
    const schoolID = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            roleId: roleId,
            schoolId: schoolID,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        color.log('EDIT - user invite - role changed to supervisor', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - role changed to supervisor', 'success') 
        : color.log(`EDIT - user invite - role changed to supervisor has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('EDIT user invite - change role - principal;', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleId = config.principalRole
    const schoolID = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            roleId: roleId,
            schoolId: schoolID,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        color.log('EDIT - user invite - role changed to principal', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - role changed to principal', 'success') 
        : color.log(`EDIT - user invite - role changed to principal has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })
  it('EDIT user invite - change role - external examiner', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleId = config.externalExaminerRole
    const schoolID = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            roleId: roleId,
            schoolId: null,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        color.log('EDIT - user invite - role changed to external examiner', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - role changed to external examiner', 'success') 
        : color.log(`EDIT - user invite - role changed to external examiner has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })

  it('EDIT user invite - change role - examiner', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleId = config.examinerRole
    const schoolID = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            roleId: roleId,
            schoolId: null,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        color.log('EDIT - user invite - role changed to examiner', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - role changed to examiner', 'success') 
        : color.log(`EDIT - user invite - role changed to examiner has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
})

it('EDIT user invite - change role - examiner admin', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleId = config.examinerAdminRole
    const schoolID = config.schoolID
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "api@gmail.com",
        firstName: "Api",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            roleId: roleId,
            schoolId: null,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        expect(response.status).to.eql(200)
        color.log('EDIT - user invite - role changed to examiner admin', 'success')
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - role changed to examiner admin', 'success') 
        : color.log(`EDIT - user invite - role changed to examiner admin has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
})

it('EDIT user invite - change role - user admin', function() {
  allureReporter.addFeature('API automation - User')
  allureReporter.addSeverity('Blocker')
  const access_token = token.access_token
  const org = orgForAll
  const userEdit = user;
  const roleId = config.userAdminRole
  const schoolID = config.schoolID
  browser.call(() => {
    return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
    {
      email: "api@gmail.com",
      firstName: "Api",
      idpEndpoint: null,
      idpType: "",
      lastName: "User",
      phoneNumber: null,
      roles: [
        {
          classId: null,
          roleId: roleId,
          schoolId: null,
      }],
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(function (response) {
      expect(response.status).to.eql(200)
      color.log('EDIT - user invite - role changed to user admin', 'success')
    })
    .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 200) 
      ? color.log('EDIT - user invite - role changed to user admin', 'success') 
      : color.log(`EDIT - user invite - role changed to user admin has error with response: \n${error}`, 'error')
      expect(error.response.status).to.eql(200)
    })
  })  
})

it('EDIT user invite - change role - quality admin', function() {
  allureReporter.addFeature('API automation - User')
  allureReporter.addSeverity('Blocker')
  const access_token = token.access_token
  const org = orgForAll
  const userEdit = user;
  const roleId = config.qualityAdminRole
  const schoolID = config.schoolID
  browser.call(() => {
    return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
    {
      email: "api@gmail.com",
      firstName: "Api",
      idpEndpoint: null,
      idpType: "",
      lastName: "User",
      phoneNumber: null,
      roles: [
        {
          classId: null,
          roleId: roleId,
          schoolId: null,
      }],
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(function (response) {
      expect(response.status).to.eql(200)
      color.log('EDIT - user invite - role changed to quality admin', 'success')
    })
    .catch(function (error) {
      (typeof error.response.status != "undefined" && error.response.status === 200) 
      ? color.log('EDIT - user invite - role changed to quality admin', 'success') 
      : color.log(`EDIT - user invite - role changed to quality admin has error with response: \n${error}`, 'error')
      expect(error.response.status).to.eql(200)
    })
  })  
})

  it('EDIT user invite', function() {
    var createUser = user
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const role = config.qualityAdminRole
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [{
          roleId: role, 
          schoolId: null, classId: 
          null
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - user invite ', 'success') 
        var data = response.data
        expect(response.status).to.eql(200)
        user = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite ', 'success') 
        : color.log(`EDIT - user invite  has error with response: \n${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
    user;
  })

  it('EDIT user invite - add him more than 1 role', function() {
    var createUser = user
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleQA = config.qualityAdminRole
    const roleEx = config.examinerRole
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            id: userEdit.roles.id,
            roleId: roleQA,
            schoolId: null
          },
          { 
            classId: "",
            roleId: roleEx,
            schoolId: ""
          }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - user invite - add him more than 1 role', 'success') 
        var data = response.data
        expect(response.status).to.eql(200)
        user = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - add him more than 1 role', 'success') 
        : color.log(`EDIT - user invite - add him more than 1 role has error with response: \n${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
    user;
  })

  it('EDIT user invite - add 3 roles', function() {
    var createUser = user
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const roleQA = config.qualityAdminRole
    const roleEx = config.examinerRole
    const roleUserA = config.userAdminRole
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
          {
            classId: null,
            id: userEdit.roles.id,
            roleId: roleQA,
            schoolId: null
          },
          { 
            classId: "",
            roleId: roleEx,
            schoolId: ""
          },
        {
          classId: null,
          roleId: roleUserA,
          schoolId: null,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - user invite - add 3 roles', 'success') 
        var data = response.data
        expect(response.status).to.eql(200)
        user = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - add 3 roles', 'success') 
        : color.log(`EDIT - user invite - add 3 roles has error with response: \n${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
    user;
  })

  it('EDIT user invite - add 4 roles', function() {
    var createUser = user
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    const schoolID = config.schoolID
    const roleQA = config.qualityAdminRole
    const roleEx = config.examinerRole
    const roleUserA = config.userAdminRole
    const roleSupervisor = config.supervisorRole
    browser.call(() => {
      return Axios.put(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`, 
      {
        email: "random@gmail.com",
        firstName: "Api ",
        idpEndpoint: null,
        idpType: "",
        lastName: "User",
        phoneNumber: null,
        roles: [
        {
          classId: null,
          id: userEdit.roles.id,
          roleId: roleQA,
          schoolId: null
        },
        { 
          classId: "",
          roleId: roleEx,
          schoolId: ""
        },
        {
          classId: null,
          roleId: roleUserA,
          schoolId: null,
        }, 
        {
          classId: null,
          roleId: roleSupervisor,
          schoolId: schoolID,
        }],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('EDIT - user invite - add 4 roles', 'success') 
        var data = response.data
        expect(response.status).to.eql(200)
        user = data
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - user invite - add 4 roles', 'success')  
        : color.log(`EDIT - user invite - add 4 roles has error with response: \n${error}`, 'error')
        expect(error.response.data.message).to.be.undefined
      })
    })  
    user;
  })
  
  var registeredUser = ''
  it('POST register user from invite - no password', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const regUser = user
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/localaccounts/create/${user.token}`, 
      {
        id: user.token,
        password: "C",
        phoneNumber: ""
      }).then(function (response) {
        expect(response.status).to.eql(406)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 406) 
        ? color.log('POST - register user - without password', 'success') 
        : color.log(`POST - register user - without password has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(406)
      })
    })  
  })

  it('POST register user from invite - password without upperletter', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const regUser = user
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/localaccounts/create/${user.token}`, 
      {
        id: user.token,
        password: "gogogogogo1234",
        phoneNumber: ""
      }).then(function (response) {
        expect(response.status).to.eql(406)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 406) 
        ? color.log('POST - register user - password without upper letter', 'success') 
        : color.log(`POST - register user - password without upper letter has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(406)
      })
    })  
  })

  it('POST register user from invite - password without number', function() {
    allureReporter.addFeature('API automation - User')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const regUser = user
    browser.call(() => {
      return Axios.post(`https://sysdev.lexplore.com/localaccounts/create/${user.token}`, 
      {
        id: user.token,
        password: "gogogogogo",
        phoneNumber: ""
      }).then(function (response) {
        expect(response.status).to.eql(406)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 406) 
        ? color.log('POST - register user - password without number', 'success') 
        : color.log(`POST - register user - password without number has error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(406)
      })
    })  
  })

  it('DELETE invite', function() {
    allureReporter.addFeature('API automation - School')
    allureReporter.addSeverity('Blocker')
    const access_token = token.access_token
    const org = orgForAll
    const userEdit = user;
    browser.call(() => {
      return Axios.delete(`https://sysdev.lexplore.com/invitations/${org}/${userEdit.token}`,  
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        color.log('DELETE - user invite', 'success')
        expect(response.status).to.eql(200)
      })
      .catch(function (error) {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - user invite', 'success') 
        : color.log(`DELETE - student - 4 error with response: \n${error}`, 'error')
        expect(error.response.status).to.eql(200)
      })
    })  
  })
});
