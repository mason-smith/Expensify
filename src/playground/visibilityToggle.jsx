class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: 'Visibility App',
      visibility: false
    }
  }
  // METHODS \\
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div className="container">
        <h1> { this.state.title } </h1>
        <button
           className="btn waves-effect waves-light"
           onClick={this.handleToggleVisibility}>
          { !this.state.visibility ? 'Show Details' : 'Hide Details' }
        </button>
        <p>
          { !this.state.visibility ? '' : 'Hey! These are some details you can now see' }
        </p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
























//// == MAIN TITLE== \\
//const app = {
//  title: 'Visibility Toggle',
//}
//
//let visibility = false;
//
//const appRoot = document.getElementById('app')
//
//const toggleVisibility = () => {
//  visibility = !visibility;
//  render();
//}
//
//const render = () => {
//  const template = (
//    <div className="container">
//      <h1> { app.title } </h1>
//      <button
//         className="btn"
//         onClick={toggleVisibility}>
//        { !visibility ? 'Show Details' : 'Hide Details' }
//      </button>
//      <p>
//        { !visibility ? '' : 'Hey! These are some details you can now see' }
//      </p>
//    </div>
//  );
//  ReactDOM.render(template, appRoot);
//}
//
//render();