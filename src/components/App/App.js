import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstScreen from "../FirstScreen/FirstScreen";
import CountriesMenu from "../CountriesMenu/CountriesMenu";
import CountryPage from "../CountryPage/CountryPage";
import NotFound from "../NotFound/NotFound";

import "./App.scss"

export default class App extends Component {

    state = {
        currentCountry: '',
        currentISO: ''
    }

    onCountryChange = (country, iso) => {
        // this.setState({country: country});
        this.setState((country) => {
            return {currentCountry: country}
        });
        this.setState({currentISO: iso});
    }

    // _apiBase = 'https://travel-app-backend-rsschool.herokuapp.com';
    //
    // componentDidMount() {
    //     fetch(`${this._apiBase}/countries/${this.state.currentISO}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     countryData: result[0]
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }


    render() {
        const {error, isLoaded, countryData} = this.state;

        return (
            <Router>
                <div className="main-wrapper">
                    <Header/>
                    <main className="main">
                        <Switch>
                            <Route path="/" exact>
                                <FirstScreen/>
                                <CountriesMenu onCountryChange={this.onCountryChange}/>
                            </Route>
                            <Route path="/:country"
                                   render={({match}) => {
                                       const {country} = match.params;
                                       return <CountryPage
                                           country={country}
                                           iso={this.state.currentISO}
                                       />
                                   }}
                            />
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
