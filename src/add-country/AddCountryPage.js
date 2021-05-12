import { Component } from 'react';
import './AddCountryPage.css';
import CountryForm from '../common/CountryForm';
import { addResource } from '../utils/countries-api.js';

export default class AddCountryPage extends Component {
    handleAdd = async ({ name, president, language, capital, url, population, hasBeach }) => {
      const history = this.props.history;
     
      try {
        const addedCountry = await addResource({ name, president, language, capital, url, population, hasBeach });
      
        history.push(`/countries/${addedCountry.id}`);
        // console.log(name, president, language, capital, url, population, hasBeach);
        


      }
      catch (err) {
        console.log(err);
        

      }
     


    }
  
    render() {
      return (
        <div className="AddCountryPage">
      
          <CountryForm onSubmit={this.handleAdd}/>
        
        </div>
      );
    }

}