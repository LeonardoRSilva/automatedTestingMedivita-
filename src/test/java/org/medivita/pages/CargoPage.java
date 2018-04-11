package org.medivita.pages;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;

public class CargoPage extends BasePage {

	/************ espera o Toast fechar *************/

	public void esperarToastFechar(String text) {
		esperarElementofechar(By.xpath(text));
	}

	/************ clicar botao novo cargo *******/

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

	public void selecionar_item_combobox(By elCombo, By item) {
		clicarComboBox(elCombo);
		clicarComboBox(item);
	}

	public void enviar(String text) {
		clicarBotao(By.xpath(text));
	}

	public void preencherCamposEEnviar(String nome, String descricao, String elComboBox, String itemComboBox,
			String btnEnviar) {
		setNome(nome);
		setDescricao(descricao);
		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//MD-OPTION[@value='" + itemComboBox + "']"));
		enviar(btnEnviar);
	}

}
