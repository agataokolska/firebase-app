import React from 'react'
import LoginByGoogle from './LoginByGoogle';


const LogInForms = (props) => (
    <div> 
       <LoginByGoogle 
       onLoginClickHandler={props.onLoginClickHandler}
       />
    </div>
)

export default LogInForms