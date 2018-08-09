import React from 'react'


const isLoggedIn = false

const Auth = (props) => (
    <div>
        {isLoggedIn ?
            
            props.children
            :
            'not logged in!!'
            }
    </div>
)

export default Auth