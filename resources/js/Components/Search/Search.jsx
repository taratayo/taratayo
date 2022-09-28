import {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import {format} from 'date-fns';
function Search(props) {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <>
            <section className="ftco-section ftco-no-pb ftco-no-pt ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ftco-search d-flex justify-content-center">
                                <div className="row">
                                    <div className="col-md-12 nav-link-wrap">
                                        <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist"
                                             aria-orientation="vertical">
                                        </div>
                                    </div>
                                    <div className="col-md-12 tab-wrap">

                                        <div className="tab-content" id="v-pills-tabContent">

                                            <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel"
                                                 aria-labelledby="v-pills-nextgen-tab">
                                                <form action="#" className="search-property-1">
                                                    <div className="row no-gutters">
                                                        <div className="col-md d-flex">
                                                            <div className="form-group p-4 border-0">
                                                                <label htmlFor="#">Destination</label>
                                                                <div className="form-field">
                                                                    <div className="icon"><span
                                                                        className="fa fa-search"></span></div>
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Search place" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md d-flex">
                                                            <div className="form-group p-4">
                                                                <label htmlFor="#">Check-in date</label>
                                                                <div className="form-field">
                                                                    <div className="icon"><span
                                                                        className="fa fa-calendar"></span></div>
                                                                    <input onClick={() => setOpenDate(!openDate)} type="text"
                                                                           className="form-control checkin_date"
                                                                           placeholder="Check In Date" value={`${format(date[0].startDate, "MM/dd/yyyy")}`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md d-flex">
                                                            <div className="form-group p-4">
                                                                <label htmlFor="#">Check-out date</label>
                                                                <div className="form-field">
                                                                    <div className="icon"><span
                                                                        className="fa fa-calendar"></span></div>
                                                                    <input onClick={() => setOpenDate(!openDate)} type="text"
                                                                           className="form-control checkout_date"
                                                                           placeholder="Check Out Date" value={`${format(date[0].endDate, "MM/dd/yyyy")}`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md d-flex">
                                                            <div className="form-group p-4">
                                                                <label htmlFor="#">Adult</label>
                                                                <input type="text" className="form-control"
                                                                      value="1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md d-flex">
                                                            <div className="form-group p-4">
                                                                <label htmlFor="#">Kids</label>
                                                                <input type="text" className="form-control"
                                                                       value="0" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md d-flex">
                                                            <div className="form-group p-4">
                                                                <label htmlFor="#">Room</label>
                                                                <input type="text" className="form-control"
                                                                       value="1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md d-flex">
                                                            <div className="form-group d-flex w-100 border-0">
                                                                <div
                                                                    className="form-field w-100 align-items-center d-flex">
                                                                    <input type="submit" value="Search"
                                                                           className="align-self-stretch form-control btn btn-primary" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {openDate && <DateRange
                                                        editableDateInputs={true}
                                                        onChange={(item) => setDate([item.selection])}
                                                        moveRangeOnFirstSelection={false}
                                                        ranges={date}
                                                        className="date"
                                                    />}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;
