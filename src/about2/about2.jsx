import "./about2.css"
import image from "./src/clientlar/image9.png"
import c1 from "./src/about2/clientlarImgs/client1.png"
import c2 from "./src/about2/clientlarImgs/client2.png"
import c3 from "./src/about2/clientlarImgs/client3.png"
import c4 from "./src/about2/clientlarImgs/client4.png"
import c5 from "./src/about2/clientlarImgs/client5.png"
import c6 from "./src/about2/clientlarImgs/client6.png"

const About2 = () => {
    return (
        <>
            <div className="heroBg py-5 my-5">
                <div className="d-lg-flex container d-none">
                    <div className="col-5 text-center">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-7 container">
                        <p className="opacity-75">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h2 className="about2-title">Tim Smith</h2>
                        <p className="opacity-75">British Dragon Boat Racing Association</p>
                        <div className="d-flex justify-content-between">
                            <img src={c1} alt="" />
                            <img src={c2} alt="" />
                            <img src={c3} alt="" />
                            <img src={c4} alt="" />
                            <img src={c5} alt="" />
                            <img src={c6} alt="" />
                            <button className="btn btn-text fw-bold">Meet all costumers</button>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none container text-center">
                    <div>
                        <img src={image} alt="" className="igm"/>
                        <p className="opacity-75">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h2 className="about2-title py-4">Tim Smith</h2>
                        <p className="opacity-75">British Dragon Boat Racing Association</p>
                        <div className="d-flex container justify-content-between align-items-center py-3">
                            <img src={c1} alt="" />
                            <img src={c2} alt="" />
                            <img src={c3} alt="" />
                            <img src={c4} alt="" />
                            <img src={c5} alt="" />
                            <img src={c6} alt="" />
                        </div>
                        <button className="btn btn-text fw-bold">Meet all costumers</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About2