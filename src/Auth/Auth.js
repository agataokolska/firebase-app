import React from 'react'
import LogInForms from './LogInForms';
import {auth} from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user) {
                console.log('logged in')
            }
            else {
                console.log('not logged')
            }
        })
    }
    onLoginClickHandler = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        return (
            <div>
                {this.state.isLoggedIn ?

                    this.props.children
                    :
                    <LogInForms
                        onLoginClickHandler={this.onLoginClickHandler}
                    />
                }
            </div>
        )
    }
}

export default Auth