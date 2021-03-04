import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstScreen from "../FirstScreen/FirstScreen";
import CountriesMenu from "../CountriesMenu/CountriesMenu";

export default function App() {
    return (
        <div className="main-wrapper">
            <Header/>
            <main className="main">
                <FirstScreen/>
                <CountriesMenu/>
            </main>
            <Footer/>
        </div>
    )
}