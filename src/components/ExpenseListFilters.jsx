import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters.jsx";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export class ExpenseListFilters extends React.Component {
  state = {
    sort: "",
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="input-section">
        <div className="content-container">
          <div className="input-group__item">
            <TextField
              label="Search your Expenses"
              margin="normal"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          {/* <FormControl>
            <InputLabel htmlFor="filter">Filter by: </InputLabel>
            <Select
              value={this.state.sort}
              onChange={this.onSortChange}
              inputProps={{
                name: "sort",
                id: "filter"
              }}
            >
              <MenuItem value="date">Filter by Date</MenuItem>
              <MenuItem value="amount">Filter by Amount</MenuItem>
            </Select>
          </FormControl> */}
          <div className="input-group__item">
            <select
              className="select-text"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Filter by Date</option>
              <option value="amount">Filter by Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
