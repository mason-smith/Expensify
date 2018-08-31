import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <ListItem dense component={Link} button to={`/edit/${id}`}>
    {/* <Link to={`/edit/${id}`}> */}
    <ListItemText
      primary={description}
      secondary={moment(createdAt).format("MMMM Do, YYYY")}
    />{" "}
    {/* </Link> */}
    <p> {numeral(amount / 100).format("$0,0.00")}</p>
  </ListItem>
);

export default ExpenseListItem;
