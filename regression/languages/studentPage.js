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
    expect(result).to.eql('ÄNDRA RESULTAT')
  })

  it('check reading ability - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Läsförmåga:')
  })

  it('check reading co. - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Läsförståelse:')
  })

  it('check mean speed. - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Medelvärde:')
  })

  it('check aloud reading - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('Högläsning:')
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
  //   expect(result).to.eql('Snabb benämning')
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
    expect(result).to.eql('Fråga 1:')
  })

  it('check question 2 - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Fråga 2:')
  })

  it('check question 3 - Svenska', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Fråga 3:')
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
    expect(result).to.eql('Leseforståelse:')
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
    expect(result).to.eql('Høyt:')
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
    expect(result).to.eql('Spørsmål 1:')
  })

  it('check question 2 - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Spørsmål 2:')
  })

  it('check question 3 - Norsk', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Spørsmål 3:')
  })

  it('change language to Português', function() {
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
    organisationPage.selectLanguage('Português')
    allureReporter.endStep()
  });

  it('check edit student - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('EDITAR ALUNO')
  })

  it('check move student - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('MOVER ESTUDANTE')
  })

  it('check remove student - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('REMOVER ALUNO')
  })

  it('check add comment - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('ADICIONAR COMENTÁRIO')
  })

  it('check delete result - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('APAGAR RESULTADO')
  })

  it('check move result - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('MOVER RESULTADO')
  })

  it('check edit result - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('EDITAR RESULTADO')
  })

  it('check reading ability - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Capacidade de leitura:')
  })

  it('check reading co. - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Compreensão de leitura:')
  })

  it('check mean speed. - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Média:')
  })

  it('check aloud reading - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('Em voz alta:')
  })
   
  it('check silent reading - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('Em silêncio:')
  })

  // it('check rapid naming - Português', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('Nomeação rápida')
  // })
  
  it('check precentile - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Estado')
  })

  it('check question 1 - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Pergunta 1:')
  })

  it('check question 2 - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Pergunta 2:')
  })

  it('check question 3 - Português', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Pergunta 3:')
  })

  it('change language to Français', function() {
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
    organisationPage.selectLanguage('Français')
    allureReporter.endStep()
  });

  it('check edit student - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editStudentButton.getText()
    expect(result).to.eql('MODIFIER ÉLÈVE')
  })

  it('check move student - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.moveButton.getText()
    expect(result).to.eql('DÉPLACER ÉLÈVE')
  })

  it('check remove student - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.removeStudentButton.getText()
    expect(result).to.eql('SUPPRIMER ÉLÈVE')
  })

  it('check add comment - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.addCommentButton.getText()
    expect(result).to.eql('AJOUTER UN COMMENTAIRE')
  })

  it('check delete result - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.deleteResultButton.getText()
    expect(result).to.eql('SUPPRIMER RÉSULTAT')
  })

  it('check move result - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = singleStudentPage.moveResultToOtherStudentButton.getText()
    expect(result).to.eql('DÉPLACER RÉSULTAT')
  })

  it('check edit result - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.editResultButton.getText()
    expect(result).to.eql('MODIFIER LE RÉSULTAT')
  })

  it('check reading ability - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingAbility.getText()
    expect(result).to.eql('Aptitude à la lecture:')
  })

  it('check reading co. - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.readingCo.getText()
    expect(result).to.eql('Compréhension de lecture:')
  })

  it('check mean speed. - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.mean.getText()
    expect(result).to.eql('Moyenne:')
  })

  it('check aloud reading - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.aloud.getText()
    expect(result).to.eql('À haute voix:')
  })
   
  it('check silent reading - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.silently.getText()
    expect(result).to.eql('En silence:')
  })

  // it('check rapid naming - Français', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Normal')
  //   let result = studentPage.rapidNaming.getText()
  //   expect(result).to.eql('Dénomination rapide')
  // })
  
  it('check precentile - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.precentile.getText()
    expect(result).to.eql('Statut')
  })

  it('check question 1 - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question1.getText()
    expect(result).to.eql('Question 1:')
  })

  it('check question 2 - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question2.getText()
    expect(result).to.eql('Question 2:')
  })

  it('check question 3 - Français', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    let result = studentPage.question3.getText()
    expect(result).to.eql('Question 3:')
  })
 });