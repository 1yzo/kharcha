import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>This is from my AddExpensePage component.</p>
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help page.
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit page.
    </div>
);

const NotFoundPage = () => (
    <div>
        <h1>404! - <Link to="/">Go Home</Link></h1>
    </div>
);

const Header = () => (
    <header className="header">
        <h1>Expensify</h1>
        <NavLink to="/" exact={true}>Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/edit">Edit</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));