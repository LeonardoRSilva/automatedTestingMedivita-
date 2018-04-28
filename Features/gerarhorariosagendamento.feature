#Author: Leonardo Rosa Silva
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given(Dado): Some precondition step
#When(Quando): Some key actions
#Then(Ent�o): To observe outcomes or validation
#And,But(e,mas): To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template


@funtional_test_gerar_horarios_de_agendamento
Feature: Caso de Teste de Gerar Horarios de Agendamento


  @First
  Scenario Outline: Gerar Horarios de Agendamento
    Given eu quero abrir menu esquerdo e selecionar item agendas "Agendas" 
    Then  aguardar mensagem de carregamento fechar 
    When  fechar clicar botao "Gerar Hor�rios para Agendamentos"   
		And   prencher os campos nome (medico) <nome> e selecionar combo (medico) <nome>
		And   prencher os campos periodo inicial <periodoinicial> e periodo final <periodofinal>
		And   clicar no botao salvar "salvar"
		Then  validar mensagem de sucesso

    Examples: 
      | nome                | periodoinicial | periodofinal  |
			| "Jo�o M�dico Teste" | "29/04/2018"   | "05/05/2018"  | 
      

      
		