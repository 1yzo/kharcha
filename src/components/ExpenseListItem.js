import React from 'React';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
            <p>{description}</p>
            <p>{amount}</p>
            <p>{createdAt}</p>
            <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
        </div>
    );
};

export default connect()(ExpenseListItem);