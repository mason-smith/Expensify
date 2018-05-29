import React from 'react'

const Option = (props) => (
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
export default Option;