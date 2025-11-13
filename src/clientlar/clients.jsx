import "./clients.css"
import c1 from "./clientlarImgs/client1.png"
import c2 from "./clientlarImgs/client2.png"
import c3 from "./clientlarImgs/client3.png"
import c4 from "./clientlarImgs/client4.png"
import c5 from "./clientlarImgs/client5.png"
import c6 from "./clientlarImgs/client6.png"
import c7 from "./clientlarImgs/client7.png"

const Clients = () => {
    return (
        <>
            <div className="container py-5 d-none d-md-block">
                <div className="text-center">
                    <h2 className="clients-title">Our Clients</h2>
                    <p className="opacity-50">We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="d-flex justify-content-around py-4 align-items-center">
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c1} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c7} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c2} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c3} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c4} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c5} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src={c6} alt="" />
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none container">

                <div className="text-center pt-5">
                    <h2 className="clients-title">Our Clients</h2>
                    <p className="opacity-50">We have been working with some Fortune 500+ clients</p>
                </div>

                <div className="d-flex justify-content-around py-4 align-items-center">
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src={c1} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src={c7} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around py-4 align-items-center">
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src={c2} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src={c3} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around py-4 align-items-center">
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src={c4} alt="" />
                    </div>
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src={c5} alt="" />
                    </div>
                </div>
                <div className="text-center mg-hover px-3 py-1 rounded-4">
                    <img src={c6} alt="" />
                </div>
            </div>
        </>
    )
}

export default Clients