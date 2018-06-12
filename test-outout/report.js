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
  "name": "Cadastrar Escala de Atendimento",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;cadastrar-escala-de-atendimento",
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
  "name": "clicar no botao proxima etapa \"Proximo\"",
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
  "name": "salvar escala \"Save\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;cadastrar-escala-de-atendimento;",
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
      "line": 42,
      "id": "caso-de-teste-de-escala-de-atendimento;cadastrar-escala-de-atendimento;;1"
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
      "line": 43,
      "id": "caso-de-teste-de-escala-de-atendimento;cadastrar-escala-de-atendimento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 73435782570,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Cadastrar Escala de Atendimento",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;cadastrar-escala-de-atendimento;;2",
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
  "name": "clicar no botao proxima etapa \"Proximo\"",
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
  "name": "salvar escala \"Save\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
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
  "location": "EscalaAtendimentoStepDefinition.eu_quero_abrir_menu_esquerdo_e_selecionar_item_escalas(String)"
});
formatter.result({
  "duration": 97456015905,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:227)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:175)\r\n\tat org.medivita.pages.MenuEsquerdoPage.abriMenu(MenuEsquerdoPage.java:11)\r\n\tat org.medivita.pages.MenuEsquerdoPage.abrirItemMenu(MenuEsquerdoPage.java:25)\r\n\tat org.medivita.stepDefinitions.EscalaAtendimentoStepDefinition.eu_quero_abrir_menu_esquerdo_e_selecionar_item_escalas(EscalaAtendimentoStepDefinition.java:34)\r\n\tat ✽.Given eu quero abrir menu esquerdo e selecionar item escalas \"escalas\"(Features/dir_b/escalaatendimento.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nova Escala",
      "offset": 26
    }
  ],
  "location": "EscalaAtendimentoStepDefinition.clicar_botao_nova_escala(String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "EscalaAtendimentoStepDefinition.selecionar_os_dias_da_semana_segunda_e_dia_da_semana_quarta(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Proximo",
      "offset": 31
    }
  ],
  "location": "EscalaAtendimentoStepDefinition.clicar_no_botao_proxima_etapa(String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "EscalaAtendimentoStepDefinition.prencher_os_campos_periodo_segunda_e_intervalo_segunda(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "EscalaAtendimentoStepDefinition.prencher_os_campos_quantidade_de_vagas_segunda_e_ordem_de_atendimento_segunda(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "EscalaAtendimentoStepDefinition.prencher_os_campos_hora_de_entrada_segunda_e_hora_de_saida_segunda(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Proximo",
      "offset": 31
    }
  ],
  "location": "EscalaAtendimentoStepDefinition.clicar_no_botao_proxima_etapa(String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "EscalaAtendimentoStepDefinition.prencher_os_campos_periodo_quarta_e_intervalo_quarta(String,String)"
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
  "location": "EscalaAtendimentoStepDefinition.prencher_os_campos_quantidade_de_vagas_quarta_e_ordem_de_atendimento_quarta(String,String)"
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
  "location": "EscalaAtendimentoStepDefinition.prencher_os_campos_hora_de_entrada_quarta_e_hora_de_saida_quarta(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 15
    }
  ],
  "location": "EscalaAtendimentoStepDefinition.salvar_escala(String)"
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
