import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import CountriesPage from '../countries/CountriesPage';
import DetailPage from '../country/DetailPage';
import AddCountryPage from '../add-country/AddCountryPage';
import EditCountryPage from '../edit-country/EditCountryPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/countries" exact={true}
                render={routerProps => (
                  <CountriesPage {...routerProps} />
                )}
              />

              <Route path="/countries/add" exact={true}
                render={routerProps => (
                  <AddCountryPage {...routerProps} />
                )}
              />

              <Route path="/countries/:id" exact={true}
                render={routerProps => (
                  <DetailPage {...routerProps}/>
                )}
              />
              <Route path="/countries/:id/edit" exact={true}
                render={routerProps => (
                  <EditCountryPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
