# From Domain Model to Tests

## Learning Objectives

- Use a Domain Model to create tests

## Intro

```
As a user,
So I can find a specific cohort,
I want to search a list of all cohorts by a cohort name.
```

Here's a **domain model** based on the above **user story**

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| cohortSearch(cohortList, cohortName) | cohortList(@String[]), cohortName(@String) | If cohort name is in array | true
| | | If cohort name is not in array | false

Your teacher will demonstrate creating tests based on this domain model, following the 3 stage process

1. **Setup**
2. **Execute**
3. **Verify**

```js
// spec/cohortSearch.spec.js
const cohortSearch = require('../src/cohortSearch.js')

describe("Cohort Search", () => {
  it("returns cohort name if found", () => {
    // setup
    const cohortList = ["class 1", "class 2"]
    // execute
    const result = cohortSearch(cohortList, "class 1")
    // verify
    expect(result).toEqual(true)
  })

  it("returns cohort name if not found", () => {
    // setup
    const cohortList = ["class 1", "class 2"]
    // execute
    const result = cohortSearch(cohortList, "class 3")
    // verify
    expect(result).toEqual(false)
  })
})
```

## Instructions

```
As a supermarket shopper,
So that I can pay for items at checkout items,
I'd like to be able to know the total cost of items in my basket.

As an organised individual,
So that I can evaluate my shopping habits,
I'd like to see a receipt that includes line items (quantity, name, cost) and the total cost.
```

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| totalCost(basket) | basket(@Item[]) | Item(@Object), properties: _name(@String), price(@Number), quantity(@Number))_ | If there are items | @Number
| | | |If no items | @Number (0)
| createReceipt(basket) | basket(@Item[]) | Item(@Object), properties: _name(@String), price(@Number), quantity(@Number))_ | If there are items | @String
| | | |If no items | @String

Create a set of tests based on your domain model. The **user stories** and a possible **domain model** have been provided for you to use.

- [ ] Install the node package `jasmine` as a development dependency
- [ ] use the documentation to initialize the project with jasmine
- [ ] Create a spec file, giving it an appropriate name. Remember to end the file name with `.spec.js` so that the test-runner finds and runs it.
- [ ] Create your tests and watch them fail by running `npx jasmine`
- [ ] **Remember! Do not write source code yet!**

## Further

- [ ] explain how the `#describe()` and `#it()` methods work
- [ ] explain how Jasmine finds the test code to execute

## Resources

- [Jasmine Setup](https://jasmine.github.io/setup/nodejs.html)
- [Creating a test-suite in Jasmine](https://jasmine.github.io/tutorials/your_first_suite)
- [Arrange, Act, Assert](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
- [Running Jasmine tests](https://jasmine.github.io/setup/nodejs.html#running-tests)
