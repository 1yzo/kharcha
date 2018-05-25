import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1>Expensify</h1>
        <NavLink to="/" exact={true}>Dashboard</NavLink>
        <NavLink to="/create">Create Expense</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
);

export default Header;