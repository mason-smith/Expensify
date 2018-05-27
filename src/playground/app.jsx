class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [] 
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ 
      options: prevState.options.concat([option]) 
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div className="app">
        <Nav />
        <div className="container">
          < Header
            subtitle={ subtitle }/>
          < Action
            hasOptions={this.state.options.length > 0}
            handlePick={ this.handlePick }
          />
          < Options
            options={ this.state.options }
            handleDeleteOptions={ this.handleDeleteOptions }
            handleDeleteOption={ this.handleDeleteOption }
          />
          < AddOption 
            handleAddOption={this.handleAddOption}
          />
        </div>
      </div>
    )
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue-grey darken-3">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div className="center-align">
      <h1>{ props.title }</h1>
      {props.subtitle && <h2>{ props.subtitle }</h2>}
    </div>
  )
}

Header.defaultProps= {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div className="center-align">
      <button 
        className="
          purple darken-4
          waves-effect 
          waves-light 
          btn" 
        onClick={ props.handlePick }
        disabled={ !props.hasOptions }
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      { 
        props.options.map((option) => (
          < Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      
      <Option />
      
      <button 
        className="
          purple darken-4
          waves-effect 
          waves-light 
          btn" 
        onClick={props.handleDeleteOptions}>
          Remove All
      </button>
    </div>
  )
}

const Option = (props) => {
  return (
    <ul className="collection">
      <li className="collection-item">{ props.optionText } 
        <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        > 
          Remove 
        </button>
      </li>
    </ul>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() =>  ({ error }));
    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
       {this.state.error && <p> { this.state.error } </p>}
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" />
          <button
            className="
            waves-effect 
            waves-light 
            btn
            purple darken-4"
          >Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(< IndecisionApp />, document.getElementById('app'));