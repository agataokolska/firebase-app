import React from 'react'
import Default from './Default'
import Loading from './Loading';
import List from './List'
import { mapObjectToArray } from '../utils.js'
import Forms from './Forms'
import {database} from '../firebaseConfig'


class UserList extends React.Component {
  state = {
    users: null,
    isLoadingUsers: false,
    newUserName: ''

  }

  initUsersSync = () => {

    this.setState({
      isLoadingUsers: true
    })

    //fetch('https://fir-sandbox-65a96.firebaseio.com/jfddl5-users.json')
    database.ref('/jfddl5-users').on(
      'value',
      snapshot =>{
        const data = snapshot.val()

        this.setState({
          users: mapObjectToArray(data),        // users: Object.entries(data || {}).map(item => (
          isLoadingUsers: false             // { id: item[0], ...item[1] })), zamiast tego mamy mapObjectToArray z utils.js
        })
      }
    )
  }


  newUserChangeHandler = (event) => {
    this.setState({
      newUserName: event.target.value
    })
  }

  onAddNewUserClick = () => {
    const request = {
      method: 'POST',
      body: JSON.stringify({ name: this.state.newUserName })
    }

    this.setState({       //dodany setState przed fetchem wyswietla 'Loading" zanim fetch pobierze dane
      isLoadingUsers: true
    })

    fetch('https://fir-sandbox-65a96.firebaseio.com/jfddl5-users.json', request)
      .then(response => {
       // this.loadUsers()
        this.setState({
          newUserName: ''
        })
      })
  }

  onEditUserHandler = (key, newName) => {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ name: newName })
    }

    // this.setState({
    //   isLoadingUsers: true
    // })

   return fetch(`https://fir-sandbox-65a96.firebaseio.com/jfddl5-users/${key}.json`, request)
      .then(response => {
       // this.loadUsers()
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
                  onAddNewUserClick={this.onAddNewUserClick}
                />
                <List
                  users={this.state.users}
                  onEditUserHandler={this.onEditUserHandler}

                />
              </div>
              :
              <Default
                label={'Click'}
                clickHandler={this.initUsersSync}
              />
        }
      </div>
    );
  }
}

export default UserList
