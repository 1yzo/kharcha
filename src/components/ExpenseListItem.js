import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
            <Link className="list-item" to={`/edit/${id}`}>
                <div>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                </div>
                <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
            </Link>
        </div>
    );
};

export default ExpenseListItem;