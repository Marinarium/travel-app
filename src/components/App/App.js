import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstScreen from "../FirstScreen/FirstScreen";
import CountriesMenu from "../CountriesMenu/CountriesMenu";
import CountryPage from "../CountryPage/CountryPage";

import "./App.scss"

export default function App() {
    return (
        <Router>
            <div className="main-wrapper">
                <Header/>
                <main className="main">
                    <Route path="/" component={FirstScreen} exact />
                    <Route path="/" component={CountriesMenu} exact />
                    <Route path="/the-netherlands" component={CountryPage} exact />
                </main>
                <Footer/>
            </div>
        </Router>
    )
}
