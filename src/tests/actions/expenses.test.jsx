import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    note: "My slick new wireless mouse!",
    amount: 39900,
    createdAt: 68723484
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(2);
    done();
  });
});

test("should add expense with defaults to database and store", () => {});

// test('should setup add expense action object with default values', () => {
//  const expenseData = {
//   description: '',
//   amount: 0,
//   createdAt: 0,
//   note: ''
//  };
//  const action = addExpense(expenseData);
//  expect(action).toEqual({
//   type: 'ADD_EXPENSE',
//   expense: {
//    ...expenseData,
//    id: expect.any(String)
//   }
//  });
// });