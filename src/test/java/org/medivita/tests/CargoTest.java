package org.medivita.tests;

import org.junit.Test;
import org.medivita.pages.CargoPage;
import org.medivita.pages.MenuEsquerdoPage;
import org.medivita.stepDefinitions.BaseTest;

public class CargoTest extends BaseTest {

	private MenuEsquerdoPage menuEsquerdoPage = new MenuEsquerdoPage();
	private CargoPage cargoPage = new CargoPage();

	@Test
	public void novoCargo() {

		menuEsquerdoPage.abrirCargo("3");

		cargoPage.esperarToastFechar(
				"//MD-TOAST[@class='ng-scope _md md-default-theme md-bottom ng-animate ng-leave ng-leave-active']");
		cargoPage.esperarToastFechar("//div[@class='md-toast-content']");
		cargoPage.clicarBotaoNovoCargo("//BUTTON[@class='md-fab md-fab-bottom-right md-button md-ink-ripple']");
		cargoPage.preencherCamposEEnviar("Cargo Teste", "Descrio cargo teste",
				"//BUTTON[@class='md-primary md-raised md-button md-ink-ripple']");

	}

}
