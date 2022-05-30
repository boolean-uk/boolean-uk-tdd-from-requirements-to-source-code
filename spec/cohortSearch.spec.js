/* eslint-disable no-undef */
// TEST CODE
// spec/cohortSearch.spec.js
const cohortSearch = require('../src/cohortSearch.js')

describe('Cohort Search', () => {
  it('returns cohort name if found', () => {
    // setup
    const cohortList = ['class 1', 'class 2']
    // execute
    const result = cohortSearch(cohortList, 'class 1')
    // verify
    expect(result).toEqual(true)
  })

  it('returns cohort name if not found', () => {
    // setup
    const cohortList = ['class 1', 'class 2']
    // execute
    const result = cohortSearch(cohortList, 'class 3')
    // verify
    expect(result).toEqual(false)
  })
})
