#Author: Leonardo Rosa Silva
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given(Dado): Some precondition step
#When(Quando): Some key actions
#Then(Então): To observe outcomes or validation
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


@funtional_test_agenda
Feature: Caso de Teste de Agenda


   @Agendamento
  Scenario Outline: E - Novo Agendamento
    Given  abrir menu esquerdo e selecionar item compromissos "compromissos"  
    When  em compromissos selecionar a aba "Agendamentos"   
		And   na aba agendamentos preencher os campos nome (medico)  <nome> e selecionar combo (medico) <nome>
		And   na aba agendamentos prencher os campos periodo inicial <periodoinicial> e periodo final <periodofinal>
		And   clicar no botao pesquisar "Pesquisar" e fechar pesquisa "Hide Pesquisa"
		And   clicar no botao agendar "agendar" no item do dia <dia> no horario <horario>
		And   na tela de confirmacao clicar no botao salvar "Save"
		Then  validar mensagem de sucesso

    Examples: 
      | nome                    | periodoinicial | periodofinal  | dia             | horario    |
			| "Joao Medico Teste"     | "29/04/2018"   | "05/05/2018"  | "Segunda-Feira" | "08:00:00" |
      

      
		