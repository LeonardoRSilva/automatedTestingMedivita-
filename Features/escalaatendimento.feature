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


@funtional_test_escala_atendimento
Feature: Caso de Teste de Escala de Atendimento


  @First
  Scenario Outline: Cadastrar Escala de Atendimento
    Given eu quero abrir menu esquerdo e selecionar item escala "escala" 
    Then aguardar mensagem de carregamento fechar 
    When fechar clicar botao "Nova Escala de Atendimento"   
		Then selecionar os dias da semana (segunda) <dia1> e dia da semana (quarta) <dia2>
		And  clicar no botao proximo "proximo"
		And  prencher os campos periodo (segunda)  <periodo1> e intervalo (segunda) <intervalo1>
		And  prencher os campos quantidade de vagas (segunda) <quantidadevagas1> e ordem de atendimento (segunda) <ordematendimento1>
		And  prencher os campos hora de entrada (segunda) <horaentrada1> e hora de saida (segunda) <horasaida1>  
		And  clicar no botao proximo "proximo"
		And  prencher os campos periodo (quarta) <periodo2> e intervalo (quarta) <intervalo2>
		And  prencher os campos quantidade de vagas (quarta) <quantidadevagas2> e ordem de atendimento (quarta) <ordematendimento2>
		And  prencher os campos hora de entrada (quarta) <horaentrada2> e hora de saida (quarta) <horasaida2>  
		Then validar mensagem de sucesso

    Examples: 
      | dia1            | dia2           | periodo1 | intervalo1 | quantidadevagas1 | ordematendimento1| horaentrada1 | horasaida1 |  periodo2 | intervalo2 | quantidadevagas2 | ordematendimento2| horaentrada2 | horasaida2 |  
			| "Segunda-Feira" | "Quarta-Feira" | "Manhã"  | "45"       | "2"              | "Agendamento"    | "08:00:00"   | "13:00:00" |  "Tarde"  | "60"       | "2"              | "Agendamento"    | "13:30:00"   | "18:30:00" | 
      
      

      
		