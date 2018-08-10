import React from 'react'
import LogInForms from './LogInForms';
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLoggedIn: false,
        loginEmail: '',
        logInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isLoggedIn: true
                })
            }
            else {
                this.setState({
                    isLoggedIn: false
                })
            }
        })
    }

    onLoginByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => {
                console.log('error', error)
                alert('błąd logowania')
            })
    }
    logInFunctions = {
        onEmailChangedHandler: event => this.setState({ loginEmail: event.target.value }),
        onPasswordChangedHandler: event => this.setState({ logInPassword: event.target.value }),

        onLoginByEmailClickHandler: () => {
            auth.signInWithEmailAndPassword(this.state.loginEmail, this.state.logInPassword)
                .catch((error) => {
                    console.log(error)
                    alert('błąd logowania!')
                })
        }
    }

    signUpFunctions = {
        onEmailChangedHandler: event => this.setState({ signUpEmail: event.target.value }),
        onPasswordChangedHandler: event => this.setState({ signUpPassword: event.target.value }),
        onSignUpByEmailClickHandler: () => {
            auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
                .catch((error) => {
                    console.log(error)
                    alert('błąd logowania!')
                })
        }
    }


    render() {
        return (
            <div>
                {this.state.isLoggedIn ?

                    this.props.children
                    :
                    <LogInForms
                        onLoginByGoogleClickHandler={this.onLoginByGoogleClickHandler}
                        logInProps={{
                            emailValue: this.state.loginEmail,
                            passwordValue: this.state.logInPassword,
                            onEmailChangedHandler: this.logInFunctions.onEmailChangedHandler,
                            onPasswordChangedHandler: this.logInFunctions.onPasswordChangedHandler,
                            onLoginByEmailClickHandler: this.logInFunctions.onLoginByEmailClickHandler

                        }}
                        signUpProps={{
                            emailValue: this.state.signUpEmail,
                            passwordValue: this.state.signUpPassword,
                            onEmailChangedHandler: this.signUpFunctions.onEmailChangedHandler,
                            onPasswordChangedHandler: this.signUpFunctions.onPasswordChangedHandler,
                            onSignUpClickHandler: this.signUpFunctions.onSignUpByEmailClickHandler
                        }}
                    />
                }
            </div>
        )
    }
}

export default Auth