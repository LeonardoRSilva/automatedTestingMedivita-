package org.medivita.pages;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;

public class MenuEsquerdoPage extends BasePage {

	/******** Abrir Menu *******/

	public void abriMenu(String text) {
		esperarElementoEClicarBotao(By.xpath(text));
	}

	public void selecionarMenu(String text) {
		selecionarItemMenu(By.xpath(text));
	}

	public void fecharMenu(String text) {
		fecharMenuEsquerdo(By.xpath(text));
	}

	/******** selecionar itens menu ********/

	public void abrirCargo(String pos) {
		abriMenu("//MD-ICON[@md-svg-icon='menu']");
		selecionarMenu("(//DIV[@layout='row'])[" + pos + "]");
		fecharMenu("//MD-BACKDROP[@class='md-sidenav-backdrop md-opaque ng-scope']");
	}

}
