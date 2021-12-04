import React, { Component } from 'react';
import Header from './Header';
import './User.css';
import Cookies from 'js-cookie';
import UserTableView from './Table/UserTableView';

class User extends Component {
    state = {User: Cookies.get('user')};
    render() {
        console.log(this.state.User);
        return(
            <div className="profile-page">
                <Header />
                <div className="app-body">
                    <div className="table-View">
                        <UserTableView/>
                     </div>

                </div>
            </div>
        );
    }
}

export default User;