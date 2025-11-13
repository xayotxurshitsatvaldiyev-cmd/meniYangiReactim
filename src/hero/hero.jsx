import "./hero.css"
import hero from "./hero.png"

function Hero() {
    return (
        <div className="heroBg py-3 py-xl-5">
            <div className="container d-none d-lg-flex justify-content-around align-items-center py-5">
                <div>
                    <h1 className="hero-title">Lessons and insights <div>from 8 years</div></h1>
                    <p className="my-3">Where to grow your business as a photographer: site or social media?</p>
                    <button className="btn mt-2 hbb px-4 py-2 rounded-1">Register</button>
                </div>
                <div>
                    <img src={hero} alt="" />
                </div>
            </div>

            <div className="d-block d-lg-none pt-2 px-1">
                <div className="ttx">
                    <h1 className="hero-title py-5">Lessons and insights <div>from 8 years</div></h1>
                    <p className="my-3 hero-text py-3">Where to grow your business as a photographer: site or social media?</p>
                    <button className="btn w-75 mt-2 hbb px-4 py-2 rounded-1">Register</button>
                </div>
                <div className="text-center py-3 igm">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero