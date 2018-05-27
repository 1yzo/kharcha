import React from 'React';

const ExpenseListItem = ({ description, amount, createdAt }) => {
    return (
        <div>
            <p>{description}</p>
            <p>{amount}</p>
            <p>{createdAt}</p>
        </div>
    );
};

export default ExpenseListItem;