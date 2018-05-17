package org.medivita.pages;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;

public class EscalaAtendimentoPage extends BasePage {

	/************ clicar botao nova escala *******/

	public void clicarBotaoNovaEscala(String text) {

		esperarElementoEClicarBotao(By.xpath("//BUTTON[@aria-label='" + text + "']"));
	}

	/************ clicar checkbox *******/

	public void setDiaSemana(String text) {

		esperarclicarCheckBox(By.xpath("//MD-CHECKBOX[@aria-label='" + text + "']"));
	}

	/************ clicar botao proxima etapa *******/
	public void clicarBotaoProximaEtapa(String text) {

		esperarElementoEClicarBotao(By.xpath("//BUTTON[text()='" + text + "']"));
	}

	/************ preencher periodo e intervalo *******/
	public void setPeriodo(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//md-option[@id='select_option_32']"));
	}

	public void setIntervalo(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//md-option[@id='select_option_39']"));
	}

	/************ preencher quantidadeVagas e ordemAtendimento *******/
	public void setQuantidadeVagas(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//md-option[@id='select_option_43']"));
	}

	public void setOrdemAtendimento(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//md-option[@id='select_option_48']"));
	}

	/************ preencher quantidadeVagas e ordemAtendimento *******/
	public void setHoraEntrada(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//md-option[@id='select_option_82']"));
	}

	public void setHoraSaida(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//md-option[@id='select_option_198']"));
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
