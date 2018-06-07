import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({ transactionType, recipient, dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
            <Link className="list-item" to={`/edit/${id}`}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                    {transactionType === 'transfer' && <span className="list-item__recipient"><i className="material-icons">trending_flat</i>{recipient}</span>}
                </div>
                <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
            </Link>
        </div>
    );
};

export default ExpenseListItem;