package org.medivita.core;

import static org.medivita.core.DriverFactory.getDriver;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {

	/********* TextField e TextArea ************/

	public void escrever(By by, String texto) {
		getDriver().findElement(by).clear();
		getDriver().findElement(by).sendKeys(texto);
	}

	public void escreverByPlacehoder(By by, String texto) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).clear();
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).sendKeys(texto);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).sendKeys(Keys.TAB);
		// getDriver().findElement(by).click();
	}
	/*
	 * public void escrever(String name_field, String texto){
	 * getDriver().findElement(By.name(name_field)).clear();
	 * getDriver().findElement(By.name(name_field));
	 * getDriver().findElement(By.name(name_field)).sendKeys(texto); }
	 */

	public void scroll() {
		JavascriptExecutor js = (JavascriptExecutor) getDriver();
		WebElement element = getDriver().findElement(By.xpath("//DIV[@class='md-virtual-repeat-offsetter']"));

		js.executeScript("$(\".md-virtual-repeat-offsetter\").animate({ scrollTop: \"" + 600 + "px\" })");

	}

	public void escrever(String id_campo, String texto) {
		escrever(By.id(id_campo), texto);
	}

	public void escreverByCssSeletor(String seletor, String texto) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(By.name(seletor))).sendKeys(texto);
		// getDriver().findElement(By.xpath("//INPUT[@id='input_0']")).sendKeys(texto);;
	}

	public void escreverBy(By by, String texto) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).sendKeys(texto);
		// getDriver().findElement(By.xpath("//INPUT[@id='input_0']")).sendKeys(texto);;
	}

	public String obterValorCampo(String id_campo) {
		return getDriver().findElement(By.id(id_campo)).getAttribute("value");
	}

	/********* Radio e Check ************/
	public void esperarclicarCheckBox(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
		// getDriver().findElement(by).click();
	}

	public void clicarRadioByValue(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
		// getDriver().findElement(by).click();
	}

	public void clicarRadio(By by) {
		getDriver().findElement(by).click();
	}

	public void clicarRadio(String id) {
		clicarRadio(By.id(id));
	}

	public boolean isRadioMarcado(String id) {
		return getDriver().findElement(By.id(id)).isSelected();
	}

	public void clicarCheck(String id) {
		getDriver().findElement(By.id(id)).click();
	}

	public boolean isCheckMarcado(String id) {
		return getDriver().findElement(By.id(id)).isSelected();
	}

	/********* Combo ************/
	public void clicarComboBox(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
		// getDriver().findElement(by).click();
	}

	public void selecionarCombo(String id, String valor) {
		WebElement element = getDriver().findElement(By.id(id));
		Select combo = new Select(element);
		combo.selectByVisibleText(valor);
	}

	public void deselecionarCombo(String id, String valor) {
		WebElement element = getDriver().findElement(By.id(id));
		Select combo = new Select(element);
		combo.deselectByVisibleText(valor);
	}

	public String obterValorCombo(String id) {
		WebElement element = getDriver().findElement(By.id(id));
		Select combo = new Select(element);
		return combo.getFirstSelectedOption().getText();
	}

	public List<String> obterValoresCombo(String id) {
		WebElement element = getDriver().findElement(By.id("elementosForm:esportes"));
		Select combo = new Select(element);
		List<WebElement> allSelectedOptions = combo.getAllSelectedOptions();
		List<String> valores = new ArrayList<String>();
		for (WebElement opcao : allSelectedOptions) {
			valores.add(opcao.getText());
		}
		return valores;
	}

	public int obterQuantidadeOpcoesCombo(String id) {
		WebElement element = getDriver().findElement(By.id(id));
		Select combo = new Select(element);
		List<WebElement> options = combo.getOptions();
		return options.size();
	}

	public boolean verificarOpcaoCombo(String id, String opcao) {
		WebElement element = getDriver().findElement(By.id(id));
		Select combo = new Select(element);
		List<WebElement> options = combo.getOptions();
		for (WebElement option : options) {
			if (option.getText().equals(opcao)) {
				return true;
			}
		}
		return false;
	}

	public void selecionarComboPrime(String radical, String valor) {
		clicarRadio(By.xpath("//*[@id='" + radical + "_input']/../..//span"));
		clicarRadio(By.xpath("//*[@id='" + radical + "_items']//li[.='" + valor + "']"));
	}

	/********* Botao ************/

	public void clicarBotao(By by) {
		getDriver().findElement(by).click();
	}

	public void clicarDatePicker(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.elementToBeClickable(by)).click();
		// getDriver().findElement(by).click();
	}

	public void esperarElementoEClicarBotao(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
	}

	public void esperarEClicarBotao(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 2500);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
	}

	public void esperarElementofechar(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		System.out.println(some_element.until(ExpectedConditions.invisibilityOfElementLocated(by)));

	}

	public void esperarElementoText(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 300);
		System.out.println(some_element.until(ExpectedConditions.visibilityOfElementLocated(by)));

	}

	public void clicarBotao(String id) {
		clicarBotao(By.id(id));
	}

	public String obterValueElemento(String id) {
		return getDriver().findElement(By.id(id)).getAttribute("value");
	}

	/**** Menu esquerdo *****/

	public void selecionarItemMenu(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
	}

	public void fecharMenuEsquerdo(By by) {
		WebDriverWait some_element = new WebDriverWait(getDriver(), 100);
		some_element.until(ExpectedConditions.visibilityOfElementLocated(by)).click();
	}

	/********* Link ************/

	public void clicarLink(String link) {
		getDriver().findElement(By.linkText(link)).click();
	}

	/********* Textos ************/

	public String obterTexto(By by) {
		return getDriver().findElement(by).getText();
	}

	public String obterTexto(String id) {
		return obterTexto(By.id(id));
	}

	/********* Alerts ************/

	public String alertaObterTexto() {
		Alert alert = getDriver().switchTo().alert();
		return alert.getText();
	}

	public String alertaObterTextoEAceita() {
		Alert alert = getDriver().switchTo().alert();
		String valor = alert.getText();
		alert.accept();
		return valor;

	}

	public String alertaObterTextoENega() {
		Alert alert = getDriver().switchTo().alert();
		String valor = alert.getText();
		alert.dismiss();
		return valor;

	}

	public void alertaEscrever(String valor) {
		Alert alert = getDriver().switchTo().alert();
		alert.sendKeys(valor);
		alert.accept();
	}

	/********* Frames e Janelas ************/

	public void entrarFrame(String id) {
		getDriver().switchTo().frame(id);
	}

	public void sairFrame() {
		getDriver().switchTo().defaultContent();
	}

	public void trocarJanela(String id) {
		getDriver().switchTo().window(id);
	}

	/************** JS *********************/

	public Object executarJS(String cmd, Object... param) {
		JavascriptExecutor js = (JavascriptExecutor) getDriver();
		return js.executeScript(cmd, param);
	}

	/************** Tabela *********************/

	public void clicarBotaoTabela(String colunaBusca, String valor, String colunaBotao, String idTabela) {
		// procurar coluna do registro
		WebElement tabela = getDriver().findElement(By.xpath("//*[@id='elementosForm:tableUsuarios']"));
		int idColuna = obterIndiceColuna(colunaBusca, tabela);

		// encontrar a linha do registro
		int idLinha = obterIndiceLinha(valor, tabela, idColuna);

		// procurar coluna do botao
		int idColunaBotao = obterIndiceColuna(colunaBotao, tabela);

		// clicar no botao da celula encontrada
		WebElement celula = tabela.findElement(By.xpath(".//tr[" + idLinha + "]/td[" + idColunaBotao + "]"));
		celula.findElement(By.xpath(".//input")).click();

	}

	protected int obterIndiceLinha(String valor, WebElement tabela, int idColuna) {
		List<WebElement> linhas = tabela.findElements(By.xpath("./tbody/tr/td[" + idColuna + "]"));
		int idLinha = -1;
		for (int i = 0; i < linhas.size(); i++) {
			if (linhas.get(i).getText().equals(valor)) {
				idLinha = i + 1;
				break;
			}
		}
		return idLinha;
	}

	protected int obterIndiceColuna(String coluna, WebElement tabela) {
		List<WebElement> colunas = tabela.findElements(By.xpath(".//th"));
		int idColuna = -1;
		for (int i = 0; i < colunas.size(); i++) {
			if (colunas.get(i).getText().equals(coluna)) {
				idColuna = i + 1;
				break;
			}
		}
		return idColuna;
	}

	public void fecharBrowser() {
		DriverFactory.killDriver();
	}
}
