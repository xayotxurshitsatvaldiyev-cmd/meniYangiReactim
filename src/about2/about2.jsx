import "./about2.css"

const About2 = () => {
    return (
        <>
            <div className="heroBg py-5 my-5">
                <div className="d-lg-flex container d-none">
                    <div className="col-5 text-center">
                        <img src="./public/image 9.png" alt="" />
                    </div>
                    <div className="col-7 container">
                        <p className="opacity-75">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h2 className="about2-title">Tim Smith</h2>
                        <p className="opacity-75">British Dragon Boat Racing Association</p>
                        <div className="d-flex justify-content-between">
                            <img src="./public/clientlar/client1.png" alt="" />
                            <img src="./public/clientlar/client7.png" alt="" />
                            <img src="./public/clientlar/client2.png" alt="" />
                            <img src="./public/clientlar/client3.png" alt="" />
                            <img src="./public/clientlar/client4.png" alt="" />
                            <img src="./public/clientlar/client5.png" alt="" />
                            <button className="btn btn-text fw-bold">Meet all costumers</button>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none container text-center">
                    <div>
                        <img src="./public/image 9.png" alt="" className="igm"/>
                        <p className="opacity-75">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h2 className="about2-title py-4">Tim Smith</h2>
                        <p className="opacity-75">British Dragon Boat Racing Association</p>
                        <div className="d-flex container justify-content-between align-items-center py-3">
                            <img src="./public/clientlar/client1.png" alt="" />
                            <img src="./public/clientlar/client7.png" alt="" />
                            <img src="./public/clientlar/client2.png" alt="" />
                            <img src="./public/clientlar/client3.png" alt="" />
                            <img src="./public/clientlar/client4.png" alt="" />
                            <img src="./public/clientlar/client5.png" alt="" />
                        </div>
                        <button className="btn btn-text fw-bold">Meet all costumers</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About2