import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setEndDate } from '../actions/filters';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            recipient: props.expense ? props.expense.recipient : '',
            transactionType: props.expense ? props.expense.transactionType : 'transfer',
            calendarFocuesd: false,
            error: ''
        };
    }
    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            const error = 'Please provide description and amount.';
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                transactionType: this.state.transactionType,
                recipient: this.state.recipient,
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onRecipientChange = (e) => {
        const recipient = e.target.value;
        this.setState(() => ({ recipient }));
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    
    onTransactionTypeChange = (e) => {
        const transactionType = e.target.value;
        this.setState(() => ({ transactionType }));
    };
    
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <select className="select" value={this.state.transactionType} onChange={this.onTransactionTypeChange}>
                    <option value="transfer">Transfer</option>
                    <option value="purchase">Purchase</option>
                </select>
                {this.state.transactionType === 'transfer' &&
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Recipient"
                    autoFocus
                    onChange={this.onRecipientChange}
                    value={this.state.recipient}
                />
                }
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    onChange={this.onDescriptionChange}
                    value={this.state.description}
                />
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    onChange={this.onNoteChange}
                    value={this.state.note}
                >
                </textarea>
                <div>
                    <button className="button">{this.props.isEditing ? 'Save Expense' : 'Add Expense'}</button>
                </div>
            </form>
        );
    }
}
