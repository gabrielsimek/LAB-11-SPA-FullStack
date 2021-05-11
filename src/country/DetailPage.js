import { Component } from 'react';
import './DetailPage.css';
import { getResource } from '../utils/countries-api.js';
import { deleteResource } from '../utils/countries-api.js';

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

   handleDelete = async () => {
     const { match, history } = this.props;
     const countryToDeleteId = match.params.id;
     if (!window.confirm(`Delete ${countryToDeleteId}`)) return;

     try {
       const deletedCountry = await deleteResource(countryToDeleteId);
       console.log(deletedCountry);
       history.push(`/countries`);
      

     }
     catch (err) {
       console.log(err);

     }

   }
   render() {
    
     const { country } = this.state;
     if (!country) return (<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"/>);
     console.log(country.name);
     return (
        
       <li className="DetailPage">
         <h2>Country: {country.name}</h2>
         <img src={country.url} alt={`Flag of ${country.name}`}></img>
         <p>President: {country.president}</p>
         <p>Population: {country.population}</p>
         <p>User: {country.userId}</p>
         <button onClick={this.handleDelete}>Delete</button>
       </li>
      
     );
   }

}