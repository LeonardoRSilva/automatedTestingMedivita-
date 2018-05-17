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


@funtional_test_medico
Feature: Caso de Teste de Medico


  @NovoMedico
  Scenario Outline: A - Novo Médico
    Given eu quero abrir menu esquerdo e selecionar item medicos "Medicos"  
    Then aguardar mensagem de carregamento fechar 
    When fechar clicar botao "Novo Medico"   
		Then preencher os campos tipo registro <tiporegistro> e estado registro <estadoregistro> e registro profissional<registroprofissional> 
		And prencher os campos nome <nome> e rg <rg> e cpf <cpf> 
		And prencher os campos data de nascimento <datanascimento> e cargo <cargo> e setor <setor> e especialidade <especialidade>
		And prencher os campos data admissao <dataadmissao> e telefone <telefone> e sexo <sexo> e cep <cep> e numero <numero> 
		And clicar no botao proximo "Proximo"
		And prencher os campos email <email> e senha <senha> e status <status> e clicar em salvar "salvar"
		Then validar mensagem de sucesso

    Examples: 
      | tiporegistro | estadoregistro | registroprofissional | nome                | rg             | cpf              | datanascimento | cargo    | setor      | especialidade | dataadmissao | telefone     | sexo        | cep        | numero | email                   | senha          |status   |  
			| "CRM"        | "Minas Gerais" | "15498768"           | "Leonardo Medico Teste" | "36.596.765-8" | "330.274.097-27" | "01/01/1988"   | "Medico" | "Cirurgia" | "Pediatra"    | "02/04/2018" | "68984606843"| "Masculino" | "38405211" | "1057" | "leonardo.rsil@gmail.com" | "leonardo123456" | "Ativo" |
      
      

      
		