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
 
 describe('languages check - class page ->', function() {
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

  it('check edit class - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.editClassButton.getText()
    expect(result).to.eql('EDIT CLASS')
  })

  it('check remove class - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.removeClassButton.getText()
    expect(result).to.eql('REMOVE CLASS')
  })

  it('check latest test - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.latestTest.getText()
    expect(result).to.eql('Latest test')
  })

  it('check number of students - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfStudents.getText()
    expect(result).to.eql('Number of students')
  })

  it('check Number of participants - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfParticipants.getText()
    expect(result).to.eql('Number of participants')
  })

  it('check Participation (%) - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.participation.getText()
    expect(result).to.eql('Participation (%)')
  })

  it('check prepare-re-test - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.prepareReTestButton.getText()
    expect(result).to.eql('PREPARE RE-TEST')
  })

  it('check import students - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.importStudentsButton.getText()
    expect(result).to.eql('IMPORT STUDENTS')
  })

  it('check add student - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.addStudentButton.getText()
    expect(result).to.eql('ADD STUDENT')
  })

  it('check checkbox Name - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxName.getText()
    expect(result).to.eql('Name')
  })

  it('check checkbox birthday - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxBirthday.getText()
    expect(result).to.eql('Birth date')
  })

  it('check checkbox grade - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxGrade.getText()
    expect(result).to.eql('Grade')
  })

  it('check checkbox previous result - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxPreviousResult.getText()
    expect(result).to.eql('Previous results')
  })

  it('check checkbox reading co. - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxReadingCo.getText()
    expect(result).to.eql('Reading comprehension')
  })

  it('check checkbox test date - english', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxTestDate.getText()
    expect(result).to.eql('Test date')
  })

  it('change language to SWEDISH', function() {
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

  it('check edit class - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.editClassButton.getText()
    expect(result).to.eql('REDIGERA KLASS')
  })

  it('check remove class - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.removeClassButton.getText()
    expect(result).to.eql('RADERA KLASS')
  })

  it('check latest test - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.latestTest.getText()
    expect(result).to.eql('Senaste test')
  })

  it('check number of students - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfStudents.getText()
    expect(result).to.eql('Antal elever')
  })

  it('check Number of participants - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfParticipants.getText()
    expect(result).to.eql('Deltagande')
  })

  it('check Participation (%) - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.participation.getText()
    expect(result).to.eql('Deltagande (%)')
  })

  it('check prepare-re-test - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.prepareReTestButton.getText()
    expect(result).to.eql('SCREENA OM')
  })

  it('check import students - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.importStudentsButton.getText()
    expect(result).to.eql('IMPORTERA ELEVER')
  })

  it('check add student - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.addStudentButton.getText()
    expect(result).to.eql('LÄGG TILL ELEV')
  })

  it('check checkbox Name - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxName.getText()
    expect(result).to.eql('Namn')
  })

  it('check checkbox birthday - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxBirthday.getText()
    expect(result).to.eql('Födelsedatum')
  })

  it('check checkbox grade - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxGrade.getText()
    expect(result).to.eql('Årskurs')
  })

  it('check checkbox previous result - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxPreviousResult.getText()
    expect(result).to.eql('Föregående resultat')
  })

  it('check checkbox reading co. - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxReadingCo.getText()
    expect(result).to.eql('Läsförståelse')
  })

  it('check checkbox test date - Svenska', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxTestDate.getText()
    expect(result).to.eql('Testdatum')
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

  it('check edit class - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.editClassButton.getText()
    expect(result).to.eql('REDIGER KLASSE')
  })

  it('check remove class - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.removeClassButton.getText()
    expect(result).to.eql('FJERN KLASSE')
  })

  it('check latest test - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.latestTest.getText()
    expect(result).to.eql('Siste test')
  })

  it('check number of students - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfStudents.getText()
    expect(result).to.eql('Antall elever')
  })

  it('check Number of participants - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfParticipants.getText()
    expect(result).to.eql('Antall deltakere')
  })

  it('check Participation (%) - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.participation.getText()
    expect(result).to.eql('Deltakelse (%)')
  })

  it('check prepare-re-test - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.prepareReTestButton.getText()
    expect(result).to.eql('FORBERED EN NY TEST')
  })

  it('check import students - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.importStudentsButton.getText()
    expect(result).to.eql('IMPORTER ELEVER')
  })

  it('check add student - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.addStudentButton.getText()
    expect(result).to.eql('LEGG TIL ELEV')
  })

  it('check checkbox Name - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxName.getText()
    expect(result).to.eql('Navn')
  })

  it('check checkbox birthday - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxBirthday.getText()
    expect(result).to.eql('Fødselsdato')
  })

  it('check checkbox grade - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxGrade.getText()
    expect(result).to.eql('Årstrinn')
  })

  it('check checkbox previous result - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxPreviousResult.getText()
    expect(result).to.eql('Forrige resultat')
  })

  it('check checkbox reading co. - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxReadingCo.getText()
    expect(result).to.eql('Leseforståelse')
  })

  it('check checkbox test date - Norsk', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxTestDate.getText()
    expect(result).to.eql('Testdato')
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

  it('check edit class - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.editClassButton.getText()
    expect(result).to.eql('EDITAR TURMA')
  })

  it('check remove class - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.removeClassButton.getText()
    expect(result).to.eql('REMOVER TURMA')
  })

  it('check latest test - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.latestTest.getText()
    expect(result).to.eql('Último teste')
  })

  it('check number of students - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfStudents.getText()
    expect(result).to.eql('Número de alunos')
  })

  it('check Number of participants - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfParticipants.getText()
    expect(result).to.eql('Número de participantes')
  })

  it('check Participation (%) - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.participation.getText()
    expect(result).to.eql('Participação (%)')
  })

  it('check prepare-re-test - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.prepareReTestButton.getText()
    expect(result).to.eql('PREPARAR NOVO TESTE')
  })

  it('check import students - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.importStudentsButton.getText()
    expect(result).to.eql('IMPORTAR ALUNOS')
  })

  it('check add student - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.addStudentButton.getText()
    expect(result).to.eql('ADICIONAR ALUNO')
  })

  it('check checkbox Name - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxName.getText()
    expect(result).to.eql('Nome')
  })

  it('check checkbox birthday - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxBirthday.getText()
    expect(result).to.eql('Data de nascimento')
  })

  it('check checkbox grade - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxGrade.getText()
    expect(result).to.eql('Ano')
  })

  it('check checkbox previous result - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxPreviousResult.getText()
    expect(result).to.eql('Resultado anterior')
  })

  it('check checkbox reading co. - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxReadingCo.getText()
    expect(result).to.eql('Compreensão de leitura')
  })

  it('check checkbox test date - Português', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxTestDate.getText()
    expect(result).to.eql('Data do teste')
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

  it('check edit class - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.editClassButton.getText()
    expect(result).to.eql('MODIFIER CLASSE')
  })

  it('check remove class - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.removeClassButton.getText()
    expect(result).to.eql('SUPPRIMER CLASSE')
  })

  it('check latest test - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.latestTest.getText()
    expect(result).to.eql('Dernière évaluation')
  })

  it('check number of students - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfStudents.getText()
    expect(result).to.eql('Nombre d’élèves')
  })

  it('check Number of participants - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.numberOfParticipants.getText()
    expect(result).to.eql('Nombre de participants')
  })

  it('check Participation (%) - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.participation.getText()
    expect(result).to.eql('Participation (%)')
  })

  it('check prepare-re-test - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.prepareReTestButton.getText()
    expect(result).to.eql('PRÉPARER NOUVELLE ÉVALUATION')
  })

  it('check import students - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.importStudentsButton.getText()
    expect(result).to.eql('IMPORTER ÉLÈVES')
  })

  it('check add student - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.addStudentButton.getText()
    expect(result).to.eql('AJOUTER ÉLÈVE')
  })

  it('check checkbox Name - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxName.getText()
    expect(result).to.eql('Nom')
  })

  it('check checkbox birthday - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxBirthday.getText()
    expect(result).to.eql('Date de naissance')
  })

  it('check checkbox grade - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxGrade.getText()
    expect(result).to.eql('Niveau')
  })

  it('check checkbox previous result - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxPreviousResult.getText()
    expect(result).to.eql('Résultat précédent')
  })

  it('check checkbox reading co. - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxReadingCo.getText()
    expect(result).to.eql('Compréhension de lecture')
  })

  it('check checkbox test date - Français', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let result = homePage.checkboxTestDate.getText()
    expect(result).to.eql('Date de l’évaluation')
  })
 });