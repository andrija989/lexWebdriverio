 /* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';
 
const assert = require('assert');
const config = require('../../config/mainConfig.js');
const token = require('../token.json')
const color = require('../../utilis/consoleColor.js')

describe('API automation - email filter ->', function() {
  it('GET - filter student by email', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/subjects/find?email`,
      {
        EmailAddressList: ["andrija.23@k.com"]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        response.data.forEach(element => {
         if(element.results) {
          color.log('Results found', 'success')
         }
        })
        expect(response.status).to.eql(200)
        color.log('GET - student by email', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
         ? color.log('GET - student by email', 'success') 
         : color.log(`GET - student by email has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(200)
      }); 
    }) 
  })

  it('GET - email doesnt exists', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/subjects/find?email`,
      {
        EmailAddressList: ["andrija12333.23@k.com"]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        response.data.forEach(element => {
         if(element.results) {
          color.log('Results found', 'success')
         }
        })
        expect(response.status).to.eql(404)
        color.log('GET - student by email - email not i DB', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 404) 
         ? color.log('GET - student by email - email not i DB', 'success') 
         : color.log(`GET - student by email - email not i DB has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(404)
      }); 
    }) 
  })

  it('GET - email doesnt have permission for that student', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/subjects/find?email`,
      {
        EmailAddressList: ["testemail@g.com"]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        response.data.forEach(element => {
         if(element.results) {
          color.log('Results found', 'success')
         }
        })
        expect(response.status).to.eql(404)
        color.log('GET - email doesnt have permission for that student', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 404) 
         ? color.log('GET - email doesnt have permission for that student', 'success') 
         : color.log(`email doesnt have permission for that student has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(404)
      }); 
    }) 
  })

  it('GET - chain emails', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/subjects/find?email`,
      {
        EmailAddressList: [`${config.email1}`,`${config.email2}`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        let counter = 0
        response.data.forEach(element => {
         if(element.email == config.email1) {
          color.log('First email found', 'success')
         } else if (element.email == config.email2) {
          color.log('Second email found', 'success')
         }
         counter++
        })
        console.log(counter)
        console.log(response)
        expect(counter).to.eql(4)
        expect(response.status).to.eql(200)
        color.log('GET - student by email - chain emails', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
         ? color.log('GET - student by email - chain email', 'success') 
         : color.log(`GET - student by email - chain email has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(200)
      }); 
    }) 
  })

  it('GET - filter email - expect json data order', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/subjects/find?email`,
      {
        EmailAddressList: [`${config.email1}`,`${config.email2}`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        let counter = 0
        response.data.forEach(element => {
         expect(element).to.have.property('organizationName')
         expect(element).to.have.property('email')
         expect(element).to.have.property('results')
        })
        expect(response.status).to.eql(200)
        color.log('GET - filter email  - - expect json data order', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
         ? color.log('GET - filter email - expect json data order', 'success') 
         : color.log(`GET - filter email  - expect json data order has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(200)
      }); 
    }) 
  })

  it('GET - filter email with org', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/organizations/${config.organisationStimulisUSA}/subjects/find?email`,
      {
        EmailAddressList: [`${config.email1}`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        response.data.forEach(element => {
          expect(element.email).to.eql(config.email1)
         })
        expect(response.status).to.eql(200)
        color.log('GET - filter email with org', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
         ? color.log('GET - filter email with org', 'success') 
         : color.log(`GET - filter email with org has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(200)
      }); 
    }) 
  })

  it('GET - filter email with org - fake email', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/organizations/${config.organisationStimulisUSA}/subjects/find?email`,
      {
        EmailAddressList: [`zile@gg.com`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(404)
        color.log('GET - filter email with org - fake email', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 404) 
         ? color.log('GET - filter email with org - fake email', 'success') 
         : color.log(`GET - filter email with org - fake email has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(404)
      }); 
    }) 
  })

  it('GET - filter email with org - email doesnt have permission for that student', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/organizations/${config.organisationStimulisUSA}/subjects/find?email`,
      {
        EmailAddressList: [`testemail@g.com`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(404)
        color.log('GET - filter email with org - email doesnt have permission for that student', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 404) 
         ? color.log('GET - filter email with org - email doesnt have permission for that student', 'success') 
         : color.log(`GET - filter email with org - email doesnt have permission for that student has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(404)
      }); 
    }) 
  })

  it('GET - filter email with org - chain email', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/organizations/${config.organisationStimulisUSA}/subjects/find?email`,
      {
        EmailAddressList: [`${config.email1}`, `${config.email2}`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        let counter = 0
        response.data.forEach(element => {
         if(element.email == config.email1) {
          color.log('First email found', 'success')
         } else if (element.email == config.email2) {
          color.log('Second email found', 'success')
         }
         counter++
        })
        expect(response.status).to.eql(200)
        color.log('GET - filter email with org - chain email', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
         ? color.log('GET - filter email with org - chain email', 'success') 
         : color.log(`GET - filter email with org - chain email has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(200)
      }); 
    }) 
  })

  it('GET - filter email with org - expect json data order', function() {
    allureReporter.addFeature('API automation - email filter')
    allureReporter.addSeverity('Normal')
    let access_token = token.access_token
    browser.call(() => {
      return Axios.post(`${config.originUrl}/results/organizations/${config.organisationStimulisUSA}/subjects/find?email`,
      {
        EmailAddressList: [`${config.email1}`, `${config.email2}`]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        let counter = 0
        response.data.forEach(element => {
         expect(element).to.have.property('organizationName')
         expect(element).to.have.property('email')
         expect(element).to.have.property('results')
        })
        expect(response.status).to.eql(200)
        color.log('GET - filter email with org - - expect json data order', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
         ? color.log('GET - filter email with org - - expect json data order', 'success') 
         : color.log(`GET - filter email with org - - expect json data order has error with response ${error}`, 'error')
         expect(error.response.status).to.eql(200)
      }); 
    }) 
  })
});
  