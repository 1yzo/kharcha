import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import totalSelector from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const total = numeral(totalSelector(props.expenses)).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{total}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);