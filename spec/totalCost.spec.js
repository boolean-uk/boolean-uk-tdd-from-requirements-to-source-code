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

describe("Total cost", () => {
  it("returns total cost of items if there are items in the basket", () => {
    // setup
    const basket = [
      { name: "carrot", price: 0.5, quantity: 10 },
      { name: "potatoe", price: 0.1, quantity: 3 },
    ];
    // execute
    const result = totalCost(basket);
    // verify
    expect(result).toEqual(5.3);
  });

  it("returns 0 if there are no items in the basket", () => {
    // setup
    const basket = [];
    // execute
    const result = totalCost(basket);
    // verify
    expect(result).toEqual(0);
  });
});
