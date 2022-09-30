import React from 'react'
import taratayo from '../../../../public/assets/taratayo.svg';

export default function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={taratayo} style={{width: "100px", height: "100px"}} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="4" y1="6" x2="20" y2="6"/>
                        <line x1="4" y1="12" x2="20" y2="12"/>
                        <line x1="4" y1="18" x2="20" y2="18"/>
                    </svg>
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#about.html" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#destination.html" className="nav-link">Destination</a></li>
                        <li className="nav-item"><a href="#hotel.html" className="nav-link">Hotel</a></li>
                        <li className="nav-item"><a href="#blog.html" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="#contact.html" className="nav-link"></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
