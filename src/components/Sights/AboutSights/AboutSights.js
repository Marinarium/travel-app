import React from "react";

import "./AboutSights.scss";
import SightItem from "../SightItem/SightItem";

export default function AboutSights({sights}) {

    const allSights = sights.map(
        (item, i) => {
            return (
                <SightItem
                    key={i}
                    title={item.name_eng}
                    info={item.info_eng}
                />
            );
        }
    );

    return (
        <section className="about-sights">
            {allSights}
        </section>
    )
}