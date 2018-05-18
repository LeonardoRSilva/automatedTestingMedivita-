package org.medivita.stepDefinitions;

import org.medivita.pages.EscalaAtendimentoPage;
import org.medivita.pages.LoginPage;
import org.medivita.pages.MenuEsquerdoPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class EscalaAtendimentoStepDefinition {

	private LoginPage page = new LoginPage();
	private MenuEsquerdoPage menuEsquerdoPage = new MenuEsquerdoPage();
	private EscalaAtendimentoPage escalaAtendimentoPage = new EscalaAtendimentoPage();

	@Before("@EscalaAtendimento")
	public void inicalizar() {

		page.acessarTelaInicial();
		page.logar("leonardo.rsil@gmail.com", "leo123456");
	}

	@After("@EscalaAtendimento")
	public void afterNovoMedico() throws InterruptedException {

		escalaAtendimentoPage.logoff("Sair");
		Thread.sleep(1000);
	}

	@Given("^eu quero abrir menu esquerdo e selecionar item escalas \"([^\"]*)\"$")
	public void eu_quero_abrir_menu_esquerdo_e_selecionar_item_escalas(String arg1) throws Throwable {
		menuEsquerdoPage.abrirItemMenu("escalas");
	}

	@Then("^clicar botao nova escala \"([^\"]*)\"$")
	public void clicar_botao_nova_escala(String arg1) throws Throwable {
		escalaAtendimentoPage.clicarBotaoNovaEscala(arg1);
	}

	@Then("^selecionar os dias da semana \\(segunda\\) \"([^\"]*)\" e dia da semana \\(quarta\\) \"([^\"]*)\"$")
	public void selecionar_os_dias_da_semana_segunda_e_dia_da_semana_quarta(String arg1, String arg2) throws Throwable {
		escalaAtendimentoPage.setDiaSemana(arg1);
		escalaAtendimentoPage.setDiaSemana(arg2);
	}

	@Then("^clicar no botao proxima etapa \"([^\"]*)\"$")
	public void clicar_no_botao_proxima_etapa(String arg1) throws Throwable {
		escalaAtendimentoPage.clicarBotaoProximaEtapa(arg1);

	}

	@Then("^prencher os campos periodo \\(segunda\\)  \"([^\"]*)\" e intervalo \\(segunda\\) \"([^\"]*)\"$")
	public void prencher_os_campos_periodo_segunda_e_intervalo_segunda(String arg1, String arg2) throws Throwable {
		escalaAtendimentoPage.setPeriodo("PeriodoSegunda", "Manhã");
		escalaAtendimentoPage.setIntervalo("intervaloAgendamentoSegunda", arg2);

		// escalaAtendimentoPage.setIntervalo("intervaloAgendamentoSegunda",
		// arg2);
	}

	@Then("^prencher os campos quantidade de vagas \\(segunda\\) \"([^\"]*)\" e ordem de atendimento \\(segunda\\) \"([^\"]*)\"$")
	public void prencher_os_campos_quantidade_de_vagas_segunda_e_ordem_de_atendimento_segunda(String arg1, String arg2)
			throws Throwable {
		escalaAtendimentoPage.setQuantidadeVagas("quantidadeVagasSegunda", arg1);
		escalaAtendimentoPage.setOrdemAtendimento("ordemAgendamentoSegunda", arg2);
	}

	@Then("^prencher os campos hora de entrada \\(segunda\\) \"([^\"]*)\" e hora de saida \\(segunda\\) \"([^\"]*)\"$")
	public void prencher_os_campos_hora_de_entrada_segunda_e_hora_de_saida_segunda(String arg1, String arg2)
			throws Throwable {
		escalaAtendimentoPage.setHoraEntrada("horaEntradaSegunda", arg1);
		escalaAtendimentoPage.setHoraSaida("horaSaidaSegunda", arg2);
	}

	@Then("^prencher os campos periodo \\(quarta\\) \"([^\"]*)\" e intervalo \\(quarta\\) \"([^\"]*)\"$")
	public void prencher_os_campos_periodo_quarta_e_intervalo_quarta(String arg1, String arg2) throws Throwable {
		escalaAtendimentoPage.setPeriodo("PeriodoQuarta", "Tarde");
		escalaAtendimentoPage.setIntervalo("intervaloAgendamentoQuarta", arg2);
	}

	@Then("^prencher os campos quantidade de vagas \\(quarta\\) \"([^\"]*)\" e ordem de atendimento \\(quarta\\) \"([^\"]*)\"$")
	public void prencher_os_campos_quantidade_de_vagas_quarta_e_ordem_de_atendimento_quarta(String arg1, String arg2)
			throws Throwable {
		escalaAtendimentoPage.setQuantidadeVagas("quantidadeVagasQuarta", arg1);
		escalaAtendimentoPage.setOrdemAtendimento("ordemAgendamentoQuarta", arg2);
	}

	@Then("^prencher os campos hora de entrada \\(quarta\\) \"([^\"]*)\" e hora de saida \\(quarta\\) \"([^\"]*)\"$")
	public void prencher_os_campos_hora_de_entrada_quarta_e_hora_de_saida_quarta(String arg1, String arg2)
			throws Throwable {
		escalaAtendimentoPage.setHoraEntrada("horaEntradaQuarta", arg1);
		escalaAtendimentoPage.setHoraSaida("horaSaidaQuarta", arg2);
	}

	@Then("^salvar escala \"([^\"]*)\"$")
	public void salvar_escala(String arg1) throws Throwable {
		escalaAtendimentoPage.salvarEscala(arg1);
	}

}
