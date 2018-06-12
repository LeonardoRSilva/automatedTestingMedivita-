package org.medivita.stepDefinitions;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.medivita.pages.AgendamentoPage;
import org.medivita.pages.LoginPage;
import org.medivita.pages.MenuEsquerdoPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AgendamentoStepDefinition {

	private LoginPage page = new LoginPage();
	private MenuEsquerdoPage menuEsquerdoPage = new MenuEsquerdoPage();
	AgendamentoPage agendamentoPage = new AgendamentoPage();

	@Before(" @Agendamento")
	public void inicalizar() {

		page.acessarTelaInicial();
		page.logar("leonardo.rsil@gmail.com", "pac123456");
	}

	@After(" @Agendamento")
	public void afterNovoMedico() throws InterruptedException {
		Thread.sleep(2000);
		agendamentoPage.logoff("Sair");
		Thread.sleep(1000);
	}

	@Given("^abrir menu esquerdo e selecionar item compromissos \"([^\"]*)\"$")
	public void abrir_menu_esquerdo_e_selecionar_item_compromissos(String arg1) throws Throwable {
		menuEsquerdoPage.abrirItemMenu(arg1);
	}

	@When("^em compromissos selecionar a aba \"([^\"]*)\"$")
	public void em_compromissos_selecionar_a_aba(String arg1) throws Throwable {
		agendamentoPage.abriAba(arg1);
	}

	@When("^na aba agendamentos preencher os campos nome \\(medico\\)  \"([^\"]*)\" e selecionar combo \\(medico\\) \"([^\"]*)\"$")
	public void na_aba_agendamentos_preencher_os_campos_nome_medico_e_selecionar_combo_medico(String arg1, String arg2)
			throws Throwable {
		agendamentoPage.setMedico(arg1);
	}

	@When("^na aba agendamentos prencher os campos periodo inicial \"([^\"]*)\" e periodo final \"([^\"]*)\"$")
	public void na_aba_agendamentos_prencher_os_campos_periodo_inicial_e_periodo_final(String arg1, String arg2)
			throws Throwable {
		Calendar c = Calendar.getInstance();
		SimpleDateFormat s = new SimpleDateFormat("dd/MM/yyyy");
		c.set(Calendar.DAY_OF_MONTH, c.get(Calendar.DAY_OF_MONTH) + 1);

		String a = s.format(c.getTime());
		agendamentoPage.setPeriodoInicial(a);
		System.out.println(a);

		c.set(Calendar.DAY_OF_MONTH, c.get(Calendar.DAY_OF_MONTH) + 6);
		a = s.format(c.getTime());
		agendamentoPage.setPeriodoFinal(a);
		System.out.println(a);
	}

	@When("^clicar no botao pesquisar \"([^\"]*)\" e fechar pesquisa \"([^\"]*)\"$")
	public void clicar_no_botao_pesquisar_e_fechar_pesquisa(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		agendamentoPage.clicarBotaoPesquisar(arg1);
		agendamentoPage.fecharPesquisa(arg2);

	}

	@When("^clicar no botao agendar \"([^\"]*)\" no item do dia \"([^\"]*)\" no horario \"([^\"]*)\"$")
	public void clicar_no_botao_agendar_no_item_do_dia_no_horario(String arg1, String arg2, String arg3)
			throws Throwable {
		// String diaSemana =
		// getDayWeek(calPeriodoInicialAux.get(Calendar.DAY_OF_WEEK));

		SimpleDateFormat s = new SimpleDateFormat("dd/MM/yyyy");

		Calendar calPeriodoInicial = Calendar.getInstance();
		calPeriodoInicial.set(Calendar.DAY_OF_MONTH, calPeriodoInicial.get(Calendar.DAY_OF_MONTH) + 1);

		Calendar calPeriodoFinal = Calendar.getInstance();
		calPeriodoFinal.set(Calendar.DAY_OF_MONTH, calPeriodoFinal.get(Calendar.DAY_OF_MONTH) + 8);

		while (calPeriodoInicial.before(calPeriodoFinal)) {

			// se o dia da semana for igual a segunda feira
			if (calPeriodoInicial.get(Calendar.DAY_OF_WEEK) == 2) {
				agendamentoPage.clicarBotaoAgendar(s.format(calPeriodoInicial.getTime()));
				System.out.println(s.format(calPeriodoInicial.getTime()));
				break;
			}

			calPeriodoInicial.set(Calendar.DAY_OF_MONTH, calPeriodoInicial.get(Calendar.DAY_OF_MONTH) + 1);

		}

	}

	@When("^na tela de confirmacao clicar no botao salvar \"([^\"]*)\"$")
	public void na_tela_de_confirmacao_clicar_no_botao_salvar(String arg1) throws Throwable {
		agendamentoPage.clicarSalvarAgendamento(arg1);
	}

}
