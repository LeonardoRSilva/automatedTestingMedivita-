$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cargo.feature");
formatter.feature({
  "line": 2,
  "name": "Caso de Teste de Cargo",
  "description": "",
  "id": "caso-de-teste-de-cargo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@funtional_test_cargo"
    }
  ]
});
formatter.before({
  "duration": 16780088920,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Novo Cargo",
  "description": "",
  "id": "caso-de-teste-de-cargo;novo-cargo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "abrir menu esquerdo e selecionar item cargo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "esperar toast fechar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicar botao novo cargo",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "preencher_campos e enviar",
  "keyword": "Then "
});
formatter.match({
  "location": "CargoStepDefinition.abrir_menu_esquerdo_link_de_cargo()"
});
formatter.result({
  "duration": 4331933849,
  "status": "passed"
});
formatter.match({
  "location": "CargoStepDefinition.esperar_toast_fechar()"
});
formatter.result({
  "duration": 5088401787,
  "status": "passed"
});
formatter.match({
  "location": "CargoStepDefinition.clicar_botao_novo_cargo()"
});
formatter.result({
  "duration": 31999,
  "status": "passed"
});
formatter.match({
  "location": "CargoStepDefinition.preencher_campos_e_enviar()"
});
formatter.result({
  "duration": 2094488759,
  "status": "passed"
});
formatter.after({
  "duration": 619167506,
  "status": "passed"
});
formatter.before({
  "duration": 784345333,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Editar Cargo",
  "description": "",
  "id": "caso-de-teste-de-cargo;editar-cargo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Second"
    }
  ]
});
formatter.after({
  "duration": 325712844,
  "status": "passed"
});
});