import uuid from 'uuid';

export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const editExpense = (id, edits) => ({
    type: 'EDIT_EXPENSE',
    id,
    edits
});

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
