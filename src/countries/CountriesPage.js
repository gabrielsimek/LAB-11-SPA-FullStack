import { Component } from 'react';
import './CountriesPage.css';
import { getResources } from '../utils/countries-api.js';
import CountriesList from './CountriesList';

export default class CountriesPage extends Component {
    state = {
      countries: []

    }

    async componentDidMount() {
      const countriesFromApi = await getResources();
      if (countriesFromApi) {
        this.setState({ countries: countriesFromApi });
      }
      else {
        console.log('network error');
      }
    }

    render() {
      
      const { countries } = this.state;
      console.log(countries);
      return (
        <div className="CountriesPage">
          <h2>List of Countries</h2>

          <CountriesList countries={countries}/>
         

        </div>
      );
    }

}