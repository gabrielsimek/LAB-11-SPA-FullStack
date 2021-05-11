import { Component } from 'react';
import './DetailPage.css';
import { getResource } from '../utils/countries-api.js';

export default class DetailPage extends Component {
  state = {
    country: null
  }
  async componentDidMount() {
    const { match } = this.props;
    const countryFromApi = await getResource(match.params.id);
    // console.log(countryFromApi);
    if (countryFromApi) {
      this.setState({ country: countryFromApi });
    } else {
      console.log('network error');
    }
  }
  render() {
    
    const { country } = this.state;
    if (!country) return null;
    console.log(country.name);
    return (
        
      <li className="DetailPage">
        <h2>Country: {country.name}</h2>
        <img src={country.url} alt={`Flag of ${country.name}`}></img>
        <p>President: {country.president}</p>
        <p>Population: {country.population}</p>
        <p>User: {country.userId}</p>
      </li>
    );
  }

}