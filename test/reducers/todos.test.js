import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze'
import todos from '../../src/reducers/todos'

test('test add todo with an empty initial state', () => {
	const stateBefore = []
	const action =  {
		type: 'ADD_TODO',
		id: 0,
		text: 'Test add'
	}
	const stateAfter = [
		{
			id: 0,
			text: 'Test add',
			completed: false
		}
	]

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(todos(stateBefore, action)).toEqual(stateAfter)
})

test('test add todo with a non-empty initial state', () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Test add',
			completed: false
		}
	]
	const action =  {
		type: 'ADD_TODO',
		id: 0,
		text: 'Test add 2'
	}
	const stateAfter = [
		{
			id: 0,
			text: 'Test add',
			completed: false
		},
		{
			id: 1,
			text: 'Test add 2',
			completed: false
		}
	]

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(todos(stateBefore, action)).toEqual(stateAfter)
})

test('test remove todo', () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Test 1',
			completed: false
		},
		{
			id: 1,
			text: 'Test 2',
			completed: false
		},
		{
			id: 2,
			text: 'Test 3',
			completed: false
		}
	]
	const action =  {
		type: 'REMOVE_TODO',
		id: 1
	}
	const stateAfter = [
		{
			id: 0,
			text: 'Test 1',
			completed: false
		},
		{
			id: 2,
			text: 'Test 3',
			completed: false
		}
	]

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(todos(stateBefore, action)).toEqual(stateAfter)
})

test('test remove todo with an empty state', () => {
	const stateBefore = []
	const action =  {
		type: 'REMOVE_TODO',
		id: 0
	}
	const stateAfter = []

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(todos(stateBefore, action)).toEqual(stateAfter)
})

test('test toggle todo', () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Test 1',
			completed: false
		},
		{
			id: 1,
			text: 'Test 2',
			completed: false
		},
		{
			id: 2,
			text: 'Test 3',
			completed: false
		}
	]
	const action =  {
		type: 'TOGGLE_TODO',
		id: 1
	}
	const stateAfter = [
		{
			id: 0,
			text: 'Test 1',
			completed: false
		},
		{
			id: 1,
			text: 'Test 2',
			completed: true
		},
		{
			id: 2,
			text: 'Test 3',
			completed: false
		}
	]

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(todos(stateBefore, action)).toEqual(stateAfter)
})

test('test toggle todo with an empty state', () => {
	const stateBefore = []
	const action =  {
		type: 'TOGGLE_TODO',
		id: 0
	}
	const stateAfter = []

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(todos(stateBefore, action)).toEqual(stateAfter)
})


