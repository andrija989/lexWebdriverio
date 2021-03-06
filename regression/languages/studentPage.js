 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const generators = require('../../utilis/generators.js');
 const navbar = require('../../pageObjects/leftNavbar.js');
 const studentPage = require('../../pageObjects/studentResultsPage.js');
 const homePage = require('../../pageObjects/homePage.js');
 const singleStudentPage = require('../../pageObjects/singleStudentPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const login = require('../../login/loginTest.js')
 
 describe('languages check - student page ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
   it('anonymize turn off', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
   });
 
   it('select organisation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('Vivify');
   });
 
   it('select school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Crossroads Elementary');
   });
 
   it('select grade', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
   });

   it('select student', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('Richardson, Lara');
  });

  it('check edit student - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('EDIT STUDENT')
  })

  it('check move student - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('MOVE STUDENT')
  })

  it('check remove student - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('REMOVE STUDENT')
  })

  it('check add comment - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('ADD COMMENT')
  })

  it('check delete result - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('DELETE RESULT')
  })

  it('check move result - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('MOVE RESULT')
  })

  it('check edit result - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('EDIT RESULT')
  })

  it('check reading ability - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Reading ability:')
  })

  it('check reading co. - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Reading comprehension:')
  })

  it('check mean speed. - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Mean:')
  })

  it('check aloud reading - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('Oral:')
  })
   
  it('check silent reading - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('Silent:')
  })

  // it('check rapid naming - English', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('Rapid naming')
  // })
  
  it('check precentile - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Status')
  })

  it('check question 1 - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Question 1:')
  })

  it('check question 2 - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Question 2:')
  })

  it('check question 3 - English', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Question 3:')
  })

  it('change language to Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('Open menu')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('language selector')
    organisationPage.changeLanguage()
    allureReporter.endStep()

    allureReporter.startStep('language select')
    organisationPage.selectLanguage('Svenska')
    allureReporter.endStep()
  });

  it('check edit student - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('REDIGERA ELEV')
  })

  it('check move student - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('FLYTTA ELEV')
  })

  it('check remove student - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('RADERA ELEV')
  })

  it('check add comment - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('SKAPA KOMMENTAR')
  })

  it('check delete result - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('RADERA RESULTAT')
  })

  it('check move result - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('FLYTTA RESULTAT')
  })

  it('check edit result - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('??NDRA RESULTAT')
  })

  it('check reading ability - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('L??sf??rm??ga:')
  })

  it('check reading co. - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('L??sf??rst??else:')
  })

  it('check mean speed. - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Medelv??rde:')
  })

  it('check aloud reading - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('H??gl??sning:')
  })
   
  it('check silent reading - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('Tyst:')
  })

  // it('check rapid naming - Svenska', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('Snabb ben??mning')
  // })
  
  it('check precentile - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Status')
  })

  it('check question 1 - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Fr??ga 1:')
  })

  it('check question 2 - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Fr??ga 2:')
  })

  it('check question 3 - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Fr??ga 3:')
  })

  it('change language to Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('Open menu')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('language selector')
    organisationPage.changeLanguage()
    allureReporter.endStep()

    allureReporter.startStep('language select')
    organisationPage.selectLanguage('Norsk')
    allureReporter.endStep()
  });

  it('check edit student - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('REDIGER ELEV')
  })

  it('check move student - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('FLYTT ELEV')
  })

  it('check remove student - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('FJERN ELEV')
  })

  it('check add comment - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('LEGG TIL KOMMENTAR')
  })

  it('check delete result - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('SLETT RESULTAT')
  })

  it('check move result - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('FLYTT RESULTAT')
  })

  it('check edit result - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('REDIGER RESULTAT')
  })

  it('check reading ability - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Leseferdighet:')
  })

  it('check reading co. - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Leseforst??else:')
  })

  it('check mean speed. - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Gjennomsnitt:')
  })

  it('check aloud reading - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('H??yt:')
  })
   
  it('check silent reading - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('Stille:')
  })

  // it('check rapid naming - Norsk', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('Hurtignavngiving')
  // })
  
  it('check precentile - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Status')
  })

  it('check question 1 - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Sp??rsm??l 1:')
  })

  it('check question 2 - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Sp??rsm??l 2:')
  })

  it('check question 3 - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Sp??rsm??l 3:')
  })

  it('change language to Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('Open menu')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('language selector')
    organisationPage.changeLanguage()
    allureReporter.endStep()

    allureReporter.startStep('language select')
    organisationPage.selectLanguage('Portugu??s')
    allureReporter.endStep()
  });

  it('check edit student - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('EDITAR ALUNO')
  })

  it('check move student - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('MOVER ESTUDANTE')
  })

  it('check remove student - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('REMOVER ALUNO')
  })

  it('check add comment - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('ADICIONAR COMENT??RIO')
  })

  it('check delete result - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('APAGAR RESULTADO')
  })

  it('check move result - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('MOVER RESULTADO')
  })

  it('check edit result - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('EDITAR RESULTADO')
  })

  it('check reading ability - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Capacidade de leitura:')
  })

  it('check reading co. - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Compreens??o de leitura:')
  })

  it('check mean speed. - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('M??dia:')
  })

  it('check aloud reading - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('Em voz alta:')
  })
   
  it('check silent reading - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('Em sil??ncio:')
  })

  // it('check rapid naming - Portugu??s', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('Nomea????o r??pida')
  // })
  
  it('check precentile - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Estado')
  })

  it('check question 1 - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Pergunta 1:')
  })

  it('check question 2 - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Pergunta 2:')
  })

  it('check question 3 - Portugu??s', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Pergunta 3:')
  })

  it('change language to Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('Open menu')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('language selector')
    organisationPage.changeLanguage()
    allureReporter.endStep()

    allureReporter.startStep('language select')
    organisationPage.selectLanguage('Fran??ais')
    allureReporter.endStep()
  });

  it('check edit student - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('MODIFIER ??L??VE')
  })

  it('check move student - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('D??PLACER ??L??VE')
  })

  it('check remove student - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('SUPPRIMER ??L??VE')
  })

  it('check add comment - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('AJOUTER UN COMMENTAIRE')
  })

  it('check delete result - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('SUPPRIMER R??SULTAT')
  })

  it('check move result - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('D??PLACER R??SULTAT')
  })

  it('check edit result - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('MODIFIER LE R??SULTAT')
  })

  it('check reading ability - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Aptitude ?? la lecture:')
  })

  it('check reading co. - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Compr??hension de lecture:')
  })

  it('check mean speed. - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Moyenne:')
  })

  it('check aloud reading - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('?? haute voix:')
  })
   
  it('check silent reading - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('En silence:')
  })

  // it('check rapid naming - Fran??ais', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('D??nomination rapide')
  // })
  
  it('check precentile - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Statut')
  })

  it('check question 1 - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Question 1:')
  })

  it('check question 2 - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Question 2:')
  })

  it('check question 3 - Fran??ais', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Question 3:')
  })
 });