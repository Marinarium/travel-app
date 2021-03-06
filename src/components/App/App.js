import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstScreen from "../FirstScreen/FirstScreen";
import CountriesMenu from "../CountriesMenu/CountriesMenu";
import CountryPage from "../CountryPage/CountryPage";

import "./App.scss"
import NotFound from "../NotFound/NotFound";

export default function App() {
    return (
        <Router>
            <div className="main-wrapper">
                <Header/>
                <main className="main">
                    <Switch>
                        <Route path="/" exact>
                            <FirstScreen />
                            <CountriesMenu />
                        </Route>
                        <Route path="/the-netherlands" component={CountryPage} exact />
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    )
}
