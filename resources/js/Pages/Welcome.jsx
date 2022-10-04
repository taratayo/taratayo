import React, { useState, useEffect } from 'react'
import Nav from '@/Components/Nav/Nav'
import Hero from "@/Components/Hero/Hero"
import Search from "@/Components/Search/Search"
import Listing from "@/Components/Listing/Listing"
import ListingData from "@/Components/Listing/data"
import Footer from "@/Components/Footer/Footer"

export default function Welcome(props) {
    const [items, setItems] = useState(ListingData);
    const [show, setShow] = useState(12)

    const slice_items = items.slice(0, show);


    const load_more = () => {
        setShow((prevValue) => prevValue + 6)
    }
    return (
        <>
            <Nav/>
            <Hero/>
            <Search/>
            <section className="ftco-section">
                <div className="container listing">
                    <div className="row">
                        <Listing getListData={slice_items} />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-1 text-center">
                        <div className="block-27 bg-orange-600 text-white rounded hover:bg-orange-700 hover:border-2 hover:text-white hover:border-orange-800 border-2 border-transparent shadow-md">
                            {show < ListingData.length && (
                                <button onClick={load_more} class="w-full p-2">Load More</button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
