import React from 'react';
import {Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
