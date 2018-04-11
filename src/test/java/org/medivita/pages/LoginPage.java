package org.medivita.pages;

import org.medivita.core.BasePage;
import org.medivita.core.DriverFactory;
import org.openqa.selenium.By;

public class LoginPage extends BasePage {

	public void acessarTelaInicial() {
		/*
		 * DriverFactory.getDriver().get(
		 * "https://clinica-vita.herokuapp.com/#!/");
		 */

		DriverFactory.getDriver().get("http://localhost:8081/#!/");
	}

	public void setEmail(String email) {

		escreverByCssSeletor("email", email);
	}

	public void setSenha(String senha) {
		escreverByCssSeletor("password", senha);
	}

	public void entrar() {
		clicarBotao(By.xpath("//button[.='Entrar']"));
	}

	public void logar(String email, String senha) {
		setEmail(email);
		setSenha(senha);
		entrar();
	}

}
