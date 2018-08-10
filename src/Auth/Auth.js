import React from 'react'
import LogInForms from './LogInForms';
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLoggedIn: false
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

    render() {
        return (
            <div>
                {this.state.isLoggedIn ?

                    this.props.children
                    :
                    <LogInForms
                        onLoginByGoogleClickHandler={this.onLoginByGoogleClickHandler}
                    />
                }
            </div>
        )
    }
}

export default Auth