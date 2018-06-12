package org.medivita.pages;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;

public class AgendamentoPage extends BasePage {
	/************ abrir aba *******/

	public void abriAba(String text) {
		esperarElementoEClicarBotao(By.xpath("//MD-TAB-ITEM[@aria-label='" + text + "']"));
	}

	/************ clicar setMedico *******/

	public void setMedico(String nome) {
		escreverBy(By.xpath("//INPUT[@aria-label='Filtro Médico']"), nome);
		esperarElementoEClicarBotao(By.xpath("//SPAN[text()='" + nome + "']"));
	}

	/******** preencher periodoInicial e periodo Final **********/
	public void setPeriodoInicial(String periodoInicial) {
		// escreverByPlacehoder(By.xpath("(//INPUT[@class='md-datepicker-input'])[3]"),
		// periodoInicial);

		String array[] = new String[3];
		array = periodoInicial.split("/");

		esperarElementoEClicarBotao(By.xpath("(//DIV[@class='md-datepicker-expand-triangle ng-scope'])[1]"));
		esperarElementoEClicarBotao(By.xpath("// TD[contains(@id,'month-" + array[2] + "-"
				+ (Integer.parseInt(array[1].substring(1)) - 1) + "-" + array[0]
				+ "')]//SPAN[@class='md-calendar-date-selection-indicator'][text()='" + array[0] + "']"));
		// TD[contains(@id,'month-2018-4-19')]
	}

	public void setPeriodoFinal(String periodoFinal) {
		String array[] = new String[3];
		array = periodoFinal.split("/");

		esperarElementoEClicarBotao(By.xpath("(//DIV[@class='md-datepicker-expand-triangle ng-scope'])[2]"));
		esperarElementoEClicarBotao(By.xpath("// TD[contains(@id,'month-" + array[2] + "-"
				+ (Integer.parseInt(array[1].substring(1)) - 1) + "-" + array[0]
				+ "')]//SPAN[@class='md-calendar-date-selection-indicator'][text()='" + array[0] + "']"));
	}

	/************ clicar botao pesquisar *******/
	public void clicarBotaoPesquisar(String text) {
		esperarElementoEClicarBotao(By.xpath("//BUTTON[@aria-label='" + text + "']"));
	}

	/************ fechar pesquisa *******/
	public void fecharPesquisa(String text) {
		esperarElementoEClicarBotao(By.xpath("//BUTTON[@aria-label='" + text + "']"));
	}

	public void clicarBotaoAgendar(String data) {
		esperarElementoEClicarBotao(By.xpath("(//ng-md-icon[@class='" + data + " 08:00:00'])[1]"));
		// (//ng-md-icon[@class="28/05/2018 08:00:00"])[1]
	}

	public void clicarSalvarAgendamento(String text) {
		esperarElementoEClicarBotao(By.xpath("//BUTTON[contains(.,'" + text + "')]"));
	}

	/******** * logoff **********/
	public void logoff(String text) throws InterruptedException {
		esperarEClicarBotao(By.xpath("//BUTTON[@aria-label='" + text + "']"));
		Thread.sleep(15000);
		fecharBrowser();
	}

	/******** selecionar comboBox **********/
	public void selecionar_item_combobox(By elCombo, By item) {
		clicarComboBox(elCombo);
		clicarComboBox(item);
	}

}
