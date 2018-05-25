import React from 'react';

const EditExpensePage = (props) => {
    console.log(props.match.params.id);
    return (
        <div>
            This is from my edit page.
        </div>
    );
};

export default EditExpensePage;