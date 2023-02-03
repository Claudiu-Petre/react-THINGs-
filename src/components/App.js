import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'

function App() {
  return (
    <>
    <div className='container'>      <Header /><Main /><Footer />    </div>
    </>
  );
}

export default App;
