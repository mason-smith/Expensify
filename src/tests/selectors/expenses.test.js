import selectExpenses from '../../selectors/expenses.jsx';
import moment from 'moment';
import expenses from '../fixtures/expenses.js';

test('should filter by text value', () => {
 const filters = {
  text: 'e',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
 };
 const result = selectExpenses(expenses, filters);
 expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by date value', () => {
 const filters = {
  text: '',
  sortBy: 'date',
  startDate: moment(0),
  endDate: undefined
 };
 const result = selectExpenses(expenses, filters);
 expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate value', () => {
 const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: moment(0).add(2, 'days')
 };
 const result = selectExpenses(expenses, filters);
 expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by date value', () => {
 const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
 };
 const result = selectExpenses(expenses, filters);
 expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by amount value', () => {
 const filters = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
 };
 const result = selectExpenses(expenses, filters);
 expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
