package org.medivita.stepDefinitions;

import org.medivita.pages.LoginPage;
import org.medivita.pages.MedicoPage;
import org.medivita.pages.MenuEsquerdoPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MedicoStepDefinition {

	private LoginPage page = new LoginPage();
	private MenuEsquerdoPage menuEsquerdoPage = new MenuEsquerdoPage();
	private MedicoPage medicoPage = new MedicoPage();

	@Before("@NovoMedico")
	public void inicalizar() {
		page.acessarTelaInicial();
		page.logar("admin@admin.com", "admin");
	}

	/*
	 * @After public void finaliza() throws IOException { TakesScreenshot ss =
	 * (TakesScreenshot) getDriver(); File arquivo =
	 * ss.getScreenshotAs(OutputType.FILE); FileUtils.copyFile(arquivo, new
	 * File( "target" + File.separator + "screenshot" + File.separator +
	 * testName.getMethodName() + ".jpg"));
	 * 
	 * if (Propriedades.FECHAR_BROWSER) { killDriver(); } }
	 */
	@After("@NovoMedico")
	public void afterNovoMedico() throws InterruptedException {
		medicoPage.logoff("Sair");
		Thread.sleep(65000);
	}

	@Given("^eu quero abrir menu esquerdo e selecionar item medicos \"([^\"]*)\"$")
	public void eu_quero_abrir_menu_esquerdo_e_selecionar_item_medicos(String arg1) throws Throwable {
		menuEsquerdoPage.abrirItemMenu("medicos");

	}

	@Then("^aguardar mensagem de carregamento fechar$")
	public void aguardar_mensagem_de_carregamento_fechar() throws Throwable {

		medicoPage.esperarToastFechar(
				"//MD-TOAST[@class='ng-scope _md md-default-theme md-bottom ng-animate ng-leave ng-leave-active']");
		medicoPage.esperarToastFechar("//DIV[@class='md-toast-content']");
	}

	@When("^fechar clicar botao \"([^\"]*)\"$")
	public void fechar_clicar_botao(String arg1) throws Throwable {
		medicoPage.clicarBotaoNovoMedico("//BUTTON[@class='md-fab md-fab-bottom-right md-button md-ink-ripple']");
	}

	@Then("^preencher os campos tipo registro \"([^\"]*)\" e estado registro \"([^\"]*)\" e registro profissional\"([^\"]*)\"$")
	public void preencher_os_campos_tipo_registro_e_estado_registro_e_registro_profissional(String arg1, String arg2,
			String arg3) throws Throwable {
		medicoPage.setTipoRegistro("tipoRegistro", arg1);
		medicoPage.setEstadoRegistro("estadoRegistro", arg2);
		medicoPage.setRegistroProfissional(arg3);

	}

	@Then("^prencher os campos nome \"([^\"]*)\" e rg \"([^\"]*)\" e cpf \"([^\"]*)\"$")
	public void prencher_os_campos_nome_e_rg_e_cpf(String arg1, String arg2, String arg3) throws Throwable {
		medicoPage.setNome(arg1);
		medicoPage.setRg(arg2);
		medicoPage.setCpf(arg3);
	}

	@Then("^prencher os campos data de nascimento \"([^\"]*)\" e cargo \"([^\"]*)\" e setor \"([^\"]*)\" e especialidade \"([^\"]*)\"$")
	public void prencher_os_campos_data_de_nascimento_e_cargo_e_setor_e_especialidade(String arg1, String arg2,
			String arg3, String arg4) throws Throwable {
		medicoPage.setDataNascimento(arg1);
		medicoPage.setCargo("tipoCargo", "Médico");
		medicoPage.setSetor("tipoSetor", arg3);
		medicoPage.setEspecialidade(arg4);
	}

	@Then("^prencher os campos data admissao \"([^\"]*)\" e telefone \"([^\"]*)\" e sexo \"([^\"]*)\" e cep \"([^\"]*)\" e numero \"([^\"]*)\"$")
	public void prencher_os_campos_data_admissao_e_sexo_e_cep_e_numero(String arg1, String arg2, String arg3,
			String arg4, String arg5) throws Throwable {
		medicoPage.setDataAdmissao(arg1);
		medicoPage.setTelefone(arg2);
		medicoPage.setSexo(arg3);
		medicoPage.setCep(arg4);
		medicoPage.setNumero(arg5);

	}

	@Then("^clicar no botao proximo \"([^\"]*)\"$")
	public void clicar_no_botao_proximo(String arg1) throws Throwable {
		medicoPage.clicarBotaoProximo(arg1);
	}

	@Then("^prencher os campos email \"([^\"]*)\" e senha \"([^\"]*)\" e status \"([^\"]*)\" e clicar em salvar \"([^\"]*)\"$")
	public void prencher_os_campos_email_e_senha_e_status_e_clicar_em_salvar(String arg1, String arg2, String arg3,
			String arg4) throws Throwable {
		medicoPage.setEmail(arg1);
		medicoPage.setSenha(arg2);
		medicoPage.setStatus(arg3);
		medicoPage.salvarMedico("submit");
	}

	@Then("^validar mensagem de sucesso$")
	public void validar_mensagem_de_sucesso() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(6031);
	}

}
