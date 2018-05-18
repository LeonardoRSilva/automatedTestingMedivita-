package org.medivita.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AgendamentoStepDefinition {

	@Given("^abrir menu esquerdo e selecionar item compromissos \"([^\"]*)\"$")
	public void abrir_menu_esquerdo_e_selecionar_item_compromissos(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
	}

	@When("^fechar Selecionar a aba \"([^\"]*)\"$")
	public void fechar_Selecionar_a_aba(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6000);
	}

	@When("^clicar no botao pesquisar \"([^\"]*)\"$")
	public void clicar_no_botao_pesquisar(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(19000);
	}

	@When("^clicar no botao agendar \"([^\"]*)\" no item do dia \"([^\"]*)\" no horario \"([^\"]*)\"$")
	public void clicar_no_botao_agendar_no_item_do_dia_no_horario(String arg1, String arg2, String arg3)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(9000);
	}

	@When("^prencher os campos nome \\(medico\\) \"([^\"]*)\" e selecionar combo \\(medico\\) \"([^\"]*)\"$")
	public void prencher_os_campos_nome_medico_e_selecionar_combo_medico(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(8000);
	}
}
