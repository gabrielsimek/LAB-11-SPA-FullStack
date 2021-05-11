import { Component } from 'react';
import './CountriesList.css';
import CountryItem from './CountryItem';

export default class CountriesList extends Component {
  
  render() {
    const { countries } = this.props;
    
    return (
      <ul className="CountriesList">
        {countries.reverse().map(country => {
          return <CountryItem key={country.id} country={country} />;
        })}

        
      </ul>
    );
  }

}