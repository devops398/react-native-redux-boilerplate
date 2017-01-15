import '../utils'
import API from '@services/api'
import FixtureAPI from '@services/fixture_api'
import R from 'ramda'

describe('Fixtures test', () => {
  it('All fixtures map to actual API', () => {
    const fixtureKeys = R.keys(FixtureAPI).sort()
    const apiKeys     = R.keys(API.create())

    const intersection = R.intersection(fixtureKeys, apiKeys).sort()

    // There is no difference between the intersection and all fixtures
    expect(R.equals(fixtureKeys, intersection)).to.equal(true)
  })
})