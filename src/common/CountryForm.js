import { Component } from 'react';
import './CountryForm.css';
import { getLanguages } from '../utils/countries-api.js';

export default class CountryForm extends Component {
    state = {
  
      name: '',
      president: '',
      language: '',
      capital: '',
      url: '',
      // 'https://placekitten.com/200/300'
      population: '',
      hasBeach: true,
      languages: []


    }
    async componentDidMount() {
      const languages = await getLanguages();
      const { country } = this.props;
      this.setState({ languages: languages });
      if (country) {
        
        this.setState(country);
        // const { name, president, language, capital, url, population, hasBeach } = this.props;
        // this.setState({ name: name, president: president, language: language, capital: capital, url: url, population: population, hasBeach: hasBeach });
      }

    }

    handleSubmit = e => {
      e.preventDefault();
      const { onSubmit } = this.props;
      // const { name, president, language, capital, url, population, hasBeach } = this.state;
      // onSubmit({ name, president, language, capital, url, population, hasBeach });
      onSubmit(this.state);


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
      const { name, president, language, capital, url, population, hasBeach, languages } = this.state;
      const { country } = this.props;
      return (
        <form className="CountryForm" onSubmit={this.handleSubmit}>
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
                
                {languages.map((lang, index) => {
                  return <option key={index} value={lang.language}>{lang.language}</option>;
                })}
                
                      
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
              <span>Has Beach?</span>
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
          
          <button>{country ? 'Update' : 'Add'}</button>
        </form>
      );
    }

}