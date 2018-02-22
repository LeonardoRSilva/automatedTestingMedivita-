package org.medivita.pages;

import static org.medivita.core.DriverFactory.getDriver;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CargoPage extends BasePage{

	
	public void abriMenu(String text) {
		
		esperarElementoEClicarBotao(By.xpath(text));
	}
	
	public void selecionarMenu(String text) {
		selecionarItemMenu(By.xpath(text));
	}
	
	public void fecharMenu(String text) {
		fecharMenuEsquerdo(By.xpath(text));
	}
	
}
