import "./clients.css"

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
                        <img src="./public/clientlar/client1.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src="./public/clientlar/client7.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src="./public/clientlar/client2.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src="./public/clientlar/client3.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src="./public/clientlar/client4.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src="./public/clientlar/client5.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-2 rounded-4">
                        <img src="./public/clientlar/client6.png" alt="" />
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
                        <img src="./public/clientlar/client1.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src="./public/clientlar/client7.png" alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around py-4 align-items-center">
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src="./public/clientlar/client2.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src="./public/clientlar/client3.png" alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around py-4 align-items-center">
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src="./public/clientlar/client4.png" alt="" />
                    </div>
                    <div className="mg-hover px-3 py-1 rounded-4">
                        <img src="./public/clientlar/client5.png" alt="" />
                    </div>
                </div>
                <div className="text-center mg-hover px-3 py-1 rounded-4">
                    <img src="./public/clientlar/client6.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Clients