import React from 'react';
import LazyLoad from 'react-lazyload'

function Listing({getListData}) {

    return (
        <>
            {getListData.map((data, index) => (
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated" key={index}>
                <div className="project-wrap">
                    <LazyLoad>
                    <a href="#" className="img" style={{backgroundImage: `url(${data.imageUrl})`}}>
                        <span className="price">{data.id}</span>
                    </a>
                    </LazyLoad>
                    <div className="text p-4">
                        <h3><a href="#"> {data.title }</a></h3>
                        <p className="location"><span className="fa fa-map-marker"></span> { data.location }</p>
                        <ul>
                            <li><span className="flaticon-shower"></span>{ data.shower }</li>
                            <li><span className="flaticon-king-size"></span>{ data.beds }</li>
                            <li><span className="flaticon-mountains"></span>{ data.distance }</li>
                        </ul>
                    </div>
                </div>
            </div>
            ))}
        </>
    );
}

export default Listing;

