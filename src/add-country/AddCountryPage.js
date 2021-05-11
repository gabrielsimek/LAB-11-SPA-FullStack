import { Component } from 'react';
import './AddCountryPage.css';
import CountryForm from '../common/CountryForm';

export default class AddCountryPage extends Component {
  
  render() {
    return (
      <div className="AddCountryPage">
      Add Country Page
        <CountryForm/>
        
      </div>
    );
  }

}