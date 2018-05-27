import React from 'react';
import Option from './Option.jsx';

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

export default Options;