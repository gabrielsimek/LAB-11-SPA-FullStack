import { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <header className="Header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/countries">Countries</NavLink>
      </header>
    );
  }

}
 
export default Header;