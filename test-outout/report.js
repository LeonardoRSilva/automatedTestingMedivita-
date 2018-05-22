$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/dir_d/agendamento.feature");
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
  "name": "Caso de Teste de Agenda",
  "description": "",
  "id": "caso-de-teste-de-agenda",
  "keyword": "Feature",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_agenda"
    }
  ]
});
formatter.scenarioOutline({
  "line": 26,
  "name": "E - Novo Agendamento",
  "description": "",
  "id": "caso-de-teste-de-agenda;e---novo-agendamento",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Agendamento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "abrir menu esquerdo e selecionar item compromissos \"compromissos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "em compromissos selecionar a aba \"Agendamentos\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "na aba agendamentos preencher os campos nome (medico)  \u003cnome\u003e e selecionar combo (medico) \u003cnome\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "na aba agendamentos prencher os campos periodo inicial \u003cperiodoinicial\u003e e periodo final \u003cperiodofinal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicar no botao pesquisar \"pesquisar\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicar no botao agendar \"agendar\" no item do dia \u003cdia\u003e no horario \u003chorario\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clicar no botao pesquisar \"confirmar\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-agenda;e---novo-agendamento;",
  "rows": [
    {
      "cells": [
        "nome",
        "periodoinicial",
        "periodofinal",
        "dia",
        "horario"
      ],
      "line": 37,
      "id": "caso-de-teste-de-agenda;e---novo-agendamento;;1"
    },
    {
      "cells": [
        "\"Leonardo Medico Teste\"",
        "\"29/04/2018\"",
        "\"05/05/2018\"",
        "\"Segunda-Feira\"",
        "\"08:00:00\""
      ],
      "line": 38,
      "id": "caso-de-teste-de-agenda;e---novo-agendamento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 101897690122,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "E - Novo Agendamento",
  "description": "",
  "id": "caso-de-teste-de-agenda;e---novo-agendamento;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_agenda"
    },
    {
      "line": 25,
      "name": "@Agendamento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "abrir menu esquerdo e selecionar item compromissos \"compromissos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "em compromissos selecionar a aba \"Agendamentos\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "na aba agendamentos preencher os campos nome (medico)  \"Leonardo Medico Teste\" e selecionar combo (medico) \"Leonardo Medico Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "na aba agendamentos prencher os campos periodo inicial \"29/04/2018\" e periodo final \"05/05/2018\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicar no botao pesquisar \"pesquisar\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicar no botao agendar \"agendar\" no item do dia \"Segunda-Feira\" no horario \"08:00:00\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clicar no botao pesquisar \"confirmar\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "compromissos",
      "offset": 52
    }
  ],
  "location": "AgendamentoStepDefinition.abrir_menu_esquerdo_e_selecionar_item_compromissos(String)"
});
formatter.result({
  "duration": 35125296364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agendamentos",
      "offset": 34
    }
  ],
  "location": "AgendamentoStepDefinition.em_compromissos_selecionar_a_aba(String)"
});
formatter.result({
  "duration": 8882081433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo Medico Teste",
      "offset": 56
    },
    {
      "val": "Leonardo Medico Teste",
      "offset": 108
    }
  ],
  "location": "AgendamentoStepDefinition.na_aba_agendamentos_preencher_os_campos_nome_medico_e_selecionar_combo_medico(String,String)"
});
formatter.result({
  "duration": 12527075972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/04/2018",
      "offset": 56
    },
    {
      "val": "05/05/2018",
      "offset": 85
    }
  ],
  "location": "AgendamentoStepDefinition.na_aba_agendamentos_prencher_os_campos_periodo_inicial_e_periodo_final(String,String)"
});
formatter.result({
  "duration": 7616844199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pesquisar",
      "offset": 27
    }
  ],
  "location": "AgendamentoStepDefinition.clicar_no_botao_pesquisar(String)"
});
formatter.result({
  "duration": 19001137461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "agendar",
      "offset": 25
    },
    {
      "val": "Segunda-Feira",
      "offset": 50
    },
    {
      "val": "08:00:00",
      "offset": 77
    }
  ],
  "location": "AgendamentoStepDefinition.clicar_no_botao_agendar_no_item_do_dia_no_horario(String,String,String)"
});
formatter.result({
  "duration": 9043440855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirmar",
      "offset": 27
    }
  ],
  "location": "AgendamentoStepDefinition.clicar_no_botao_pesquisar(String)"
});
formatter.result({
  "duration": 19030986144,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 6232970542,
  "status": "passed"
});
formatter.after({
  "duration": 38175106758,
  "status": "passed"
});
});