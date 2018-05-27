import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        <ul>
            {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);
