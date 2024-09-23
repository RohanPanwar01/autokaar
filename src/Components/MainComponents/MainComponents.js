import React, { useEffect, useState } from 'react';
import "./MainComponents.css";
import GuestReview from '../GuestReview/GuestReview';
import Clockcomponents from '../Clockcomponents/Clockcomponents';

function MainComponents() {
  const [summaryData, setSummaryData] = useState({
    totalBookings: 0,
    totalEarnings: 0,
    availablePropertiesCount: 0
  });

  useEffect(() => {
    // Fetch data from the summary API
    fetch('http://sher9522.caribbeaneaze.com/api/owner/summary')
      .then(response => response.json())
	
      .then(data => {
        setSummaryData(data);
		console.log('dataa',data)
      })
      .catch(error => {
        console.error('Error fetching summary data:', error);
      });
  }, []);

  const bookingData = [
    // { id: "BKG-0001", name: "Tommy Bernal", email: "tommy@example.com", aadharNumber: "12414786454545", roomType: "Double", number: "631-254-6480", status: "INACTIVE" },
    // { id: "BKG-0002", name: "Ellen Thill", email: "ellen@example.com", aadharNumber: "5456223232322", roomType: "Double", number: "830-468-1042", status: "INACTIVE" },
    // { id: "BKG-0003", name: "Corina Kelsey", email: "corina@example.com", aadharNumber: "454543232625", roomType: "Single", number: "508-335-5531", status: "INACTIVE" },
    // { id: "BKG-0004", name: "Carolyn Lane", email: "carolyn@example.com", aadharNumber: "2368989562621", roomType: "Double", number: "262-260-1170", status: "INACTIVE" },
    // { id: "BKG-0005", name: "Denise", email: "denise@example.com", aadharNumber: "3245455582287", roomType: "Single", number: "570-458-0070", status: "INACTIVE" },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12 mt-5">
                <Clockcomponents />
                <h3 className="page-title mt-3">Hello Sher! <img style={{ width: "40px", height: "40px", marginTop: "-8px" }} src="https://img.icons8.com/emoji/48/waving-hand-light-skin-tone.png" alt="waving-hand-light-skin-tone" /></h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div>
                      <h3 className="card_widget_header">{summaryData.totalBookings}</h3>
                      <h6 className="text-muted">Total Booking</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div>
                      <h3 className="card_widget_header">{summaryData.availablePropertiesCount}</h3>
                      <h6 className="text-muted">Available Rooms</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div>
                      <h3 className="card_widget_header">1538</h3>
                      <h6 className="text-muted">Enquiry</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div>
                      <h3 className="card_widget_header">{summaryData.totalEarnings}</h3>
                      <h6 className="text-muted">Total Earning</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Booking List</h5>
                  <div className="table-responsive">
                    <table className="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>Booking ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Aadhar Number</th>
                          <th>Room Type</th>
                          <th>Number</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookingData.map((booking) => (
                          <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.aadharNumber}</td>
                            <td>{booking.roomType}</td>
                            <td>{booking.number}</td>
                            <td>{booking.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <GuestReview /> */}
        </div>
      </div>
    </div>
  );
}

export default MainComponents;
