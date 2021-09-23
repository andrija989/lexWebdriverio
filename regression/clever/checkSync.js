 /* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';

const assert = require('assert');
const config = require('../../config/mainConfig.js');
const color = require('../../utilis/consoleColor.js')
const token = require('../../API/token.json')
 
describe('Clever testing ->', function() {
  let studentList = []
  let portalSchools = []
  let portalStudentsList = []
  const access_token = token.access_token
    
  it('GET students from clever', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Blocker')
    browser.call(() => {
      return Axios.get(`${config.cleverAPI}`,
      {
        headers: {
          Authorization: `Bearer ${config.cleverToken}`
        }
      }).then(function (response) {
        response.data.data.forEach(student => {
          studentList.push(student.data)
        });        
      })
      .catch(function (error) {
      //  color.log(error, 'error');
      //  expect(error.response.data.message).to.be.undefined
      })
    })  
    studentList;
  })

   it('GET schools ids from portal', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Blocker')
    browser.call(() => {
      return Axios.get(`${config.originUrl}/results/organizations/${config.cleverOrg}/schools`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        response.data.forEach(school => {
          if(portalSchools.includes(school.id) === false) {
            portalSchools.push(school.id)
          }
        })
      })
      .catch(function (error) {
        })
      }) 
      portalSchools 
  });

  it('GET students from portal', function() {
  allureReporter.addFeature('Clever - sync')
  allureReporter.addSeverity('Blocker')
  portalSchools.forEach(school => {
    browser.call(() => {
      return Axios.get(`${config.originUrl}/results/organization/${config.cleverOrg}/school/${school}/period/${config.cleverPeriod}/grade/all`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(function (response) {
        response.data.subjectsData.forEach(student => {
          portalStudentsList.push(student)
        });        
      })
      .catch(function (error) {
        })
      })  
      portalStudentsList
    })
  });
  

  it('Number of students should be above 90%', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Blocker')
    expect(studentList.length/portalStudentsList.length).to.be.above(0.9)
  })

  it('Check students first names', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Blocker')
    let firstNames = []
    let numberOfSync = 0
 
    studentList.forEach(cleverStudent => {
      firstNames.push(cleverStudent.name.first)
    });

    portalStudentsList.forEach(portalStudent => {
      if(firstNames.includes(portalStudent.firstName)) {
        numberOfSync++
      }
    });
    expect(numberOfSync/firstNames.length).to.be.above(0.9)
  })

  it('Check students last names', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Blocker')
    let lastNames = []
    let numberOfSync = 0

    studentList.forEach(cleverStudent => {
      lastNames.push(cleverStudent.name.last)
    });

    portalStudentsList.forEach(portalStudent => {
      if(lastNames.includes(portalStudent.lastName)) {
        numberOfSync++
      }
    });
    expect(numberOfSync/lastNames.length).to.be.above(0.9)
  })

});
  