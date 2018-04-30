package org.medivita.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MedicoStepDefinition {

	@Given("^eu quero abrir menu esquerdo e selecionar item medicos \"([^\"]*)\"$")
	public void eu_quero_abrir_menu_esquerdo_e_selecionar_item_medicos(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
	}

	@Then("^aguardar mensagem de carregamento fechar$")
	public void aguardar_mensagem_de_carregamento_fechar() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6000);
	}

	@When("^fechar clicar botao \"([^\"]*)\"$")
	public void fechar_clicar_botao(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6000);
	}

	@Then("^preencher os campos tipo registro \"([^\"]*)\" e estado registro \"([^\"]*)\" e registro profissional\"([^\"]*)\"$")
	public void preencher_os_campos_tipo_registro_e_estado_registro_e_registro_profissional(String arg1, String arg2,
			String arg3) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);

	}

	@Then("^prencher os campos nome \"([^\"]*)\" e rg \"([^\"]*)\" e cpf \"([^\"]*)\"$")
	public void prencher_os_campos_nome_e_rg_e_cpf(String arg1, String arg2, String arg3) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
	}

	@Then("^prencher os campos data de nascimento \"([^\"]*)\" e cargo \"([^\"]*)\" e setor \"([^\"]*)\" e especialidade \"([^\"]*)\"$")
	public void prencher_os_campos_data_de_nascimento_e_cargo_e_setor_e_especialidade(String arg1, String arg2,
			String arg3, String arg4) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
	}

	@Then("^prencher os campos data admissao \"([^\"]*)\" e sexo \"([^\"]*)\" e cep \"([^\"]*)\" e numero \"([^\"]*)\"$")
	public void prencher_os_campos_data_admissao_e_sexo_e_cep_e_numero(String arg1, String arg2, String arg3,
			String arg4) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6000);
	}

	@Then("^clicar no botao proximo \"([^\"]*)\"$")
	public void clicar_no_botao_proximo(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(7000);
	}

	@Then("^prencher os campos email \"([^\"]*)\" e senha \"([^\"]*)\" e clicar em salvar \"([^\"]*)\"$")
	public void prencher_os_campos_email_e_senha_e_clicar_em_salvar(String arg1, String arg2, String arg3)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
	}

	@Then("^validar mensagem de sucesso$")
	public void validar_mensagem_de_sucesso() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6031);
	}

}
