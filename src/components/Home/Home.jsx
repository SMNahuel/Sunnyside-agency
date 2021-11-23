import React from "react";
import style from "./Home.module.css";
import Header from "../../assets/desktop/image-header.jpg"
import Egg from "../../assets/desktop/image-transform.jpg"
import Cup from "../../assets/desktop/image-stand-out.jpg"
import Blueberry from "../../assets/desktop/image-graphic-design.jpg"
import Orage from "../../assets/desktop/image-photography.jpg"
import Milks from "../../assets/desktop/image-gallery-milkbottles.jpg"
import OrangePlate from "../../assets/desktop/image-gallery-orange.jpg"
import Cone from "../../assets/desktop/image-gallery-cone.jpg"
import Sugar from "../../assets/desktop/image-gallery-sugarcubes.jpg"

const Home = () => {
    return (
        <div>
            <div className={style.Header}>
                <img src={Header} className={style.Header} />
            </div>

            <div class="d-flex flex-direction-row">
                <div class="w-50">
                    <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <p>Learn more</p>
                </div>
                <img src={Egg} className={style.Header} class="w-50" />
            </div>

            <div class="d-flex flex-direction-row">
                <img src={Cup} className={style.Header} class="w-50" />
                <div class="w-50">
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                    <p>Learn more</p>
                </div>
            </div>

            <div class="d-flex flex-direction-row">
                <img src={Blueberry} className={style.Header} class="w-50" />
                <img src={Orage} className={style.Header} class="w-50" />
            </div>

            <div class="container d-flex flex-column justify-content-center align-items-center">
                <p>Client testimonials</p>
                <div class="d-flex flex-direction-row">
                    <div class="w-30">
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    </div>
                    <div class="w-30">
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    </div>
                    <div class="w-30">
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-direction-row">
                <img src={Milks} class="col-3" />
                <img src={OrangePlate} class="col-3" />
                <img src={Cone} class="col-3" />
                <img src={Sugar} class="col-3" />
            </div>

            <div>

            </div>
        </div>
    )
}

export default Home;