$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/dir_b/escalaatendimento.feature");
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
  "name": "Caso de Teste de Escala de Atendimento",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento",
  "keyword": "Feature",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_escala_atendimento"
    }
  ]
});
formatter.scenarioOutline({
  "line": 26,
  "name": "B - Cadastrar Escala de Atendimento",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@EscalaAtendimento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item escalas \"escalas\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "clicar botao nova escala \"Nova Escala\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "selecionar os dias da semana (segunda) \u003cdia1\u003e e dia da semana (quarta) \u003cdia2\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "clicar no botao proxima etapa \"Proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos periodo (segunda)  \u003cperiodo1\u003e e intervalo (segunda) \u003cintervalo1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos quantidade de vagas (segunda) \u003cquantidadevagas1\u003e e ordem de atendimento (segunda) \u003cordematendimento1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "prencher os campos hora de entrada (segunda) \u003choraentrada1\u003e e hora de saida (segunda) \u003chorasaida1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "prencher os campos periodo (quarta) \u003cperiodo2\u003e e intervalo (quarta) \u003cintervalo2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "prencher os campos quantidade de vagas (quarta) \u003cquantidadevagas2\u003e e ordem de atendimento (quarta) \u003cordematendimento2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "prencher os campos hora de entrada (quarta) \u003choraentrada2\u003e e hora de saida (quarta) \u003chorasaida2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento;",
  "rows": [
    {
      "cells": [
        "dia1",
        "dia2",
        "periodo1",
        "intervalo1",
        "quantidadevagas1",
        "ordematendimento1",
        "horaentrada1",
        "horasaida1",
        "periodo2",
        "intervalo2",
        "quantidadevagas2",
        "ordematendimento2",
        "horaentrada2",
        "horasaida2"
      ],
      "line": 41,
      "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento;;1"
    },
    {
      "cells": [
        "\"Segunda-Feira\"",
        "\"Quarta-Feira\"",
        "\"Manha\"",
        "\"45\"",
        "\"2\"",
        "\"Agendamento\"",
        "\"08:00:00\"",
        "\"13:00:00\"",
        "\"Tarde\"",
        "\"60\"",
        "\"2\"",
        "\"Agendamento\"",
        "\"13:30:00\"",
        "\"18:30:00\""
      ],
      "line": 42,
      "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 76052915467,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "B - Cadastrar Escala de Atendimento",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_escala_atendimento"
    },
    {
      "line": 25,
      "name": "@EscalaAtendimento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item escalas \"escalas\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "clicar botao nova escala \"Nova Escala\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "selecionar os dias da semana (segunda) \"Segunda-Feira\" e dia da semana (quarta) \"Quarta-Feira\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "clicar no botao proxima etapa \"Proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos periodo (segunda)  \"Manha\" e intervalo (segunda) \"45\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos quantidade de vagas (segunda) \"2\" e ordem de atendimento (segunda) \"Agendamento\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "prencher os campos hora de entrada (segunda) \"08:00:00\" e hora de saida (segunda) \"13:00:00\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "prencher os campos periodo (quarta) \"Tarde\" e intervalo (quarta) \"60\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "prencher os campos quantidade de vagas (quarta) \"2\" e ordem de atendimento (quarta) \"Agendamento\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "prencher os campos hora de entrada (quarta) \"13:30:00\" e hora de saida (quarta) \"18:30:00\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "escalas",
      "offset": 56
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.eu_quero_abrir_menu_esquerdo_e_selecionar_item_escalas(String)"
});
formatter.result({
  "duration": 8190975662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nova Escala",
      "offset": 26
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.clicar_botao_nova_escala(String)"
});
formatter.result({
  "duration": 2296738977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Segunda-Feira",
      "offset": 40
    },
    {
      "val": "Quarta-Feira",
      "offset": 81
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.selecionar_os_dias_da_semana_segunda_e_dia_da_semana_quarta(String,String)"
});
formatter.result({
  "duration": 10366467007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proximo",
      "offset": 31
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.clicar_no_botao_proxima_etapa(String)"
});
formatter.result({
  "duration": 1689043972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manha",
      "offset": 39
    },
    {
      "val": "45",
      "offset": 69
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_periodo_segunda_e_intervalo_segunda(String,String)"
});
formatter.result({
  "duration": 17846561747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    },
    {
      "val": "Agendamento",
      "offset": 87
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_quantidade_de_vagas_segunda_e_ordem_de_atendimento_segunda(String,String)"
});
formatter.result({
  "duration": 9032836631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08:00:00",
      "offset": 46
    },
    {
      "val": "13:00:00",
      "offset": 83
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_hora_de_entrada_segunda_e_hora_de_saida_segunda(String,String)"
});
formatter.result({
  "duration": 8053003011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proximo",
      "offset": 25
    }
  ],
  "location": "MedicoStepDefinition.clicar_no_botao_proximo(String)"
});
formatter.result({
  "duration": 100822297127,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 100 seconds waiting for visibility of element located by By.xpath: //BUTTON[@aria-label\u003d\u0027proximo\u0027]\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir5676_25857}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.139, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8127d5845790846e0235cba75122426e\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:169)\r\n\tat org.medivita.pages.MedicoPage.clicarBotaoProximo(MedicoPage.java:97)\r\n\tat org.medivita.stepDefinitions.MedicoStepDefinition.clicar_no_botao_proximo(MedicoStepDefinition.java:97)\r\n\tat ✽.And clicar no botao proximo \"proximo\"(Features/dir_b/escalaatendimento.feature:34)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//BUTTON[@aria-label\u003d\u0027proximo\u0027]\"}\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 285 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir5676_25857}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.139, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8127d5845790846e0235cba75122426e\n*** Element info: {Using\u003dxpath, value\u003d//BUTTON[@aria-label\u003d\u0027proximo\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:169)\r\n\tat org.medivita.pages.MedicoPage.clicarBotaoProximo(MedicoPage.java:97)\r\n\tat org.medivita.stepDefinitions.MedicoStepDefinition.clicar_no_botao_proximo(MedicoStepDefinition.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tarde",
      "offset": 37
    },
    {
      "val": "60",
      "offset": 66
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_periodo_quarta_e_intervalo_quarta(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 49
    },
    {
      "val": "Agendamento",
      "offset": 85
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_quantidade_de_vagas_quarta_e_ordem_de_atendimento_quarta(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13:30:00",
      "offset": 45
    },
    {
      "val": "18:30:00",
      "offset": 81
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_hora_de_entrada_quarta_e_hora_de_saida_quarta(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1082867391,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton class\u003d\"md-icon-button md-button md-ink-ripple\" type\u003d\"button\" ng-transclude\u003d\"\" aria-label\u003d\"Sair\" ng-click\u003d\"logout()\"\u003e...\u003c/button\u003e is not clickable at point (930, 24). Other element would receive the click: \u003cmd-icon aria-label\u003d\"Close dialog\" class\u003d\"ng-scope material-icons\"\u003e...\u003c/md-icon\u003e\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 563 milliseconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir5676_25857}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.139, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8127d5845790846e0235cba75122426e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat org.medivita.core.BasePage.esperarEClicarBotao(BasePage.java:174)\r\n\tat org.medivita.pages.EscalaAtendimentoPage.logoff(EscalaAtendimentoPage.java:69)\r\n\tat org.medivita.stepDefinitions.EscalaAtendimentoStepDefinitions.afterNovoMedico(EscalaAtendimentoStepDefinitions.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});