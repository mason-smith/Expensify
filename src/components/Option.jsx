import React from 'react'

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

export default Option;