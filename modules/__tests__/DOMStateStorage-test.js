import expect from 'expect'
import { saveState, readState } from '../DOMStateStorage'

describe('dom state storage', function () {
  it('saves and reads state data', function () {
    saveState('key1', { id: 1 })
    expect(readState('key1')).toEqual({ id: 1 })

    saveState('key1', null)
    expect(readState('key1')).toEqual(null)

    saveState('key2', { id: 2 })
    expect(readState('key2')).toEqual({ id: 2 })

    expect(readState('key3')).toEqual(null)
  })
})
