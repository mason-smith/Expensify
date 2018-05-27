console.log('app.js is running')

// == MAIN TITLE== \\
const app = {
  title: 'Indecision App',
  subtitle: 'When you just can\'t do it on your own.',
  options: []
}

const onFormSubmit = () => {
  
  const option = e.target.elements.option.value;
  
  if (option) {
    app.options.push(option);
    
    e.target.elements.option.value = '';
  }
  render();
}

const clearOptions = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
      <h1> { app.title } </h1>
      { app.subtitle && <p>{ app.subtitle }</p> }
      <p>
        { app.options.length > 0 ? 'Here are your options' : 'No Options' }
      </p>
      <button 
        disabled={app.options.length === 0 }
        onClick={onMakeDecision}>What should I do?</button>
      <button onClick={clearOptions}>Remove All</button>
      <ol>
        { 
          app.options.map((option) => <li key={option}>{option}</li>
          )
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();