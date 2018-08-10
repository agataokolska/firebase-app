import React from 'react'
import LoginByGoogle from './LoginByGoogle';
import LoginByEmailAndPassword from './LoginByEmailAndPassword'
import CreateUserWithEmailAndPassword from './CreateUserWithEmailAndPassword'
const LogInForms = (props) => (
    <div>
        <LoginByGoogle
            onLoginClickHandler={props.onLoginByGoogleClickHandler}
        />
        <LoginByEmailAndPassword
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            onEmailChangedHandler={props.onEmailChangedHandler}
            onPasswordChangedHandler={props.onPasswordChangedHandler}
            onLoginClickHandler={props.onLoginByEmailClickHandler}
        />
        <CreateUserWithEmailAndPassword
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            onEmailChangedHandler={props.onEmailChangedHandler}
            onPasswordChangedHandler={props.onPasswordChangedHandler}
            onLoginClickHandler={props.onLoginByEmailClickHandler}
        />
    </div>
)

export default LogInForms