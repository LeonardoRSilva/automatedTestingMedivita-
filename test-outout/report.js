$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dir_a/medico.feature");
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
  "name": "A - Novo M�dico",
  "description": "",
  "id": "caso-de-teste-de-medico;a---novo-m�dico",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@NovoMedico"
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
  "name": "prencher os campos data admissao \u003cdataadmissao\u003e e telefone \u003ctelefone\u003e e sexo \u003csexo\u003e e cep \u003ccep\u003e e numero \u003cnumero\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao proximo \"Proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "prencher os campos email \u003cemail\u003e e senha \u003csenha\u003e e status \u003cstatus\u003e e clicar em salvar \"salvar\"",
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
  "id": "caso-de-teste-de-medico;a---novo-m�dico;",
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
        "telefone",
        "sexo",
        "cep",
        "numero",
        "email",
        "senha",
        "status"
      ],
      "line": 39,
      "id": "caso-de-teste-de-medico;a---novo-m�dico;;1"
    },
    {
      "cells": [
        "\"CRM\"",
        "\"Minas Gerais\"",
        "\"15498768\"",
        "\"Leonardo Medico Teste\"",
        "\"36.596.765-8\"",
        "\"330.274.097-27\"",
        "\"01/01/1988\"",
        "\"Medico\"",
        "\"Cirurgia\"",
        "\"Pediatra\"",
        "\"02/04/2018\"",
        "\"68984606843\"",
        "\"Masculino\"",
        "\"38405211\"",
        "\"1057\"",
        "\"leonardo.rsil@gmail.com\"",
        "\"leonardo123456\"",
        "\"Ativo\""
      ],
      "line": 40,
      "id": "caso-de-teste-de-medico;a---novo-m�dico;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20130698699,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "A - Novo M�dico",
  "description": "",
  "id": "caso-de-teste-de-medico;a---novo-m�dico;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@funtional_test_medico"
    },
    {
      "line": 25,
      "name": "@NovoMedico"
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
  "name": "prencher os campos nome \"Leonardo Medico Teste\" e rg \"36.596.765-8\" e cpf \"330.274.097-27\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "prencher os campos data de nascimento \"01/01/1988\" e cargo \"Medico\" e setor \"Cirurgia\" e especialidade \"Pediatra\"",
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
  "name": "prencher os campos data admissao \"02/04/2018\" e telefone \"68984606843\" e sexo \"Masculino\" e cep \"38405211\" e numero \"1057\"",
  "matchedColumns": [
    10,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicar no botao proximo \"Proximo\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "prencher os campos email \"leonardo.rsil@gmail.com\" e senha \"leonardo123456\" e status \"Ativo\" e clicar em salvar \"salvar\"",
  "matchedColumns": [
    16,
    17,
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
  "duration": 6009503593,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 859404065,
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
  "duration": 4682325467,
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
  "duration": 11137473955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo Medico Teste",
      "offset": 25
    },
    {
      "val": "36.596.765-8",
      "offset": 54
    },
    {
      "val": "330.274.097-27",
      "offset": 75
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_nome_e_rg_e_cpf(String,String,String)"
});
formatter.result({
  "duration": 8557608096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/1988",
      "offset": 39
    },
    {
      "val": "Medico",
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
  "duration": 10202254273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/04/2018",
      "offset": 34
    },
    {
      "val": "68984606843",
      "offset": 58
    },
    {
      "val": "Masculino",
      "offset": 79
    },
    {
      "val": "38405211",
      "offset": 97
    },
    {
      "val": "1057",
      "offset": 117
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_data_admissao_e_sexo_e_cep_e_numero(String,String,String,String,String)"
});
formatter.result({
  "duration": 9485233841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proximo",
      "offset": 25
    }
  ],
  "location": "MedicoStepDefinition.clicar_no_botao_proximo(String)"
});
formatter.result({
  "duration": 914516570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leonardo.rsil@gmail.com",
      "offset": 26
    },
    {
      "val": "leonardo123456",
      "offset": 60
    },
    {
      "val": "Ativo",
      "offset": 86
    },
    {
      "val": "salvar",
      "offset": 113
    }
  ],
  "location": "MedicoStepDefinition.prencher_os_campos_email_e_senha_e_status_e_clicar_em_salvar(String,String,String,String)"
});
formatter.result({
  "duration": 8785186567,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 6031249378,
  "status": "passed"
});
formatter.after({
  "duration": 6059042299,
  "status": "passed"
});
formatter.uri("dir_b/escalaatendimento.feature");
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
      "name": "@Second"
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
      "line": 42,
      "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento;;1"
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
      "id": "caso-de-teste-de-escala-de-atendimento;b---cadastrar-escala-de-atendimento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
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
      "name": "@Second"
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
  "duration": 5031827767,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 314140798,
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
  "duration": 440577641,
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
  "duration": 5999789292,
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
  "duration": 100041897675,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 100 seconds waiting for visibility of element located by By.xpath: //BUTTON[@aria-label\u003d\u0027proximo\u0027]\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir5908_26923}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.139, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6404cf4aa1508335c46882b186a03d72\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:164)\r\n\tat org.medivita.pages.MedicoPage.clicarBotaoProximo(MedicoPage.java:97)\r\n\tat org.medivita.stepDefinitions.MedicoStepDefinition.clicar_no_botao_proximo(MedicoStepDefinition.java:97)\r\n\tat ✽.And clicar no botao proximo \"proximo\"(dir_b/escalaatendimento.feature:31)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//BUTTON[@aria-label\u003d\u0027proximo\u0027]\"}\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 40 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-NOMN0V9\u0027, ip: \u0027169.254.237.71\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir5908_26923}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.139, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6404cf4aa1508335c46882b186a03d72\n*** Element info: {Using\u003dxpath, value\u003d//BUTTON[@aria-label\u003d\u0027proximo\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat org.medivita.core.BasePage.esperarElementoEClicarBotao(BasePage.java:164)\r\n\tat org.medivita.pages.MedicoPage.clicarBotaoProximo(MedicoPage.java:97)\r\n\tat org.medivita.stepDefinitions.MedicoStepDefinition.clicar_no_botao_proximo(MedicoStepDefinition.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
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
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_quantidade_de_vagas_segunda_e_ordem_de_atendimento_segunda(String,String)"
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
  "location": "EscalaAtendimentoStepDefinitions.prencher_os_campos_hora_de_entrada_segunda_e_hora_de_saida_segunda(String,String)"
});
formatter.result({
  "status": "skipped"
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
formatter.uri("dir_c/gerarhorariosagendamento.feature");
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
  "name": "C - Gerar Horarios de Agendamento",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;c---gerar-horarios-de-agendamento",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Third"
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
  "name": "validar mensagem de sucesso para gerar horarios",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;c---gerar-horarios-de-agendamento;",
  "rows": [
    {
      "cells": [
        "nome",
        "periodoinicial",
        "periodofinal"
      ],
      "line": 36,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;c---gerar-horarios-de-agendamento;;1"
    },
    {
      "cells": [
        "\"Jo�o M�dico Teste\"",
        "\"29/04/2018\"",
        "\"05/05/2018\""
      ],
      "line": 37,
      "id": "caso-de-teste-de-gerar-horarios-de-agendamento;c---gerar-horarios-de-agendamento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "C - Gerar Horarios de Agendamento",
  "description": "",
  "id": "caso-de-teste-de-gerar-horarios-de-agendamento;c---gerar-horarios-de-agendamento;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Third"
    },
    {
      "line": 21,
      "name": "@funtional_test_gerar_horarios_de_agendamento"
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
  "name": "validar mensagem de sucesso para gerar horarios",
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
  "duration": 5000135240,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 358908689,
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
  "duration": 2108427050,
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
  "duration": 8000278328,
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
  "duration": 5038110970,
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
  "duration": 6030768191,
  "status": "passed"
});
formatter.match({
  "location": "GerarHorariosAgendamentoStepDefinition.validar_mensagem_de_sucesso_para_gerar_horarios()"
});
formatter.result({
  "duration": 12044878379,
  "status": "passed"
});
formatter.uri("dir_d/agendamento.feature");
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
      "name": "@fourth"
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
      "line": 38,
      "id": "caso-de-teste-de-agenda;e---novo-agendamento;;1"
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
      "id": "caso-de-teste-de-agenda;e---novo-agendamento;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
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
      "name": "@fourth"
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
  "duration": 5021964945,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.aguardar_mensagem_de_carregamento_fechar()"
});
formatter.result({
  "duration": 305751120,
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
  "duration": 6000721479,
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
  "duration": 6047547546,
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
  "duration": 5070363173,
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
  "duration": 19000546392,
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
  "duration": 9002995192,
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
  "duration": 19011579881,
  "status": "passed"
});
formatter.match({
  "location": "MedicoStepDefinition.validar_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 6031425671,
  "status": "passed"
});
});