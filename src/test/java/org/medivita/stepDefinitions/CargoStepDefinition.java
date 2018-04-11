package org.medivita.stepDefinitions;

import static org.medivita.core.DriverFactory.getDriver;
import static org.medivita.core.DriverFactory.killDriver;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.medivita.core.Propriedades;
import org.medivita.pages.CargoPage;
import org.medivita.pages.LoginPage;
import org.medivita.pages.MenuEsquerdoPage;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CargoStepDefinition {

	private MenuEsquerdoPage menuEsquerdoPage = new MenuEsquerdoPage();
	private CargoPage cargoPage = new CargoPage();
	private LoginPage page = new LoginPage();

	@Rule
	public TestName testName = new TestName();

	@Before
	public void inicalizar() {
		page.acessarTelaInicial();
		page.logar("admin@admin.com", "leonardo1900");
	}

	@After
	public void finaliza() throws IOException {
		TakesScreenshot ss = (TakesScreenshot) getDriver();
		File arquivo = ss.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(arquivo, new File(
				"target" + File.separator + "screenshot" + File.separator + testName.getMethodName() + ".jpg"));

		if (Propriedades.FECHAR_BROWSER) {
			killDriver();
		}
	}

	@Given("^abrir menu esquerdo e selecionar item cargo$")
	public void abrir_menu_esquerdo_link_de_cargo() throws Throwable {
		menuEsquerdoPage.abrirCargo("3");
	}

	@Given("^esperar toast fechar$")
	public void esperar_toast_fechar() throws Throwable {
		cargoPage.esperarToastFechar(
				"//MD-TOAST[@class='ng-scope _md md-default-theme md-bottom ng-animate ng-leave ng-leave-active']");
		cargoPage.esperarToastFechar("//div[@class='md-toast-content']");
	}

	@Given("^clicar botao novo cargo$")
	public void clicar_botao_novo_cargo() throws Throwable {
		cargoPage.clicarBotaoNovoCargo("//BUTTON[@class='md-fab md-fab-bottom-right md-button md-ink-ripple']");
	}

	@Given("^preencher_campos e enviar$")
	public void preencher_campos_e_enviar() throws Throwable {
		cargoPage.preencherCamposEEnviar("Cargo Teste", "Descrio cargo teste",
				"//BUTTON[@class='md-primary md-raised md-button md-ink-ripple']");
	}

	/*
	 * @After(order = 0) public void tearDown() {
	 * System.out.println("close the browser"); }
	 * 
	 * @Before(order = 1) public void setUP1() {
	 * System.out.println("launch FF");
	 * System.out.println("Enter URL for Free CRM APP"); }
	 * 
	 * @After(order = 1) public void tearDown1() {
	 * System.out.println("close the browser"); }
	 * 
	 * @Before("@First") public void beforeFirst() {
	 * System.out.println("before only first scenario"); }
	 * 
	 * @After("@First") public void afterFirst() {
	 * System.out.println("after only first sceanrio"); }
	 * 
	 * @Before("@Second") public void beforeSecond() {
	 * System.out.println("before only second scenario"); }
	 * 
	 * @After("@Second") public void afterSecond() {
	 * System.out.println("after only second sceanrio"); }
	 * 
	 * @Before("@Third") public void beforeThird() {
	 * System.out.println("before only third scenario"); }
	 * 
	 * @After("@Third") public void afterThird() {
	 * System.out.println("after only third sceanrio"); }
	 */

	@When("^this is the second step$")
	public void this_is_the_second_step() throws Throwable {
		System.out.println("2nd step");
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() throws Throwable {
		System.out.println("3rd step");
	}

}
