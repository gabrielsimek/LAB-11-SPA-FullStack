import { Component } from 'react';
import './CountryForm.css';

export default class CountryForm extends Component {
    state = {
      name: '',
      president: '',
      language: '',
      capital: '',
      url: '',
      population: undefined,
      hasBeach: ''

    //   name: 'Colombia',
    //   president: 'Iván Duque Márquez',
    //   language: 'Spanish',
    //   capital: 'Bogota',
    //   url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    //   population: 17684536,

    }

    handleSubmit = (e) => {
      e.preventDefault();

    }

    handleChangeName = (e) => {
      this.setState({ name: e.target.value });
    }
  
    handleChangePresident = (e) => {
      this.setState({ president: e.target.value });
    }
  
    handleChangeUrl = (e) => {
      this.setState({ url: e.target.value });
    }
  
    handleChangePopulation = (e) => {
      this.setState({ population: e.target.value });
    }
  
    handleChangeLanguage = (e) => {
      this.setState({ language: e.target.value });
    }
  
    handleChangeCapital = (e) => {
      this.setState({ capital: e.target.value });
    }
  
    handleChangeBeach = (e) => {
      
      this.setState({ hasBeach: e.target.value });
    }
  
    render() {
      const { name, president, language, capital, url, population, hasBeach } = this.state;
      return (
        <form className="CountryForm">
          <p>
            <label>
              <input placeholder="Name of Country" required
                value={name} onChange={this.handleChangeName}
              />
            </label>
          </p>

          <p>
            <label>
              <input placeholder="President of Country" required
                value={president} onChange={this.handleChangePresident}
              />
            </label>
          </p>

          <p>
            <label>
              <span>Language</span>
              <select name="Language" required 
                value={language} onChange={this.handleChangeLanguage}
              >
                <option>Select Language</option>
                <option>Spanish</option>
                <option>Portuguese </option>
                      
              </select>
            </label>
          </p>

          <p>
            <label>
              <input placeholder="Capital City" required
                value={capital} onChange={this.handleChangeCapital}
              />
            </label>
          </p>

          <p>
            <label>
              <input placeholder="Population of Country" required
                value={population} onChange={this.handleChangePopulation}
              />
            </label>
          </p>
    
          <p>
            <label>
              <input placeholder="URL for country flag" required
                value={url} onChange={this.handleChangeUrl}
              />
            </label>
          </p>
         
          <p>
            <label>
              <select
                name="beach" required 
                value={hasBeach} onChange={this.handleChangeBeach}
              >
                <option>Has Beach</option>
                <option value={true}>Yes</option>
                <option value={false}>No </option>
                 
              </select>
            </label>
          </p>
          
          <button>Add Country</button>
        </form>
      );
    }

}