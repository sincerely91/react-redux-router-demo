import React from "react";

const Addresses = () => {

    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col-md-12">
                    <h1>Addresses</h1>            
                    <button className="btn btn-outline-primary float-end"><i class="bi bi-plus-circle-fill"></i> New Address</button>
                </div>
            </div>
                       
            <div className="row">
                <div className="col-md-4">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">John Dev</h5>
                            <h6 className="card-subtitle mb-2 text-muted">8965745812</h6>
                            <p className="card-text">678, 2nd Floor, Sendra vikas colony, Sikandara, Lucknow</p>
                            <a href="#" className="card-link">Edit</a>
                            <a href="#" className="card-link">Delete</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">John Dev</h5>
                            <h6 className="card-subtitle mb-2 text-muted">8965745812</h6>
                            <p className="card-text">678, 2nd Floor, Sendra vikas colony, Sikandara, Lucknow</p>
                            <a href="#" className="card-link">Edit</a>
                            <a href="#" className="card-link">Delete</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">John Dev</h5>
                            <h6 className="card-subtitle mb-2 text-muted">8965745812</h6>
                            <p className="card-text">678, 2nd Floor, Sendra vikas colony, Sikandara, Lucknow</p>
                            <a href="#" className="card-link">Edit</a>
                            <a href="#" className="card-link">Delete</a>
                        </div>
                    </div>
                </div>                                       
               
            </div>

        </div>
    )
}

export default Addresses;