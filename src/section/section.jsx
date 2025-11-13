import "./section.css"

const Section = () => {
    return (
        <>

            <div className="d-lg-flex container align-items-center d-none">

                <div className="col-5 text-center">
                    <img src="./public/Frame 35.png" alt="" />
                </div>
                <div className="col-7 nmn">
                    <h2 className="col-9 section-title">
                        The unseen of spending three years at Pixelgrade
                    </h2>
                    <p className="col-10 opacity-75 my-4 section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button className="btn px-5 py-3 mt-2 rounded-2">Learn more</button>
                </div>

            </div>

            <div className="d-block d-lg-none text-center container">
                <hr />
                <div>
                    <h2 className="section-title py-4">
                        The unseen of spending three years at Pixelgrade
                    </h2>
                </div>
                <div className="igm">
                    <img src="./public/Frame 35.png" alt="" />
                </div>
                <div className="nmn">
                    <p className="opacity-75 my-4 section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button className="btn px-5 py-3 mt-2 rounded-2">Learn more</button>
                </div>
            </div>

        </>
    )
}

export default Section