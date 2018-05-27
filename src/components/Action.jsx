import React from 'react';

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

export default Action