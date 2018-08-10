import React from 'react'
import LoginByGoogle from './LoginByGoogle';
import LoginByEmailAndPassword from './LoginByEmailAndPassword'

const LogInForms = (props) => (
    <div>
        <LoginByGoogle
            onLoginClickHandler={props.onLoginClickHandler}
        />
        <LoginByEmailAndPassword
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            onEmailChangedHandler={props.onEmailChangedHandler}
            onPasswordChangeHandler={props.onPasswordChangeHandler}
            onLoginClickHandler={props.onLoginClickHandler}
        />
    </div>
)

export default LogInForms