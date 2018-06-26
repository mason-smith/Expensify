import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm.jsx';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
 const wrapper = shallow(<ExpenseForm />);
 expect(wrapper).toMatchSnapshot();
});

// Should render ExpenseForm data

test('Should render ExpenseForm correctly with expense data', () => {
 const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
 expect(wrapper).toMatchSnapshot();
});
