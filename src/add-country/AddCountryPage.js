import { Component } from 'react';
import './AddCountryPage.css';
import CountryForm from '../common/CountryForm';
import { addResource } from '../utils/countries-api.js';

export default class AddCountryPage extends Component {
    handleAdd = async (country) => {
      console.log(country);
      const history = this.props.history;
     
      try {
        const addedCountry = await addResource(country);
      
        history.push(`/countries/${addedCountry.id}`);
        //looks like SQL will only use the data that is specified in tables and ignore the rest so I don't need to push individual pieces of state
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