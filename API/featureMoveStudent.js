 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
 
  const assert = require('assert');
  const config = require('../config/mainConfig.js');
  const token = require('./token.json')
  const color = require('../utilis/consoleColor.js')
  
  describe('API automation - feature move student ->', function() {
     it('Move student to other school', function() {
      allureReporter.addFeature('API automation - Feature move student')
      allureReporter.addSeverity('Blocker')
      let access_token = token.access_token
      let org = config.orgForAll
      let schoolStart = config.moveSchool;
      let classStart = config.moveClass
      let student = config.moveStudent
      let schoolMove = config.schoolID
      let classMove = config.classID
      browser.call(() => {
        return Axios.put(`${config.originUrl}/subjects/89014156-c10b-4d4d-8f9c-cc6eac1f570c/class/1cc7a3ea-1d0f-482b-b991-285494d58a6e/pupil/e6ab0b26-3233-4d79-8d10-4c8c0e5e6595/receivingschool/e7d8adfb-7cd3-40a3-814e-563361996c83/receivingclass/5338f826-89b9-472b-86fe-f440906812fc/grade/2`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`
        }
        }).then(response => { 
          expect(response.status).to.eql(401)
          color.log('EDIT - move student', 'success')
        })
        .catch(error => {
          (typeof error.response.status != "undefined" && error.response.status === 401) 
           ? color.log('EDIT - move student', 'success') 
           : color.log(`EDIT - move student has error with response ${error}`, 'error')
          expect(JSON.stringify(error)).to.include(401)
        }); 
      }) 
    })

  });
  