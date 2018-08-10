import React from 'react'
import LogInForms from './LogInForms';
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLoggedIn: false,
        loginEmail: '',
        logInPassword: ''

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

    onEmailChangedHandler = event => this.setState({loginEmail:event.target.value})
    onPasswordChangedHandler = event => this.setState({logInPassword:event.target.value})

    onLoginByEmailClickHandler = () =>{
        auth.signInWithEmailAndPassword(this.state.loginEmail,this.state.logInPassword)
        .catch((error) =>{
            console.log(error)
            alert('błąd logowania!')
        })
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
                            onEmailChangedHandler: this.onEmailChangedHandler,
                            onPasswordChangedHandler: this.onPasswordChangedHandler,
                            onLoginByEmailClickHandler: this.onLoginByEmailClickHandler

                        }}
                        signUpProps={{
                            emailValue: this.state.loginEmail,
                            passwordValue: this.state.logInPassword,
                            onEmailChangedHandler: this.onEmailChangedHandler,
                            onPasswordChangedHandler: this.onPasswordChangedHandler,
                            onLoginByEmailClickHandler: this.onLoginByEmailClickHandler
                        }}
                    />
                }
            </div>
        )
    }
}

export default Auth