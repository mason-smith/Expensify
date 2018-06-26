import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem.jsx';
import expenses from '../fixtures/expenses.js';

test('should render ExpenseListItem with expenses', () => {
 const wrapper = shallow(<ExpenseListItem expenses={expenses} />);
 expect(wrapper).toMatchSnapshot();
});
