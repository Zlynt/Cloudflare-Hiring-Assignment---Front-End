import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.scss';

function App() {
  return (
    <div>
      <Container className="p-3 gedf-wrapper">
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
