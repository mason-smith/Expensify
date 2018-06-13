import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';
import configureStore from './store/configureStore.jsx';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses.jsx';
import { setTextFilter } from './actions/filters.jsx';
import getVisibleExpenses from './selectors/expenses.jsx';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
