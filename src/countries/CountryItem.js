import { Component } from 'react';
import './CountryItem.css';
import { Link } from 'react-router-dom';

export default class CountryItem extends Component {
  
  render() {
    const { country } = this.props;
    
    return (
      
      <li className="CountryItem">
        <Link to={`/countries/${country.id}`}>

          <h2>Country: {country.name}</h2>
          <img src={country.url} alt={`Flag of ${country.name}`}></img>
          <p>President: {country.president}</p>
          <p>Population: {country.population}</p>

        </Link>
      </li>
      
    );
  }

}