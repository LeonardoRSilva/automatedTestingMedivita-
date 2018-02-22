package org.medivita.tests;

import org.junit.Test;
import org.medivita.core.BaseTest;
import org.medivita.pages.CargoPage;

public class CargoTest extends BaseTest {
	
	private CargoPage page = new CargoPage();
	
	@Test
	public void test() {
		
		page.abriMenu("//MD-ICON[@md-svg-icon='menu']");
		page.selecionarMenu("(//DIV[@layout='row'])[3]");
		page.fecharMenu("//MD-BACKDROP[@class='md-sidenav-backdrop md-opaque ng-scope']");
		
	}

}
