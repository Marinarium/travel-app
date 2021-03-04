import React from "react";

import './FirstScreen.scss';

export default function FirstScreen() {
    return (
        <section className="first-screen">
            <div className="first-screen__box">
                <div className="first-screen__content">
                    <h1 className="main-title first-screen__title">Travel <div className="accent">all over</div> the world</h1>
                    <p className="first-screen__moto">Find your own destination!</p>
                </div>
            </div>
        </section>
    )
}