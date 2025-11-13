import "./about.css"

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
                            <img src="./public/about/2.png" alt="" />
                            <img src="./public/about/1.png" alt="" />
                        </div>
                        <div>
                            <img src="./public/about/3.png" alt="" />
                            <img src="./public/about/4.png" alt="" />
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
                            <img src="./public/about/2.png" alt="" className="py-3" />
                            <img src="./public/about/1.png" alt="" className="py-3" />
                        </div>
                        <div>
                            <img src="./public/about/3.png" alt="" className="py-3" />
                            <img src="./public/about/4.png" alt="" className="py-3" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About