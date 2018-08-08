import React from 'react'
import Default from './Default'
import Loading from './Loading';
import List from './List'
import { mapObjectToArray } from '../utils.js'
import Forms from './Forms'

class UserList extends React.Component {
  state = {
    users: null,
    isLoadingUsers: false,
    newUserName: ''

  }

  loadUsers = () => {

    this.setState({
      isLoadingUsers: true
    })

    fetch('https://fir-sandbox-65a96.firebaseio.com/jfddl5-users.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: mapObjectToArray(data),        // users: Object.entries(data || {}).map(item => (
          isLoadingUsers: false             // { id: item[0], ...item[1] })), zamiast tego mamy mapObjectToArray z utils.js
        })
      })
  }


  newUserChangeHandler = (event) => {
   this.setState({
      newUserName: event.target.value
   }) 
  }

  render() {
    return (
      <div>
        {
          this.state.isLoadingUsers ?
            <Loading />
            :
            this.state.users ?
              <div>
                <Forms
                newUserName={this.state.newUserName}
                newUserChangeHandler={this.newUserChangeHandler}
                />
                <List
                  users={this.state.users}

                />
              </div>
              :
              <Default
                label={'Click'}
                clickHandler={this.loadUsers}
              />
        }
      </div>
    );
  }
}

export default UserList
