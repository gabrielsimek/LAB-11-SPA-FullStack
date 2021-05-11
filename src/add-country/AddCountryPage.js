import { Component } from 'react';
import './AddCountryPage.css';
import CountryForm from '../common/CountryForm';
import { addResource } from '../utils/countries-api.js';

export default class AddCountryPage extends Component {
    handleAdd = async country => {
    //   const history = this.props.history;
     
      try {
        const addedCountry = await addResource(country);
        console.log(addedCountry);
        


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