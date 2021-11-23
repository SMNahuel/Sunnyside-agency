import React from "react";
import style from "./Home.module.css";
import Egg from "../../assets/desktop/image-transform.jpg"
import Cup from "../../assets/desktop/image-stand-out.jpg"
import Blueberry from "../../assets/desktop/image-graphic-design.jpg"
import Orage from "../../assets/desktop/image-photography.jpg"
import Milks from "../../assets/desktop/image-gallery-milkbottles.jpg"
import OrangePlate from "../../assets/desktop/image-gallery-orange.jpg"
import Cone from "../../assets/desktop/image-gallery-cone.jpg"
import Sugar from "../../assets/desktop/image-gallery-sugarcubes.jpg"
import Arrow from "../../assets/design/icon-arrow-down.svg"
import Emily from "../../assets/design/image-emily.jpg"
import Jennie from "../../assets/design/image-jennie.jpg"
import Thomas from "../../assets/design/image-thomas.jpg"

const Home = () => {
    return (
        <div>
            <div className={style.ContainerHeader}>
                <div className={style.Navbar}>
                    <p className={style.Sunny} href="#">sunnyside</p>
                    <div className={style.ButonNav}>
                        <p>About    </p>
                        <p>Services </p>
                        <p>Proyects </p>
                        <p>Contact  </p>
                    </div>
                </div>
                <h2>WE ARE CREATIVES</h2>
                <div className={style.Arrow}>
                    <img src={Arrow} alt="arrow-down" />
                </div>
            </div>

            <div class="d-flex flex-direction-row">
                <div class="w-50 d-flex flex-column justify-content-center align-items-left p-4 m-4">
                    <h2 className={style.Title}>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <p className={style.Learn}>Learn more <hr className={style.BorderYellow} /></p>
                </div>
                <img src={Egg} className={style.Header} class="w-50" alt="Header" />
            </div>

            <div class="d-flex flex-direction-row">
                <img src={Cup} className={style.Header} class="w-50" alt="Ilustrator" />
                <div class="w-50 d-flex flex-column justify-content-center align-items-left p-4 m-4">
                    <h2 className={style.Title}>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                    <p className={style.Learn}>Learn more <hr className={style.BorderRed} /></p>

                </div>
            </div>

            <div class="d-flex flex-direction-row">
                <img src={Blueberry} className={style.Header} alt="Ilustrator" class="w-50" />
                <img src={Orage} className={style.Header} alt="Ilustrator" class="w-50" />
            </div>

            <div class="container d-flex flex-column justify-content-center align-items-center">
                <h2 className={style.Client}>Client testimonials</h2>
                <div class="d-flex flex-direction-row p-4">
                    <div className={style.Testimonial}>
                        <img src={Emily} alt="Client" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h3>Emily R.</h3>
                        <p>Marketing Director</p>
                    </div>
                    <div className={style.Testimonial}>
                        <img src={Thomas} alt="Client" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h3>Thomas S.</h3>
                        <p>Chief Operating Officer</p>
                    </div>
                    <div className={style.Testimonial}>
                        <img src={Jennie} alt="Client" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h3>Jennie F.</h3>
                        <p>  Business Owner</p>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-direction-row">
                <img src={Milks} class="col-3" alt="Client" />
                <img src={OrangePlate} class="col-3" alt="Client" />
                <img src={Cone} class="col-3" alt="Client" />
                <img src={Sugar} class="col-3" alt="Client" />
            </div>

            <div>

            </div>
        </div>
    )
}

export default Home;