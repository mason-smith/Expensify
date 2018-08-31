import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <ListItem dense component={Link} button to={`/edit/${id}`}>
      {/* <Link to={`/edit/${id}`}> */}
      <ListItemText
        primary={description}
        secondary={moment(createdAt).format("MMMM Do, YYYY")}
      />{" "}
      {/* </Link> */}
      <p> {numeral(amount / 100).format("$0,0.00")}</p>
    </ListItem>
    <Divider />
  </div>
);

export default ExpenseListItem;
