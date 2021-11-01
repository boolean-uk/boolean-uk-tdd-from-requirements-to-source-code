// - require source code

/* 
- Steps writing tests:
    1. analyze user story and setup domain model(table with `Methods`, `Inputs`, `Data`, `Scenario`, 
      `Outputs` columns) 
    2. use three-step pattern to write tests: 
        2.1. Setup: setup variables that will be used in tests(`Inputs` from domain model)
        2.2. Execute: call the test function on the required src code variable
        2.3. Verify: check if the test call result meets expected Output.
    3. use jasmine syntax to describe and write the test:
        - describe("what is tested", function(
            it("spec for one Scenario", function(
                // test pattern from step 2
                expect(`expectation from `execute` part`).toEqual(`Outputs` from domain model)
            ))
        ))
*/
