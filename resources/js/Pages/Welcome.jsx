import React from 'react'
import Nav from '@/Components/Nav/Nav'
import Hero from "@/Components/Hero/Hero"
import Search from "@/Components/Search/Search"
import Listing from "@/Components/Listing/Listing"
import ListingData from "@/Components/Listing/data"
export default function Welcome(props) {
    const getListingData = ListingData.map(data => {
        return(
            <Listing
            key={data.id}
            {...data}
            />
        )
    })
    return (
        <>
            <Nav/>
            <Hero/>
            <Search/>
            <section className="ftco-section">
                <div className="container listing">
                    <div className="row">
                        {getListingData}
                    </div>
                </div>
            </section>
        </>
    );
}
