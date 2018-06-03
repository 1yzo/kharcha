import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import totalSelector from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const total = numeral(totalSelector(props.expenses)).format('$0,0.00');

    return (
        <div>
            <h3>Viewing {props.expenses.length} {expenseWord} totalling {total}</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);