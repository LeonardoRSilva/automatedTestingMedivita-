$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("agendamento.feature");
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
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "abrir menu esquerdo e selecionar item compromissos \"Compromissos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar Selecionar a aba \"Agendamentos\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "prencher os campos nome (medico)  \u003cnome\u003e e selecionar combo (medico) \u003cnome\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos periodo inicial \u003cperiodoinicial\u003e e periodo final \u003cperiodofinal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicar no botao pesquisar \"pesquisar\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clicar no botao agendar \"agendar\" no item do dia \u003cdia\u003e no horario \u003chorario\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao pesquisar \"confirmar\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;",
  "rows": [
    {
      "cells": [
        "nome",
        "periodoinicial",
        "periodofinal",
        "dia",
        "horario"
      ],
      "line": 38,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;1"
    },
    {
      "cells": [
        "\"Jo�o M�dico Teste\"",
        "\"29/04/2018\"",
        "\"05/05/2018\"",
        "\"Segunda-Feira\"",
        "\"08:00:00\""
      ],
      "line": 39,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
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
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "abrir menu esquerdo e selecionar item compromissos \"Compromissos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar Selecionar a aba \"Agendamentos\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "prencher os campos nome (medico)  \"Jo�o M�dico Teste\" e selecionar combo (medico) \"Jo�o M�dico Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos periodo inicial \"29/04/2018\" e periodo final \"05/05/2018\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicar no botao pesquisar \"pesquisar\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "clicar no botao agendar \"agendar\" no item do dia \"Segunda-Feira\" no horario \"08:00:00\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao pesquisar \"confirmar\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Compromissos",
      "offset": 52
    }
  ],
  "location": "AgendamentoStepDefinition.abrir_menu_esquerdo_e_selecionar_item_compromissos(String)"
});
formatter.result({
  "duration": 464095190,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 60979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agendamentos",
      "offset": 25
    }
  ],
  "location": "AgendamentoStepDefinition.fechar_Selecionar_a_aba(String)"
});
formatter.result({
  "duration": 73657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jo�o M�dico Teste",
      "offset": 35
    },
    {
      "val": "Jo�o M�dico Teste",
      "offset": 83
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.prencher_os_campos_nome_medico_e_selecionar_combo_medico(String,String)"
});
formatter.result({
  "duration": 195614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/04/2018",
      "offset": 36
    },
    {
      "val": "05/05/2018",
      "offset": 65
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.prencher_os_campos_periodo_inicial_e_periodo_final(String,String)"
});
formatter.result({
  "duration": 95996,
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
  "duration": 59770,
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
  "duration": 117730,
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
  "duration": 88147,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 27773,
  "status": "passed"
});
formatter.uri("escalaatendimento.feature");
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
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item escala \"escala\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar clicar botao \"Nova Escala de Atendimento\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "selecionar os dias da semana (segunda) \u003cdia1\u003e e dia da semana (quarta) \u003cdia2\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos periodo (segunda)  \u003cperiodo1\u003e e intervalo (segunda) \u003cintervalo1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "prencher os campos quantidade de vagas (segunda) \u003cquantidadevagas1\u003e e ordem de atendimento (segunda) \u003cordematendimento1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "prencher os campos hora de entrada (segunda) \u003choraentrada1\u003e e hora de saida (segunda) \u003chorasaida1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "prencher os campos periodo (quarta) \u003cperiodo2\u003e e intervalo (quarta) \u003cintervalo2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "prencher os campos quantidade de vagas (quarta) \u003cquantidadevagas2\u003e e ordem de atendimento (quarta) \u003cordematendimento2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "prencher os campos hora de entrada (quarta) \u003choraentrada2\u003e e hora de saida (quarta) \u003chorasaida2\u003e",
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
        "\"Manh�\"",
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
formatter.scenario({
  "line": 43,
  "name": "Cadastrar Escala de Atendimento",
  "description": "",
  "id": "caso-de-teste-de-escala-de-atendimento;cadastrar-escala-de-atendimento;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@First"
    },
    {
      "line": 21,
      "name": "@funtional_test_escala_atendimento"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item escala \"escala\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar clicar botao \"Nova Escala de Atendimento\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "selecionar os dias da semana (segunda) \"Segunda-Feira\" e dia da semana (quarta) \"Quarta-Feira\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos periodo (segunda)  \"Manh�\" e intervalo (segunda) \"45\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "prencher os campos quantidade de vagas (segunda) \"2\" e ordem de atendimento (segunda) \"Agendamento\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "prencher os campos hora de entrada (segunda) \"08:00:00\" e hora de saida (segunda) \"13:00:00\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "prencher os campos periodo (quarta) \"Tarde\" e intervalo (quarta) \"60\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "prencher os campos quantidade de vagas (quarta) \"2\" e ordem de atendimento (quarta) \"Agendamento\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "prencher os campos hora de entrada (quarta) \"13:30:00\" e hora de saida (quarta) \"18:30:00\"",
  "matchedColumns": [
    12,
    13
  ],
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
      "val": "escala",
      "offset": 55
    }
  ],
  "location": "EscalaAtendimentoStepDefinitions.eu_quero_abrir_menu_esquerdo_e_selecionar_item_escala(String)"
});
formatter.result({
  "duration": 239687,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 45281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nova Escala de Atendimento",
      "offset": 21
    }
  ],
  "location": "MedicoStepDefinition.fechar_clicar_botao(String)"
});
formatter.result({
  "duration": 127391,
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
  "duration": 132824,
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
  "duration": 103241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manh�",
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
  "duration": 123768,
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
  "duration": 125579,
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
  "duration": 111693,
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
  "duration": 89959,
  "status": "passed"
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
  "duration": 130409,
  "status": "passed"
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
  "duration": 182935,
  "status": "passed"
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
  "duration": 116523,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 44074,
  "status": "passed"
});
formatter.uri("gerarhorariosagendamento.feature");
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
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item agendas \"Agendas\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar clicar botao \"Gerar Hor�rios para Agendamentos\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "prencher os campos nome (medico) \u003cnome\u003e e selecionar combo (medico) \u003cnome\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos periodo inicial \u003cperiodoinicial\u003e e periodo final \u003cperiodofinal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicar no botao salvar \"salvar\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
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
      "line": 36,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;1"
    },
    {
      "cells": [
        "\"Jo�o M�dico Teste\"",
        "\"29/04/2018\"",
        "\"05/05/2018\""
      ],
      "line": 37,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;gerar-horarios-de-agendamento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
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
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item agendas \"Agendas\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar clicar botao \"Gerar Hor�rios para Agendamentos\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "prencher os campos nome (medico) \"Jo�o M�dico Teste\" e selecionar combo (medico) \"Jo�o M�dico Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos periodo inicial \"29/04/2018\" e periodo final \"05/05/2018\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicar no botao salvar \"salvar\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Agendas",
      "offset": 56
    }
  ],
  "location": "AgendamentoStepDefinition.eu_quero_abrir_menu_esquerdo_e_selecionar_item_agendas(String)"
});
formatter.result({
  "duration": 113504,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 48903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gerar Hor�rios para Agendamentos",
      "offset": 21
    }
  ],
  "location": "MedicoStepDefinition.fechar_clicar_botao(String)"
});
formatter.result({
  "duration": 91770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jo�o M�dico Teste",
      "offset": 34
    },
    {
      "val": "Jo�o M�dico Teste",
      "offset": 82
    }
  ],
  "location": "AgendamentoStepDefinition.prencher_os_campos_nome_medico_e_selecionar_combo_medico(String,String)"
});
formatter.result({
  "duration": 115919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/04/2018",
      "offset": 36
    },
    {
      "val": "05/05/2018",
      "offset": 65
    }
  ],
  "location": "GerarHorariosAgendamentoStepDefinition.prencher_os_campos_periodo_inicial_e_periodo_final(String,String)"
});
formatter.result({
  "duration": 123768,
  "status": "passed"
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
  "duration": 76676,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 25961,
  "status": "passed"
});
formatter.uri("medico.feature");
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
  "name": "Caso de Teste de Medico",
  "description": "",
  "id": "caso-de-teste-de-medico",
  "keyword": "Feature",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_medico"
    }
  ]
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Novo M�dico",
  "description": "",
  "id": "caso-de-teste-de-medico;novo-m�dico",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item medicos \"Medicos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar clicar botao \"Novo Medico\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "preencher os campos tipo registro \u003ctiporegistro\u003e e estado registro \u003cestadoregistro\u003e e registro profissional\u003cregistroprofissional\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos nome \u003cnome\u003e e rg \u003crg\u003e e cpf \u003ccpf\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos data de nascimento \u003cdatanascimento\u003e e cargo \u003ccargo\u003e e setor \u003csetor\u003e e especialidade \u003cespecialidade\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "prencher os campos data admissao \u003cdataadmissao\u003e e sexo \u003csexo\u003e e cep \u003ccep\u003e e numero \u003cnumero\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao proximo \"proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "prencher os campos email \u003cemail\u003e e senha \u003csenha\u003e e clicar em salvar \"salvar\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-medico;novo-m�dico;",
  "rows": [
    {
      "cells": [
        "tiporegistro",
        "estadoregistro",
        "registroprofissional",
        "nome",
        "rg",
        "cpf",
        "datanascimento",
        "cargo",
        "setor",
        "especialidade",
        "dataadmissao",
        "sexo",
        "cep",
        "numero",
        "email",
        "senha"
      ],
      "line": 39,
      "id": "caso-de-teste-de-medico;novo-m�dico;;1"
    },
    {
      "cells": [
        "\"CRM\"",
        "\"Minas Gerais\"",
        "\"15498768\"",
        "\"Jo�o M�dico Teste\"",
        "\"36.596.765-8\"",
        "\"330.274.097-27\"",
        "\"15/10/1986\"",
        "\"M�dico\"",
        "\"Cirurgia\"",
        "\"Pediatra\"",
        "\"28/04/2018\"",
        "\"Masculino\"",
        "\"38405211\"",
        "\"1057\"",
        "\"joao.medico@gmail.com\"",
        "\"joamed123456\""
      ],
      "line": 40,
      "id": "caso-de-teste-de-medico;novo-m�dico;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Novo M�dico",
  "description": "",
  "id": "caso-de-teste-de-medico;novo-m�dico;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@First"
    },
    {
      "line": 21,
      "name": "@funtional_test_medico"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "eu quero abrir menu esquerdo e selecionar item medicos \"Medicos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "aguardar mensagem de carregamento fechar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "fechar clicar botao \"Novo Medico\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "preencher os campos tipo registro \"CRM\" e estado registro \"Minas Gerais\" e registro profissional\"15498768\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "prencher os campos nome \"Jo�o M�dico Teste\" e rg \"36.596.765-8\" e cpf \"330.274.097-27\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos data de nascimento \"15/10/1986\" e cargo \"M�dico\" e setor \"Cirurgia\" e especialidade \"Pediatra\"",
  "matchedColumns": [
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "prencher os campos data admissao \"28/04/2018\" e sexo \"Masculino\" e cep \"38405211\" e numero \"1057\"",
  "matchedColumns": [
    10,
    11,
    12,
    13
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
  "name": "prencher os campos email \"joao.medico@gmail.com\" e senha \"joamed123456\" e clicar em salvar \"salvar\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "validar mensagem de sucesso",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Medicos",
      "offset": 56
    }
  ],
  "location": "MedicoStepDefinition.eu_quero_abrir_menu_esquerdo_e_selecionar_item_medicos(String)"
});
formatter.result({
  "duration": 120145,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 21735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Novo Medico",
      "offset": 21
    }
  ],
  "location": "MedicoStepDefinition.fechar_clicar_botao(String)"
});
formatter.result({
  "duration": 68224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM",
      "offset": 35
    },
    {
      "val": "Minas Gerais",
      "offset": 59
    },
    {
      "val": "15498768",
      "offset": 97
    }
  ],
  "location": "MedicoStepDefinition.preencher_os_campos_tipo_registro_e_estado_registro_e_registro_profissional(String,String,String)"
});
formatter.result({
  "duration": 106863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jo�o M�dico Teste",
      "offset": 25
    },
    {
      "val": "36.596.765-8",
      "offset": 50
    },
    {
      "val": "330.274.097-27",
      "offset": 71
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_nome_e_rg_e_cpf(String,String,String)"
});
formatter.result({
  "duration": 111694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/10/1986",
      "offset": 39
    },
    {
      "val": "M�dico",
      "offset": 60
    },
    {
      "val": "Cirurgia",
      "offset": 77
    },
    {
      "val": "Pediatra",
      "offset": 104
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_data_de_nascimento_e_cargo_e_setor_e_especialidade(String,String,String,String)"
});
formatter.result({
  "duration": 113504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28/04/2018",
      "offset": 34
    },
    {
      "val": "Masculino",
      "offset": 54
    },
    {
      "val": "38405211",
      "offset": 72
    },
    {
      "val": "1057",
      "offset": 92
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_data_admissao_e_sexo_e_cep_e_numero(String,String,String,String)"
});
formatter.result({
  "duration": 161804,
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
  "duration": 60375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "joao.medico@gmail.com",
      "offset": 26
    },
    {
      "val": "joamed123456",
      "offset": 58
    },
    {
      "val": "salvar",
      "offset": 92
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_email_e_senha_e_clicar_em_salvar(String,String,String)"
});
formatter.result({
  "duration": 135239,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 265649,
  "status": "passed"
});
});