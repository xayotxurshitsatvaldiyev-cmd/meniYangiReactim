import "./section2.css"
import pana from "./pana.png"

const Section2 = () => {
    return (
        <>
            <div className="d-lg-flex container align-items-center d-none">

                <div className="col-5 text-center">
                    <img src={pana} alt="" />
                </div>
                <div className="col-7 nmn">
                    <h2 className="col-9 section-title">
                        How to design your site footer like we did
                    </h2>
                    <p className="col-10 opacity-75 my-4 section-text">
                       Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <button className="btn px-5 py-3 mt-2 rounded-2">Learn more</button>
                </div>

            </div>

            <div className="d-block d-lg-none text-center container">
                <hr />
                <div>
                    <h2 className="section-title py-4">
                        How to design your site footer like we did
                    </h2>
                </div>
                <div className="igm">
                    <img src={pana} alt="" />
                </div>
                <div className="nmn">
                    <p className="opacity-75 my-4 section-text">
                       Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <button className="btn px-5 py-3 mt-2 rounded-2">Learn more</button>
                </div>
            </div>
        </>
    )
}

export default Section2