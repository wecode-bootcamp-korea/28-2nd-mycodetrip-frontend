import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import FlightsList from './pages/FlightsList/FlightsList';
import FlightsCheck from './pages/FlightsCheck/FlightsCheck';
import Reservation from './pages/Reservation/Reservation';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/flightsList" element={<FlightsList />} />
          <Route path="/flightsCheck" element={<FlightsCheck />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Router;
