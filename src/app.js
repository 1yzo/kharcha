import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createdAt: 2   }));
store.dispatch(setTextFilter('bill'));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
