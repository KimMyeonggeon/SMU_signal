import logo from './logo.svg';
import './App.css';
import Button from './component/button';
import React from 'react';
import Kakao from './taps/kakao'
import Start from './taps/start'
import Information from './taps/information'
import Random from './taps/random'
import Result from './taps/result'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <Routes>
                <Route path='/' element={<Kakao />} />
                <Route path='/start' element={<Start />} />
                <Route path='/information' element={<Information />}/>
                <Route path='/random' element={<Random />} />
                <Route path='/result' element={<Result />} />  
            
            </Routes>
        </div>
    </BrowserRouter>
    );
}
export default App;