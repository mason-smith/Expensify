class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = JSON.parse(stringCount, 10);

    if(!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }
  // METHODS \\
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return(
      <div className="container">
        <h1>Count: {this.state.count}</h1>
        <button 
          onClick={ this.handleAddOne }
          className="
            btn-floating 
            btn-large 
            waves-effect 
            waves-light 
            red">
              <i className="
                material-icons">add</i>
        </button>
        <button 
          onClick={ this.handleMinusOne }
          className="
            btn-floating 
            btn-large 
            waves-effect 
            waves-light 
            red">
              <i className="
                material-icons">remove</i>
        </button>
        <br />
        <button 
          onClick={ this.handleReset }
          className="
            waves-effect 
            waves-light 
            btn
            red">
              <i className="
                material-icons 
                right ">redo</i>
            Reset
          </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
