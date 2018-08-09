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
    onLoginClickHandler = () => {
       
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