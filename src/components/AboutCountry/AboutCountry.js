import React from "react";

import "./AboutCountry.scss"

export default function AboutCountry() {
    return (
        <section className="about-country">
            <h2 className="about-country__title"><span className="accent">About</span> Country</h2>
            <div className="about-country__desc">
                <p className="about-country__p">Netherlands, country located in northwestern Europe, also known as
                    Holland. “Netherlands” means low-lying country; the name Holland (from Houtland, or “Wooded Land”)
                    was originally given to one of the medieval cores of what later became the modern state and is still
                    used for 2 of its 12 provinces (Noord-Holland and Zuid-Holland). A parliamentary democracy under a
                    constitutional monarch, the kingdom includes its former colonies in the Lesser Antilles: Aruba,
                    Bonaire, Curaçao, Saba, Sint Eustatius, and Sint Maarten. The capital is Amsterdam and the seat of
                    government The Hague.
                </p>
                <p className="about-country__p"> The country is indeed low-lying and remarkably flat, with large
                    expanses of lakes, rivers, and canals. Some 2,500 square miles (6,500 square km) of the Netherlands
                    consist of reclaimed land, the result of a process of careful water management dating back to
                    medieval times. Along the coasts, land was reclaimed from the sea, and, in the interior, lakes and
                    marshes were drained, especially alongside the many rivers. All this new land was turned into
                    polders, usually surrounded by dikes. Initially, man power and horsepower were used to drain the
                    land, but they were later replaced by windmills, such as the mill network at Kinderdijk-Elshout, now
                    a UNESCO World Heritage site. The largest water-control schemes were carried out in the second half
                    of the 19th century and in the 20th century, when steam pumps and, later, electric or diesel pumps
                    came into use.
                </p>
            </div>
        </section>
    )
}