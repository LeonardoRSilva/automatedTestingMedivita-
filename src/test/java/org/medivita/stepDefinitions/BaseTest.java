package org.medivita.stepDefinitions;

import static org.medivita.core.DriverFactory.getDriver;
import static org.medivita.core.DriverFactory.killDriver;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.medivita.core.Propriedades;
import org.medivita.pages.LoginPage;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class BaseTest {

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

}
