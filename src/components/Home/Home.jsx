import React from "react";
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
import Facebook from "../../assets/icons/icon-facebook.svg"
import Instagram from "../../assets/icons/icon-instagram.svg"
import Twitter from "../../assets/icons/icon-twitter.svg"
import Pinterest from "../../assets/icons/icon-pinterest.svg"

const Home = () => {
    return (
        <>
        {/* -----------------------------Header ----------------------------- */}
            <div className="ContainerHeader">
                <div className="d-none d-lg-flex Navbar">
                    <p className="Sunny" href="#">sunnyside</p>
                    <div className="ButonNav">
                        <p>About    </p>
                        <p>Services </p>
                        <p>Proyects </p>
                        <p>Contact  </p>
                    </div>
                </div>
                <h2>WE ARE CREATIVES</h2>
                <div className="Arrow">
                    <img src={Arrow} alt="arrow-down" />
                </div>
            </div>

            {/* ----------------------------- Egg  -----------------------------*/}
            <div className="d-flex flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-row">
                <div className="d-flex flex-column justify-content-center textContainer">
                    <h2 className="Title">Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <p className="Learn">Learn more</p>
                    <hr className="BorderYellow" />
                </div>
                <img src={Egg} alt="egg" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6" />
            </div>

            {/* ----------------------------- Cup ----------------------------- */}
            <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row">
                <img src={Cup} className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6" alt="Ilustrator" />
                <div className="d-flex flex-column justify-content-center textContainer">
                    <h2 className="Title">Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                    <p className="Learn">Learn more </p>
                    <hr className="BorderRed" />
                </div>
            </div>

            {/* ----------------------------- Orange Blueberry -----------------------------*/}
            <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row">
                <img src={Blueberry} className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 Header" alt="Ilustrator"  />
                <img src={Orage}  className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 Header" alt="Ilustrator" />
            </div>


            {/* ----------------------------- Testimonial -----------------------------*/}
            <div className="container d-flex flex-column flex-sm-column flex-md-column flex-lg-column justify-content-center align-items-center">
                <h2 className="Client">Client testimonials</h2>
                <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row">
                    <div className="Testimonial row">
                        <img src={Emily} alt="Client" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h3>Emily R.</h3>
                        <p>Marketing Director</p>
                    </div>
                    <div className="Testimonial row">
                        <img src={Thomas} alt="Client" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h3>Thomas S.</h3>
                        <p>Chief Operating Officer</p>
                    </div>
                    <div className="Testimonial row ">
                        <img src={Jennie} alt="Client" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h3>Jennie F.</h3>
                        <p>  Business Owner</p>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <img src={Milks} className="col-3" alt="Client" />
                <img src={OrangePlate} className="col-3" alt="Client" />
                <img src={Cone} className="col-3" alt="Client" />
                <img src={Sugar} className="col-3" alt="Client" />
            </div>
            
            {/* ----------------------------- Footer -----------------------------*/}
            <div className="Footer">
                <div className="d-flex aling-items-center justify-content-center">
                    <p className="SunnyFooter" href="#">sunnyside</p>

                </div>
                <div className="d-flex aling-items-center justify-content-center">
                    <p className="footerP">About    </p>
                    <p className="footerP">Services </p>
                    <p className="footerP">Proyects </p>
                </div>
                <div className="d-flex aling-items-center justify-content-center">
                    <img src={Facebook} className="ms-4" alt="icon-social-facebook" />
                    <img src={Instagram} className="ms-4" alt="icon-social-instagram" />
                    <img src={Twitter} className="ms-4" alt="icon-social-twitter" />
                    <img src={Pinterest} className="ms-4" alt="icon-social-pinterest" />
                </div>
            </div>
        </>
    )
}

export default Home;