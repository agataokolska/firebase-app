import React from 'react'


const LoginByGoogle = (props) => (
    <div>
        <button
            onClick={props.onLoginClickHandler}
        >
            Zaloguj przez google
       </button>
    </div>
)

export default LoginByGoogle