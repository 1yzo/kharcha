import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '123abc',
            description: 'test description',
            note: 'test note',
            amount: 100,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    delete action.type;
    expect(state).toEqual([...expenses, {...action.expense, id: '123abc'}]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        edits: { description: 'has been edited'}
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('has been edited');
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        edits: { description: 'has been edited'}
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
