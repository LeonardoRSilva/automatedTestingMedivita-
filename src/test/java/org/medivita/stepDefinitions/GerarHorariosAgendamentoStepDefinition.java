package org.medivita.stepDefinitions;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.medivita.pages.GerarHorariosAgendamentoPage;
import org.medivita.pages.LoginPage;
import org.medivita.pages.MenuEsquerdoPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GerarHorariosAgendamentoStepDefinition {

	private LoginPage page = new LoginPage();
	private MenuEsquerdoPage menuEsquerdoPage = new MenuEsquerdoPage();
	private GerarHorariosAgendamentoPage gerarHorariosAgendamentoPage = new GerarHorariosAgendamentoPage();

	@Before(" @GerarHorariosAgendamento")
	public void inicalizar() {

		page.acessarTelaInicial();
		page.logar("carina@carina.com", "cari123456");
	}

	@After(" @GerarHorariosAgendamento")
	public void afterNovoMedico() throws InterruptedException {

		gerarHorariosAgendamentoPage.logoff("Sair");
		Thread.sleep(1000);
	}

	@Given("^eu quero abrir menu esquerdo e selecionar item agendas \"([^\"]*)\"$")
	public void eu_quero_abrir_menu_esquerdo_e_selecionar_item_agendas(String arg1) throws Throwable {
		menuEsquerdoPage.abrirItemMenu("agendas");
	}

	@Then("^clicar botao \\(Gerar Horarios\\) \"([^\"]*)\"$")
	public void clicar_botao_Gerar_Horarios(String arg1) throws Throwable {
		gerarHorariosAgendamentoPage.clicarBotaoGerarHorarios(arg1);
	}

	@Then("^para gerar preencher os campos nome \\(medico\\) \"([^\"]*)\" e selecionar combo \\(medico\\) \"([^\"]*)\"$")
	public void para_gerar_preencher_os_campos_nome_medico_e_selecionar_combo_medico(String arg1, String arg2)
			throws Throwable {
		gerarHorariosAgendamentoPage.setMedico(arg1);
	}

	@When("^para gerar preencher os campos periodo inicial \"([^\"]*)\" e periodo final \"([^\"]*)\"$")
	public void para_gerar_preencher_os_campos_periodo_inicial_e_periodo_final(String arg1, String arg2)
			throws Throwable {
		Calendar c = Calendar.getInstance();
		SimpleDateFormat s = new SimpleDateFormat("dd/MM/yyyy");
		c.set(Calendar.DAY_OF_MONTH, c.get(Calendar.DAY_OF_MONTH) + 1);

		String a = s.format(c.getTime());
		gerarHorariosAgendamentoPage.setPeriodoInicial(a);
		System.out.println(a);

		c.set(Calendar.DAY_OF_MONTH, c.get(Calendar.DAY_OF_MONTH) + 6);
		a = s.format(c.getTime());
		gerarHorariosAgendamentoPage.setPeriodoFinal(a);
		System.out.println(a);
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
