import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar';
import UserPostSubmit from './Components/UserPostSubmit';
import PostList from './Components/PostList';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Social Network</Navbar.Brand>
      </Navbar>
      <Container className="p-3 gedf-wrapper">
        <ToastContainer />
        {/*<UserPostSubmit /> */}
        {/*<PostList />*/}
      </Container>
    </div>
  );
}

export default App;
