import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ onClick, completed }) => (
    <input 
      type="checkbox" 
      checked={completed}
      onChange={onClick}
    />
)

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Checkbox