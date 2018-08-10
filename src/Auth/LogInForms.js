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
            emailValue={props.logInProps.emailValue}
            passwordValue={props.logInProps.passwordValue}
            onEmailChangedHandler={props.logInProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.logInProps.onPasswordChangedHandler}
            onLoginClickHandler={props.logInProps.onLoginByEmailClickHandler}
        />
        <CreateUserWithEmailAndPassword
            emailValue={props.signUpProps.emailValue}
            passwordValue={props.signUpProps.passwordValue}
            onEmailChangedHandler={props.signUpProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.signUpProps.onPasswordChangedHandler}
            onSignUpClickHandler={props.signUpProps.onSignUpClickHandler}
        />
    </div>
)

export default LogInForms