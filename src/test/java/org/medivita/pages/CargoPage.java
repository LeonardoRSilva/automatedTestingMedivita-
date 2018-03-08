package org.medivita.pages;

import static org.medivita.core.DriverFactory.getDriver;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CargoPage extends BasePage{

	/************espera o Toast fechar *************/
	
	public void esperarToastFechar(String text) {
		 esperarElementofechar(By.xpath(text));
	}
	
	/************clicar botao novo cargo *******/
	
	public void clicarBotaoNovoCargo(String text) {
		esperarElementoEClicarBotao(By.xpath(text));
	}
		
	/******** preencher formulario e enviar **********/
	
	public void setNome(String nome) {
		
		escreverByCssSeletor("nome", nome);
	}
	
	public void setDescricao(String descricao) {
		escreverByCssSeletor("descricao", descricao);
	}
	
	public void enviar(String text) {
		clicarBotao(By.xpath(text));
	}
	
	public void preencherCamposEEnviar(String nome, String descricao, String btnEnviar) {
		setNome(nome);
		setDescricao(descricao);
		enviar(btnEnviar);
	}
}
