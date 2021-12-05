import React, { Component } from 'react';
import Header from '../Header/Header';
import Cookies from 'js-cookie';
import PersonalTableView from './PersonalTools/PersonalTableView';
import './Profile.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

class Profile extends Component {

    // State to get the username from the cookie
    state = {User: Cookies.get('user')};
    render() {
        return(
            <div className="profile-page">
                <Header />
                {/* Welcome message to the user */}

                <div>
                    <div>
                        <h1>
                            Welcome, {this.state.User}
                        </h1>
                    </div>
                    

                    <div className="info-container">
                        <div className="user-tools">
                            <PersonalTableView/>
                        </div>
                        <div className="fav-tools">
                            <label>Fav Tools</label>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;