import { Component } from 'react';
import './EditCountryPage.css';
import CountryForm from '../common/CountryForm';
import { getResource, updateResource } from '../utils/countries-api.js';


export default class EditCountryPage extends Component {
  state = {
    country: null
  }
  async componentDidMount() {
    const { match } = this.props;
    const country = await getResource(match.params.id);
    this.setState({ country: country });

   
  }
  handleUpdate = async country => {
    const { history } = this.props;

    try {
      
      const updatedCountry = await updateResource(country);
      console.log(updatedCountry);
      history.push(`/countries/${updatedCountry.id}`);
    }
    catch (err) {
      console.log(err.message);
    }
  }
   
 
  render() {
    const { country } = this.state;
    
    
    return (
      <div className="EditCountryPage">
        {country && <CountryForm country={country}
          onSubmit={this.handleUpdate}
        ></CountryForm>}
      </div>
    );
  }

}