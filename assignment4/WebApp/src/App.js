import React, { Component } from 'react';
import Header from './Header/Header'
import './App.css';
import TableView from './Table/Tools/TableView';
import Login from './Login/Login';
import PopUsersTable from './popRenters/popUsersTable';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";


class App extends Component {
  render()  {
    return (
      <div className="App">
        <Header/>

        <div className="app-body">
            <div className="table-View">
              <TableView/>
            </div>

            <div className="pop-users-view">
              <h1>Popular Users Near You</h1>
              <PopUsersTable/>
            </div>

        </div>

      </div>
    );
  }
}

export default App;
