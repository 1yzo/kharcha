import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import totalSelector from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => {
    const total = numeral(totalSelector(props.expenses)).format('$0,0.00');
    const summary = `Viewing ${props.expenseCount} expenses totalling ${total}`;
    return (
        <div>
            <h3>{summary}</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);