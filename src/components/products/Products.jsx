import pocom2 from '../../images/pocom2.jpg'
const Products = () => {
    return (
       <div className="container">
           <h2>Products</h2>
           <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2>POCO M2</h2>
                            <div className="p-2">
                                <img src={pocom2} style={{height: "300px"}}  />
                            </div>                           
                            <div className="row">
                                <div className="col-md-6 text-start">
                                    <span>Price: $280</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button className="btn btn-default btn-primary">Buy</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2>POCO M2</h2>
                            <div className="p-2">
                                <img src={pocom2} style={{height: "300px"}}  />
                            </div>                           
                            <div className="row">
                                <div className="col-md-6 text-start">
                                    <span>Price: $280</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button className="btn btn-default btn-primary">Buy</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2>POCO M2</h2>
                            <div className="p-2">
                                <img src={pocom2} style={{height: "300px"}}  />
                            </div>                           
                            <div className="row">
                                <div className="col-md-6 text-start">
                                    <span>Price: $280</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button className="btn btn-default btn-primary">Buy</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
           </div>
           
       </div>                   
    )
}

export default Products;