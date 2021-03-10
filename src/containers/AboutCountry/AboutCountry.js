import React from "react";

import "./AboutCountry.scss"

export default function AboutCountry({description}) {
    return (
        <section className="about-country">
            <h2 className="about-country__title"><span className="accent">About</span> Country</h2>
            <div className="about-country__desc">
                <p className="about-country__p">
                    {description}
                </p>
            </div>
        </section>
    )
}