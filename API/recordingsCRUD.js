 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
 
const config = require('../config/mainConfig.js');
const token = require('./token.json')
const color = require('../utilis/consoleColor.js')

describe('API automation - recordings CRUD ->', function() {
  it('EDIT - Hide recording RAN', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - hide recording', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - hide recording', 'success') 
        : color.log(`EDIT - hide recording has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
    
  })

  it('EDIT - Hide recording and comment back to seen RAN', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - unhide recording', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - unhide recording', 'success') 
        : color.log(`EDIT - unhide recording has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('EDIT - Comment as empty string RAN', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - comment - empty string', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - comment - empty string', 'success') 
        : color.log(`EDIT - comment - empty string has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('EDIT - Hide recording and comment TEXT 1', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - hide TEXT 1', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - hide TEXT 1', 'success') 
        : color.log(`EDIT - hide TEXT 1 has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('EDIT - UnHide recording and comment TEXT 1', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - unhide TEXT 1', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - unhide TEXT 1', 'success') 
        : color.log(`EDIT - unhide TEXT 1 has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('Hide recording and comment TEXT 2', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - hide TEXT 2', 'success')
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - hide TEXT 2 ', 'success') 
        : color.log(`EDIT - hide TEXT 2 has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('Hide recording and comment TEXT 2', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - hide TEXT 2 and commented', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - hide TEXT 2 and commented', 'success') 
        : color.log(`EDIT - hide TEXT 2 has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('EDIT - Comment session', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('EDIT - comment session', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('EDIT - comment session', 'success') 
        : color.log(`EDIT - comment session has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  it('EDIT - Comment session - enter only space comment', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
    allureReporter.addSeverity('Normal')
    const access_token = token.access_token
    const org = config.orgForAll
    const classid = config.moveClass2020
    const record = config.record3
    const session = config.screening
    browser.call(() => {
      return Axios.put(`${config.originUrl}/screenings/${org}/class/${classid}/session/${session}`,
      {
        comments: "                   ",
        publicComments: "Comment006",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
      }
      }).then(response => { 
        expect(response.status).to.eql(400)
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 400) 
        ? color.log('EDIT - comment session - only space', 'success') 
        : color.log(`EDIT - comment session - only space has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(400)
      });
    })
  })

  it('DELETE - Comment session', function() {
    allureReporter.addFeature('API automation - Recording CRUD')
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
        expect(response.status).to.eql(200)
        color.log('DELETE - comment session', 'success') 
      })
      .catch(error => {
        (typeof error.response.status != "undefined" && error.response.status === 200) 
        ? color.log('DELETE - comment session', 'success') 
        : color.log(`DELETE - comment session has error with response ${error}`, 'error')
        expect(error.response.status).to.eql(200)
      });
    })
  })

  // it('EDIT - Publish recording', function() {
  //   allureReporter.addFeature('API automation - Recording CRUD')
  //   allureReporter.addSeverity('Blocker')
  //   const access_token = token.access_token
  //   const org = config.orgForAll
  //   browser.call(() => {
  //     return Axios.put(`${config.originUrl}/screenings/${org}/complete?force=true`,
  //     [
  //       "26ff3e3b-c483-4a11-84be-27976ad05bef"
  //     ],
  //     {
  //       headers: {
  //         Authorization: `Bearer ${access_token}`
  //     }
  //     }).then(response => { 
  //       expect(response.status).to.eql(200)
  //       color.log('EDIT - publish recording', 'success') 
  //     })
  //     .catch(error => {
  //       (typeof error.response.status != "undefined" && error.response.status === 200) 
  //       ? color.log('EDIT - publish recording', 'success') 
  //       : color.log(`EDIT - publish recording has error with response ${error}`, 'error')
  //       expect(error.response.status).to.eql(200)
  //     });
  //   })
  // })

  // it('End test recording', function() {
  //   allureReporter.addFeature('API automation - Recording CRUD')
  //   allureReporter.addSeverity('Blocker')
  //   const access_token = token.access_token
  //   const org = config.orgForAll
  //   browser.call(() => {
  //     return Axios.put(`${config.originUrl}/screenings/${org}/publish`,
  //     [
  //       "26ff3e3b-c483-4a11-84be-27976ad05bef"
  //     ],
  //     {
  //       headers: {
  //         Authorization: `Bearer ${access_token}`
  //     }
  //     }).then(response => { 
  //       expect(response.status).to.eql(200)
  //       color.log('EDIT - end test - recording', 'success') 
  //     })
  //     .catch(error => {
  //       (typeof error.response.status != "undefined" && error.response.status === 200) 
  //       ? color.log('EDIT - end test - recording', 'success') 
  //       : color.log(`EDIT - end test - recording has error with response ${error}`, 'error')
  //       expect(error.response.status).to.eql(200)
  //     });
  //   })
  // })
});
