import React from "react";

import './FirstScreenOfCountry.scss';

export default function FirstScreenOfCountry() {
    return (
        <section className="first-screen-country">
            <div className="first-screen-country__box">
                <div className="first-screen-country__content">
                    <div className="first-screen-country__frame">
                        <h1 className="first-screen-country__title">The Netherlands</h1>
                        <h2 className="first-screen-country__subtitle">The capital:</h2>
                        <p className="first-screen-country__capital">Amsterdam</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
