package org.medivita.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GerarHorariosAgendamentoStepDefinition {

	@Given("^abrir menu esquerdo e selecionar item agendas \"([^\"]*)\"$")
	public void abrir_menu_esquerdo_e_selecionar_item_agendas(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5031);

	}

	@When("^prencher os campos nome \\(medico\\)  \"([^\"]*)\" e selecionar combo \\(medico\\) \"([^\"]*)\"$")
	public void prencher_os_campos_nome_medico_e_selecionar_combo_medico(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6031);
	}

	@When("^prencher os campos periodo inicial \"([^\"]*)\" e periodo final \"([^\"]*)\"$")
	public void prencher_os_campos_periodo_inicial_e_periodo_final(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5031);
	}

	@When("^clicar no botao salvar \"([^\"]*)\"$")
	public void clicar_no_botao_salvar(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6031);
	}

	@Then("^validar mensagem de sucesso para gerar horarios$")
	public void validar_mensagem_de_sucesso_para_gerar_horarios() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(12031);
	}

}
