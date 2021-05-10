import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h2>Home Page</h2>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/countries'>See the List</NavLink>
      </div>
    );
  }

}