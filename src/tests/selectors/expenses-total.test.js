import selectExpensesTotal from '../../selectors/expenses-total.jsx';
import expenses from '../fixtures/expenses.js';

test('should return 0 if no expenses', () => {
 const res = selectExpensesTotal([]);
 expect(res).toBe(0);
});

test('should correctly addup a single expense', () => {
 const res = selectExpensesTotal([expenses[0]]);
 expect(res).toBe(195);
});

test('should correctly addup multiple expense', () => {
 const res = selectExpensesTotal(expenses);
 expect(res).toBe(114195);
});
