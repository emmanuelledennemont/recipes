import './App.css';
import { useState, useEffect } from "react";
import { useCallback } from "react";
import Header from './components/Header';
import Filter from './components/Filter';
import Pages from './pages/Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>


  <Router>
      <Header />
      <main className='container'>
    <Filter />
   
  </main>
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
