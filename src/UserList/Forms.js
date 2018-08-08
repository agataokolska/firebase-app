import React from 'react'
import PropTypes from 'prop-types'

const Forms = (props) => (
    <div>
        <input
            type="text"
            value={props.newUserName}
            onChange={props.newUserChangeHandler}
        />
    </div>
)

Forms.propTypes = {
    newUserName: PropTypes.string.isRequired,
    newUserChangeHandler: PropTypes.func.isRequired
}

export default Forms