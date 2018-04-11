@ready_for_testing
Feature: Test Cargo

@First 
Scenario: Novo Cargo
	Given abrir menu esquerdo e selecionar item cargo 
	When esperar toast fechar 
	Then clicar botao novo cargo 
	Then preencher_campos e enviar
	

