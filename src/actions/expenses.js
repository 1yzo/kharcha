import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {
            recipient = '',
            transactionType = '',
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { recipient, transactionType, description, note, amount, createdAt };

        return database.ref(`users/${getState().auth.uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e) => {
            console.log('error ', e);
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, edits) => ({
    type: 'EDIT_EXPENSE',
    id,
    edits
});

export const startEditExpense = (id, edits) => {
    return (dispatch, getState) => {
        return database.ref(`users/${getState().auth.uid}/expenses/${id}`).update(edits)
            .then(() => {
                dispatch(editExpense(id, edits));
            });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        return database.ref(`users/${getState().auth.uid}/expenses/${id}`).set(null).then(() => {
            dispatch(removeExpense({ id }));            
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        return database.ref(`users/${getState().auth.uid}/expenses`).once('value')
            .then((snapshot) => {
                const expenses = [];

                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                });
                
                dispatch(setExpenses(expenses));
            })
            .catch((e) => {
                console.log('error ', e);
            });
    };
};