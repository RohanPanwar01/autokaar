import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import MainComponents from './Components/MainComponents/MainComponents';
// import FooterComponents from './Components/FooterComponents/FooterComponents';
import SidebarComponents from './Components/SidebarComponents/SidebarComponents';
import HeaderComponents from './Components/HeaderComponents/HeaderComponents';
import Propertyowners from './Components/Propertyowners/Propertyowners';
import ReservationDetails from './Components/ReservationDetails/ReservationDetails';
import RegisteredUser from './Components/RegisteredUser/RegisteredUser';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import PropertiesUnderReview from './Components/PropertiesUnderReview/PropertiesUnderReview';
import ReviewedProperties from './Components/ReviewedProperties/ReviewedProperties';
import DeclinedProperties from './Components/DeclinedProperties/DeclinedProperties';
import BookingHistory from './Components/BookingHistory/BookingHistory';
import PropertiesUnderEyes from './Components/PropertiesUnderEyes/PropertiesUnderEyes';
import PaymentMethod from './Components/PaymentMethod/PaymentMethod';
import QuieresComponents from './Components/QuieresComponents/QuieresComponents';
import Cursor from './Components/Cursor/Cursor';
import InvoiceList from './Components/InvoiceList/InvoiceList';
import InvoiceDetails from './Components/InvoiceDetails/InvoiceDetails';
import Login from './Components/login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  const toggleCursorVisibility = () => {
    setHideCursor((prevHideCursor) => !prevHideCursor);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set the user as logged in
  };

  return (
    <>
      {/* Show login modal if not logged in */}
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <HeaderComponents />
          <SidebarComponents />

          <Routes>
            <Route path="/" element={<MainComponents />} />
            <Route path="/Propertyowners" element={<Propertyowners />} />
            <Route path="/RegisteredUser" element={<RegisteredUser />} />
            <Route path="/BookingDetails" element={<BookingDetails />} />
            <Route path="/BookingHistory" element={<BookingHistory />} />
            <Route path="/PropertiesUnderReview" element={<PropertiesUnderReview />} />
            <Route path="/ReviewedProperties" element={<ReviewedProperties />} />
            <Route path="/DeclinedProperties" element={<DeclinedProperties />} />
            <Route path="/PaymentMethod" element={<PaymentMethod />} />
            <Route path="/InvoiceList" element={<InvoiceList />} />
            <Route path="/InvoiceDetails" element={<InvoiceDetails />} />
            <Route path="/QuieresComponents" element={<QuieresComponents />} />
            <Route path="/PropertiesUnderEyes" element={<PropertiesUnderEyes />} />
            <Route path="/ReservationDetails" element={<ReservationDetails />} />
          </Routes>

          {/* <FooterComponents /> */}

          <div className="App" onClick={toggleCursorVisibility}>
            <Cursor hideCursor={hideCursor} />
          </div>
        </>
      )}
    </>
  );
}

export default App;