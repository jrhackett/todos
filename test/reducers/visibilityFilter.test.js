import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze'
import visibilityFilter from '../../src/reducers/visibilityFilter'

test('test initial visibility filter', () => {
  const stateBefore = 'SHOW_ALL'
  const action =  {
    type: 'RANDOM', // random action here just to ensure that SHOW_ALL persists'
  }
  const stateAfter = 'SHOW_ALL'

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
})

test('test changing initial state to show completed', () => {
  const stateBefore = 'SHOW_ALL'
  const action =  {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
  }
  const stateAfter = 'SHOW_COMPLETED'

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
})

test('test changing initial state to show active', () => {
  const stateBefore = 'SHOW_ALL'
  const action =  {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ACTIVE'
  }
  const stateAfter = 'SHOW_ACTIVE'

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
})

test('test changing initial state to show all', () => {
  const stateBefore = 'SHOW_ACTIVE'
  const action =  {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ALL'
  }
  const stateAfter = 'SHOW_ALL'

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
})