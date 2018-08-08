import React from 'react'
import Default from './Default'


class UserList extends React.Component {
  state = {
    users: null,
    isLoadingUsers: false,

  }

  loadUsers = () => {
    fetch('https://fir-sandbox-65a96.firebaseio.com/.json')
      .then(response => response.json())
      .then(data => this.setState({
        users: data
      })
      )
  }

  render() {
    return (
      <div>
        <Default
          label={'Click'}
          clickHandler={this.loadUsers}
        />

      </div>
    );
  }
}

export default UserList
