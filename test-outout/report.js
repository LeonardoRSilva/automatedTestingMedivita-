$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cargo.feature");
formatter.feature({
  "line": 2,
  "name": "Test Cargo",
  "description": "",
  "id": "test-cargo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready_for_testing"
    }
  ]
});
formatter.before({
  "duration": 19244473908,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Novo Cargo",
  "description": "",
  "id": "test-cargo;novo-cargo",
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
  "duration": 4223833622,
  "status": "passed"
});
formatter.match({
  "location": "CargoStepDefinition.esperar_toast_fechar()"
});
formatter.result({
  "duration": 4031065781,
  "status": "passed"
});
formatter.match({
  "location": "CargoStepDefinition.clicar_botao_novo_cargo()"
});
formatter.result({
  "duration": 250305495,
  "status": "passed"
});
formatter.match({
  "location": "CargoStepDefinition.preencher_campos_e_enviar()"
});
formatter.result({
  "duration": 1635620808,
  "status": "passed"
});
formatter.after({
  "duration": 509266303,
  "status": "passed"
});
});