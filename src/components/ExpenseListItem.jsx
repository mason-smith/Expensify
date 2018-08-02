import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
 <div>
  <h3>
   <NavLink to={`/edit/${id}`} exact={true}>
    {' '}
    {description}{' '}
   </NavLink>
  </h3>
  <p>
   {' '}
   {numeral(amount / 100).format('$0,0.00')}
   -
   {moment(createdAt).format('MMMM Do, YYYY')}{' '}
  </p>
 </div>
);

export default ExpenseListItem;
