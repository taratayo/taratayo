import React from 'react';
function Listing(props) {
    return (
        <>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                <div className="project-wrap">
                    <a href="#" className="img" style={{backgroundImage: `url(${props.imageUrl})`}}>
                        <span className="price">$550/person</span>
                    </a>
                    <div className="text p-4">
                        <h3><a href="#"></a></h3>
                        <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao,
                            Philippines</p>
                        <ul>
                            <li><span className="flaticon-shower"></span>2</li>
                            <li><span className="flaticon-king-size"></span>3</li>
                            <li><span className="flaticon-mountains"></span>Near Mountain</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;

