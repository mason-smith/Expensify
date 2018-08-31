import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem.jsx";
import selectExpenses from "../selectors/expenses.jsx";
import List from "@material-ui/core/List";

export const ExpenseList = props => (
  <div className="content-container">
    <List component="nav">
      {props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </List>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
