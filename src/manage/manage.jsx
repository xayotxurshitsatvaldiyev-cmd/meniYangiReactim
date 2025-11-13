import "./manage.css"
import icon1 from "./manageImgs/icon.png"
import icon2 from "./manageImgs/iconN1.png"
import icon3 from "./manageImgs/iconN2.png"

const Manage = () => {
    return (
        <>

            <div className="container">
                <hr className="opacity-75" />
            </div>

            <div className="container py-5 d-none d-md-block">
                <div className="text-center py-4">
                    <h2 className="manage-title">Manage your entire community <br /> in a single system</h2>
                    <p className="manage-text opacity-75">Who is Nextcent suitable for?</p>
                </div>
                <div className="d-flex justify-content-around align-items-center text-center">
                    <div className="manage-section container">
                        <img src={icon1} alt="" />
                        <h3 className="">Membership Organisation</h3>
                        <p className="opacity-75">Our membership management software provides full automation of membership renewals and payments</p>
                        <hr className="opacity-25" />
                    </div>
                    <div className="manage-section container">
                        <img src={icon2} alt="" />
                        <h3 className="">National Assocations</h3>
                        <p className="opacity-75">Our membership management software provides full automation of membership renewals and payments</p>
                        <hr className="opacity-25" />
                    </div>
                    <div className="manage-section container">
                        <img src={icon3} alt="" />
                        <h3 className="">Clubs and Groubs</h3>
                        <p className="opacity-75">Our membership management software provides full automation of membership renewals and payments</p>
                        <hr className="opacity-25" />
                    </div>
                </div>
            </div>

            <div className="container d-block d-md-none text-center">
                <div className="text-center py-4">
                    <h2 className="manage-title">Manage your entire community <br /> in a single system</h2>
                    <p className="manage-text opacity-75">Who is Nextcent suitable for?</p>
                </div>
                <div className="manage-section py-3">
                    <img src={icon1} alt="" />
                    <h3 className="">Membership Organisation</h3>
                    <p className="opacity-75">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="manage-section py-3">
                    <img src={icon2} alt="" />
                    <h3 className="">National Assocations</h3>
                    <p className="opacity-75">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="manage-section py-3">
                    <img src={icon3} alt="" />
                    <h3 className="">Clubs and Groubs</h3>
                    <p className="opacity-75">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>

        </>
    )
}

export default Manage