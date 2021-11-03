import React from 'react';

/* Dependencies */
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Components */
import UserPostSubmit from './Components/UserPostSubmit';



import './App.scss';

function App() {
  return (
    <div>
      <Container className="p-3 gedf-wrapper">
        <ToastContainer />
        <UserPostSubmit />
        {/*<PostList />*/}
      </Container>
    </div>
  );
}

export default App;
