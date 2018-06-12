package org.medivita.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		// "Features/dir_a/medico.feature"
		"Features/dir_b/escalaatendimento.feature"
		// "Features/dir_c/gerarhorariosagendamento.feature"
		// "Features/dir_d/agendamento.feature"

}, /* the path of the feature files */
		glue = { "org.medivita.stepDefinitions" }, // the path of
													// the step
		// definition files
		format = { "pretty", "html:test-outout", "json:json_output/cucumber.json",
				"junit:junit_xml/cucumber.xml" }, monochrome = true, /*
																		 * display
																		 * the
																		 * console
																		 * output
																		 * in a
																		 * proper
																		 * readable
																		 * format
																		 */
		strict = true, // it will check if any step is not defined in step
						// definition file
		dryRun = false // to check the mapping is proper between feature file
						// and step def file
// tags = { "@novo_medico" }
)

public class TestRunner {

}

// ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as
// @SmokeTest OR @RegressionTest
// ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests
// tagged as @SmokeTest AND @RegressionTest
