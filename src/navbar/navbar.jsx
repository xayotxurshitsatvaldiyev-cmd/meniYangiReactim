import { useState } from "react"
import rasm from "./Logo.png"
import menu from "./menu.png"
import "./navbar.css"

function Navbar() {

    const [ochilgan, setOchilgan] = useState(false)

    const bosganda = () => {
        setOchilgan(!ochilgan)
    }



    return (
        <>

            <nav className="nb d-flex align-items-center justify-content-around justify-content-lg-evenly navbar navbar-expand-lg">
                <div>
                    <img src={rasm} alt="" />
                </div>

                <ul className="d-lg-flex justify-content-around d-none">
                    <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Home</a></li>
                    <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Service</a></li>
                    <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Feature</a></li>
                    <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Product</a></li>
                    <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Testimonial</a></li>
                    <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">FAQ</a></li>
                </ul>

                <div className="d-none d-lg-block">
                    <button className="btn bc px-4 me-2">Login in</button>
                    <button className="btn b px-4">Sing in</button>
                </div>

                <div className="d-block d-lg-none" onClick={bosganda}>
                    <img src={menu} alt="" />
                </div>

                {ochilgan && (
                    <div className={`mobile-navbar ${ochilgan ? "show" : ""} d-lg-none`}>
                        <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Home</a></li>
                        <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Service</a></li>
                        <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Feature</a></li>
                        <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Product</a></li>
                        <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">Testimonial</a></li>
                        <li className="list-unstyled mt-3 mx-2 p-1 p-xl-2 lc rounded-3"><a href="" className="text-decoration-none">FAQ</a></li>
                    </div>
                )}
            </nav>

        </>
    )
}

export default Navbar