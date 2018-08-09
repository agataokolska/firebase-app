import React from 'react'
import LogInForms from './LogInForms';


class Auth extends React.Component {
    state = {
        isLoggedIn: false
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