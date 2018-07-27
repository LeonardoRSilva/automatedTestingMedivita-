# AUTOMAÇÃO DE TESTES FUNCIONAIS COM SELENIUM WEBDRIVER 

- Ambiente para realização de testes funcionais automatizados com a ferramenta Selenium 3.0 (Webdriver).
- Objetivo:
    * Aplicar a técnica utilizada no processo de desenvolvimento de um ambiente de testes funcionais automatizados no sistema Medivita.
    
## 1. Sistema Medivita
O sistema Medivita é o sistema utilizado como estudo de caso base para a criação do projeto de automação dos testes funcionais. O sistema Medivita auxilia o processo de agendamento de consultas médicas.

![logo](https://user-images.githubusercontent.com/13081442/43343004-11088af2-91bb-11e8-8bf9-13c229386585.PNG)
## 2. Processo de Teste
O processo de teste seguiu as seguintes fases:
- Planejamento: elaboração do plano de testes;
- Preparação: preparação do ambiente de testes;
- Especificação: elaboração e criação dos casos de testes e scripts;
- Execução: execução dos casos de teste conforme os scripts;
- Entrega: finalização do processo de testes.

![fases teste](https://user-images.githubusercontent.com/13081442/43343377-553c2d04-91bc-11e8-9c30-1b71aedec83a.PNG)
## 3. Planejamento (Plano de Testes)
Critério de escolha:
Fluxo principal do Sistema

Cenários:
- Cadastrar Médico
- Cadastrar Escala de Atendimento
- Gerar horários para Agendamento
- Agendar Consulta

Exemplo: passos presentes no plano de teste de Cadastro de Médico.

![plano teste](https://user-images.githubusercontent.com/13081442/43343806-fe0d2ac2-91bd-11e8-80d9-f647189b0bf2.PNG)

## 4. Preparação (Tecnologias/Ambiente)
Dentre as tecnologias utilizadas, destaca-se: 
- Selenium webdriver  emula as ações do usuário no browser de forma automatizada

Integrado ao selenium foram utilizadas as ferramentas:
- JUnit - fornece a estrutura para realização dos testes
- Cucumber - permite criar as especificações dos testes em linguagem natural
- Allure - gerar relatórios otimizados dos resultados dos testes.

![tecnologias](https://user-images.githubusercontent.com/13081442/43338844-fc88bf78-91ad-11e8-8f74-2df356249ca7.jpg)

Estrutura do projeto:
  - Pastas
  - Dependências
  - Pacotes
![estrutura projeto](https://user-images.githubusercontent.com/13081442/43344317-9dad194c-91bf-11e8-99c7-10fe528ffc39.png)

## 5. Especificação (criação dos scripts)
Cucumber:
![cucumber](https://user-images.githubusercontent.com/13081442/43344808-81ae8ecc-91c1-11e8-8f13-030baa2eef60.png)

Permite escrever a especificação em linguagem natural.

Utiliza uma liguagem chamada: Gherkin - Linguagem Natural(Ubíqua)
- Estruturar os cenários
- Palavras chave(Expressão Regular)

Vantagens:
- Manter o entendimento a todos os envolvidos
- A especificação acompanha a evolução do código (ideal em metodologias ágeis).

![especif ling natu](https://user-images.githubusercontent.com/13081442/43344964-1d9be974-91c2-11e8-900b-f3b62f378694.png)

Os arquivos contendo a especificação em liguagem natura possuem o formato ".feature"

![feature](https://user-images.githubusercontent.com/13081442/43345251-1e336d70-91c3-11e8-9a07-00b1bc8d5ae5.png)

Exemplo de mapeamento entre a especificação e a classe concreta

![mapeamento](https://user-images.githubusercontent.com/13081442/43345392-c1000b76-91c3-11e8-81bc-5830080de911.png)

Selenium WebDriver: 
![selenium](https://user-images.githubusercontent.com/13081442/43345537-346961ca-91c4-11e8-9af1-fcd16af1ee1d.png)

Para cada passo da especificação é necessário implementar o código que torna a ação real e concreta(através das funções do Selenium WebDriver).
   - Emular as ações do usuário no browser
   
![implementa](https://user-images.githubusercontent.com/13081442/43345817-4d615dc6-91c5-11e8-8da1-37355fa6a58d.png)  

## 6. Execução (dos casos de Teste)

A criação da classe "TestRunner.java" é necessária para a correta execução do projeto, indicando o local dos arquivos ".feature" e o local das classes que contém a implementação concreta.

![concreta](https://user-images.githubusercontent.com/13081442/43346199-a240826c-91c6-11e8-8ee2-3d4d62552cbc.png)

Execução via prompt (Executa os testes e gera o relatório na pasta Target/site):
 - Comando: $mvn clean test site

Exemplo da execução do cenário de Cadastro de novo Médico.

![cadastro de medico_1](https://user-images.githubusercontent.com/13081442/43341707-b22c0e0e-91b6-11e8-83dc-132288cf5638.gif)


## 7. Entrega (análise dos resultados)

Allure: ![allure](https://user-images.githubusercontent.com/13081442/43346724-b17366da-91c8-11e8-8b5a-c0cb3a892465.png)

Resultados Gerais:


![especifico](https://user-images.githubusercontent.com/13081442/43347216-e101c89a-91ca-11e8-91b9-3a1a2b76dc61.png)
