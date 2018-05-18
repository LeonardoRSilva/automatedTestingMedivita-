$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/dir_c/gerarhorariosagendamento.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Leonardo Rosa Silva"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given(Dado): Some precondition step"
    },
    {
      "line": 6,
      "value": "#When(Quando): Some key actions"
    },
    {
      "line": 7,
      "value": "#Then(Ent�o): To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But(e,mas): To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 22,
  "name": "Caso de Teste de Gerar Horarios de Agendamento",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento",
  "keyword": "Feature",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_gerar_horarios_de_agendamento"
    }
  ]
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Gerar Horarios de Agendamento",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@GerarHorariosAgendamento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item agendas \"agendas\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "clicar botao (Gerar Horarios) \"Gerar Horarios\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "para gerar preencher os campos nome (medico) \u003cnome\u003e e selecionar combo (medico) \u003cnome\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "para gerar preencher os campos periodo inicial \u003cperiodoinicial\u003e e periodo final \u003cperiodofinal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicar no botao salvar \"salvar\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "validar mensagem de sucesso para gerar horarios",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;",
  "rows": [
    {
      "cells": [
        "nome",
        "periodoinicial",
        "periodofinal"
      ],
      "line": 35,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;1"
    },
    {
      "cells": [
        "\"Leonardo Medico Teste\"",
        "\"29/04/2018\"",
        "\"05/05/2018\""
      ],
      "line": 36,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18800832689,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Gerar Horarios de Agendamento",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_gerar_horarios_de_agendamento"
    },
    {
      "line": 25,
      "name": "@GerarHorariosAgendamento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item agendas \"agendas\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "clicar botao (Gerar Horarios) \"Gerar Horarios\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "para gerar preencher os campos nome (medico) \"Leonardo Medico Teste\" e selecionar combo (medico) \"Leonardo Medico Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "para gerar preencher os campos periodo inicial \"29/04/2018\" e periodo final \"05/05/2018\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicar no botao salvar \"salvar\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "validar mensagem de sucesso para gerar horarios",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "agendas",
      "offset": 56
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.eu_quero_abrir_menu_esquerdo_e_selecionar_item_agendas(String)"
});
formatter.result({
  "duration": 4628000853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gerar Horarios",
      "offset": 31
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.clicar_botao_Gerar_Horarios(String)"
});
formatter.result({
  "duration": 2622499503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo Medico Teste",
      "offset": 46
    },
    {
      "val": "Leonardo Medico Teste",
      "offset": 98
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.para_gerar_preencher_os_campos_nome_medico_e_selecionar_combo_medico(String,String)"
});
formatter.result({
  "duration": 4576601999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/04/2018",
      "offset": 48
    },
    {
      "val": "05/05/2018",
      "offset": 77
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.para_gerar_preencher_os_campos_periodo_inicial_e_periodo_final(String,String)"
});
formatter.result({
  "duration": 103482814623,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 100 seconds waiting for visibility of element located by By.xpath: // TD[@id\u003d\u0027md-0-month-2018-4-25\u0027]//SPAN[@class\u003d\u0027md-calendar-date-selection-indicator\u0027][text()\u003d\u002725\u0027]\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir6060_102}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.181, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d414abbacb5a29b9a5d01fb9be6e1930\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:175)\r\n\tat org.medivita.pages.GerarHorariosAgendamentoPage.setPeriodoFinal(GerarHorariosAgendamentoPage.java:35)\r\n\tat org.medivita.stepDefinitions.GerarHorariosAgendamentoStepDefinition.para_gerar_preencher_os_campos_periodo_inicial_e_periodo_final(GerarHorariosAgendamentoStepDefinition.java:65)\r\n\tat ✽.And para gerar preencher os campos periodo inicial \"29/04/2018\" e periodo final \"05/05/2018\"(Features/dir_c/gerarhorariosagendamento.feature:30)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"// TD[@id\u003d\u0027md-0-month-2018-4-25\u0027]//SPAN[@class\u003d\u0027md-calendar-date-selection-indicator\u0027][text()\u003d\u002725\u0027]\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 501 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir6060_102}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.181, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d414abbacb5a29b9a5d01fb9be6e1930\n*** Element info: {Using\u003dxpath, value\u003d// TD[@id\u003d\u0027md-0-month-2018-4-25\u0027]//SPAN[@class\u003d\u0027md-calendar-date-selection-indicator\u0027][text()\u003d\u002725\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:175)\r\n\tat org.medivita.pages.GerarHorariosAgendamentoPage.setPeriodoFinal(GerarHorariosAgendamentoPage.java:35)\r\n\tat org.medivita.stepDefinitions.GerarHorariosAgendamentoStepDefinition.para_gerar_preencher_os_campos_periodo_inicial_e_periodo_final(GerarHorariosAgendamentoStepDefinition.java:65)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "salvar",
      "offset": 24
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.clicar_no_botao_salvar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GerarHorariosAgendamentoStepDefinition.validar_mensagem_de_sucesso_para_gerar_horarios()"
});
formatter.result({
  "status": "skipped"
});
