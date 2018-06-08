import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { setIncludeTransfers } from '../actions/filters';

class ExpenseList extends React.Component { 
    state = {
        isChecked: true
    };

    onCheckboxToggle = (e) => {
        this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
        this.props.dispatch(setIncludeTransfers());
    }

    render() {
        return (
        <div className="content-container">
            <div className="list-header">
                <div style={{display: 'flex'}}>
                    Expenses
                    <div style={{width: '10px'}}/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input
                            className="checkbox"
                            type="checkbox" 
                            id="includeTransfers" 
                            checked={this.state.isChecked}
                            onChange={this.onCheckboxToggle}
                        />
                        <label htmlFor="includeTransfers">Hide Transfers</label>
                    </div>
                </div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {this.props.expenses.length === 0 && 
                <div className="list-item list-item--message">
                    <p>No Expenses</p>
                </div>}
                {this.props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);
