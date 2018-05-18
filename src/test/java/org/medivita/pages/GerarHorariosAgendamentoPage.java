package org.medivita.pages;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;

public class GerarHorariosAgendamentoPage extends BasePage {

	/************ clicar botao gerar horários *******/

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

		esperarElementoEClicarBotao(By.xpath("(//DIV[@class='md-datepicker-expand-triangle ng-scope'])[3]"));
		esperarElementoEClicarBotao(By.xpath("// TD[contains(@id,'md-0-month-" + array[2] + "-"
				+ (Integer.parseInt(array[1].substring(1)) - 1) + "-" + array[0]
				+ "')]//SPAN[@class='md-calendar-date-selection-indicator'][text()='" + array[0] + "']"));
		// TD[contains(@id,'month-2018-4-19')]
	}

	public void setPeriodoFinal(String periodoFinal) {
		String array[] = new String[3];
		array = periodoFinal.split("/");

		esperarElementoEClicarBotao(By.xpath("(//DIV[@class='md-datepicker-expand-triangle ng-scope'])[4]"));
		esperarElementoEClicarBotao(By.xpath("// TD[contains(@id,'md-0-month-" + array[2] + "-"
				+ (Integer.parseInt(array[1].substring(1)) - 1) + "-" + array[0]
				+ "')]//SPAN[@class='md-calendar-date-selection-indicator'][text()='" + array[0] + "']"));
	}

	/************ clicar botao gerar horários *******/

	public void clicarBotaoGerarHorarios(String text) {
		esperarElementoEClicarBotao(By.xpath("//BUTTON[@aria-label='" + text + "']"));
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
