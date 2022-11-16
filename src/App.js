import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostPage from './features/post/pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <PostPage />
      <ToastContainer
        position='top-right'
        pauseOnHover={false}
        autoClose={2000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default App;
