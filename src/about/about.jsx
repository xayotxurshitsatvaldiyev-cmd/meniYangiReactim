import "./about.css"
import b1 from "./aboutImgs/1.png"
import b2 from "./aboutImgs/2.png"
import b3 from "./aboutImgs/3.png"
import b4 from "./aboutImgs/4.png"

const About = () => {
    return (
        <>

            <div className="heroBg py-3 my-5 d-none d-lg-block">
                <div className="container d-flex justify-content-between align-items-center py-5">
                    <div>
                        <h2 className="about-title">Helping a local</h2>
                        <h2 className="about-title-green">business reinvent itself</h2>
                        <p className="about-text">We reached here with our hard work and dedication</p>
                    </div>
                    <div>
                        <div className="mb-5">
                            <img src={b2} alt="" />
                            <img src={b1} alt="" />
                        </div>
                        <div>
                            <img src={b3} alt="" />
                            <img src={b4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="heroBg my-4">
                <div className="d-block d-lg-none container ">
                    <div className="text-center">
                        <h2 className="about-title">Helping a local</h2>
                        <h2 className="about-title-green">business reinvent itself</h2>
                        <p className="about-text">We reached here with our hard work and dedication</p>
                    </div>
                    <div className="text-center">
                        <div className="">
                            <img src={b2} alt="" className="py-3" />
                            <img src={b1} alt="" className="py-3" />
                        </div>
                        <div>
                            <img src={b3} alt="" className="py-3" />
                            <img src={b4} alt="" className="py-3" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About