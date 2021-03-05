import React from "react";

import "./Video.scss"

import video from "./video/the-netherlands.mp4";

export default function Video() {
    return (
        <section className="video">
            <h3 className="video__title"><span className="accent">Just look</span> at It!</h3>
            <div className="video__box">
                <video className="video__player" width="320" height="240" controls>
                    <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>
            </div>
        </section>
    )
}
