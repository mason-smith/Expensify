import React from 'react'

const Option = (props) => {
  return (
    <ul>
      <li>{ props.optionText } 
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

export default Option;