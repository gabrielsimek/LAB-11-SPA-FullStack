import { Component } from 'react';
import './CountriesPage.css';
import { getResources } from '../utils/countries-api.js';
import CountriesList from './CountriesList';

export default class CountriesPage extends Component {
    state = {
      countries: [],
      loading: true

    }

    async componentDidMount() {
      try { const countriesFromApi = await getResources();
        if (countriesFromApi) {
          this.setState({ countries: countriesFromApi });
        }
        else {
          console.log('network error');
        }
      }
  
      catch (err) {
        console.log(err);
      }

      finally {
        this.setState({ loading: false });
    
      }
    }
    render() {
      
      const { countries, loading } = this.state;
     
      return (
        <div className="CountriesPage">
          <h2>List of Countries</h2>

          <CountriesList countries={countries}/>
          {loading && <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"/>}
         

        </div>
      );
    }

}