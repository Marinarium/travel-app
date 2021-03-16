import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import CountryService from "../../services/country-service";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstScreen from "../FirstScreen/FirstScreen";
import CountriesMenu from "../CountriesMenu/CountriesMenu";
import CountryPage from "../CountryPage/CountryPage";
import NotFound from "../NotFound/NotFound";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./App.scss";
import Profile from "../Profile/Profile";

export default class App extends Component {
  state = {
    currentCountry: "",
    currentISO: "",
    language: localStorage.getItem("language") || "eng",
    countriesInfo: [],
    countryName: [],
  };

  componentDidMount() {
    new CountryService().getAllCountries().then((data) =>
      this.setState({
        countriesInfo: data,
        countryName: data.map((el) =>
          el.country.country_eng.toLowerCase().split(" ").join("-")
        ),
      })
    );
  }

  onCountryChange = (country, iso) => {
    this.setState((country) => {
      return { currentCountry: country };
    });
    this.setState({ currentISO: iso });
  };

  onLanguageChange = (lang) => {
    this.setState({ language: lang });
    localStorage.setItem("language", lang);
  };

  render() {
    return (
      <Router>
        <div className="main-wrapper">
          <Switch>
            <Route path="/" exact>
              <Header
                page={"menu"}
                onLanguageChange={this.onLanguageChange}
                language={this.state.language}
                countriesInfo={this.state.countriesInfo}
                onCountryChange={this.onCountryChange}
              />
            </Route>
            <Route path="/:country">
              <Header
                page={"country"}
                onLanguageChange={this.onLanguageChange}
                language={this.state.language}
                countriesInfo={this.state.countriesInfo}
              />
            </Route>
          </Switch>
          <main className="main">
            <Switch>
              <Route path="/" exact>
                <FirstScreen language={this.state.language} />
                <CountriesMenu
                  onCountryChange={this.onCountryChange}
                  language={this.state.language}
                  countriesInfo={this.state.countriesInfo}
                />
              </Route>
              <Route
                path="/sign-in"
                exact
                render={(props) => {
                  return (
                    <SignIn props={props} language={this.state.language} />
                  );
                }}
              />
              <Route
                path="/sign-up"
                exact
                render={(props) => {
                  return (
                    <SignUp props={props} language={this.state.language} />
                  );
                }}
              />
              <Route
                path="/profile"
                exact
                render={(props) => {
                  return (
                    <Profile props={props} language={this.state.language} />
                  );
                }}
              />
              {this.props.history}
              {this.state.countryName.indexOf(
                window.location.pathname.slice(1)
              ) != -1 ? (
                <Route
                  path="/:country"
                  render={({ match }) => {
                    const { country } = match.params;
                    return (
                      <CountryPage
                        language={this.state.language}
                        countriesInfo={this.state.countriesInfo}
                        country={country}
                        iso={this.state.currentISO}
                      />
                    );
                  }}
                />
              ) : (
                <Route
                  render={() => {
                    return <NotFound language={this.state.language} />;
                  }}
                />
              )}
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
