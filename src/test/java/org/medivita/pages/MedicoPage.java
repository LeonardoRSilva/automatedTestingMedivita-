package org.medivita.pages;

import org.medivita.core.BasePage;
import org.openqa.selenium.By;

public class MedicoPage extends BasePage {
	/************ espera o Toast fechar *************/

	public void esperarToastFechar(String text) {
		esperarElementofechar(By.xpath(text));
	}

	/************ clicar botao novo médico *******/

	public void clicarBotaoNovoMedico(String text) {
		esperarElementoEClicarBotao(By.xpath(text));
	}

	/********
	 * preencher TipoRegistro - EstadoRegistro - RegistroProfissional
	 **********/

	public void setTipoRegistro(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//MD-OPTION[@value='" + itemComboBox + "']"));
	}

	public void setEstadoRegistro(String elComboBox, String itemComboBox) {

		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//MD-OPTION[@value='" + itemComboBox + "']"));
	}

	public void setRegistroProfissional(String registroProfissional) {
		escreverByCssSeletor("registroProfissional", registroProfissional);
	}

	/******** preencher Nome - Rg - CPF **********/
	public void setNome(String nome) {
		escreverByCssSeletor("nome", nome);
	}

	public void setRg(String rg) {
		escreverByCssSeletor("rg", rg);
	}

	public void setCpf(String cpf) {
		escreverByCssSeletor("cpf", cpf);
	}

	/******** preencher DataNascimento - Cargo - Setor **********/
	public void setDataNascimento(String dataNascimento) {
		escreverByPlacehoder(By.xpath("(//INPUT[@class='md-datepicker-input'])[1]"), dataNascimento);
	}

	public void setCargo(String elComboBox, String itemComboBox) {
		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//MD-OPTION[contains(.,'" + itemComboBox + "')]"));
	}

	public void setSetor(String elComboBox, String itemComboBox) {
		selecionar_item_combobox(By.xpath("//MD-SELECT[@name='" + elComboBox + "']"),
				By.xpath("//MD-OPTION[contains(.,'" + itemComboBox + "')]"));
	}

	public void setEspecialidade(String especialidade) {
		escreverByCssSeletor("especialidade", especialidade);
	}

	/******** preencher DataAdmissao - Sexo - Cep - Numero **********/

	public void setDataAdmissao(String dataAdmissao) {
		escreverByPlacehoder(By.xpath("(//INPUT[@class='md-datepicker-input'])[2]"), dataAdmissao);
	}

	public void setTelefone(String telefone) {
		escreverByCssSeletor("telefone", telefone);
	}

	public void setSexo(String sexo) {
		System.out.println(sexo);
		clicarRadioByValue(By.xpath("//MD-RADIO-BUTTON[@value='" + sexo + "']"));

	}

	public void setCep(String cep) {
		escreverByCssSeletor("cep", cep);
	}

	public void setNumero(String numero) {
		escreverByCssSeletor("numero", numero);
	}

	/******** clicar botao proximo **********/
	public void clicarBotaoProximo(String nome) {
		esperarElementoEClicarBotao(By.xpath("//BUTTON[@aria-label='" + nome + "']"));
	}

	/******** preencher Email - Senha - salvar **********/
	public void setEmail(String email) {
		escreverByCssSeletor("email", email);
	}

	public void setSenha(String senha) {
		escreverByCssSeletor("senha", senha);
	}

	public void setStatus(String status) {
		System.out.println(status);
		clicarRadioByValue(By.xpath("//MD-RADIO-BUTTON[@value='" + status + "']"));

	}

	public void salvarMedico(String text) {
		esperarEClicarBotao(By.xpath("//BUTTON[@type='" + text + "']"));
	}

	/********
	 * logoff
	 * 
	 * @throws InterruptedException
	 **********/
	public void logoff(String text) throws InterruptedException {
		esperarEClicarBotao(By.xpath("//BUTTON[@aria-label='" + text + "']"));
		Thread.sleep(15000);
		fecharBrowser();
	}

	/******** selecionar comboBox **********/
	public void selecionar_item_combobox(By elCombo, By item) {
		clicarComboBox(elCombo);
		clicarComboBox(item);
	}

}
