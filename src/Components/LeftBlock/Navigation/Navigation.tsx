import React from 'react';
import style from './Navigation.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyTracks from '../MyTracks/MyTracks';
import CurrentAlbum from '../CurrentAlbum/CurrentAlbum';

const Navigation: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="">

          <main className="">
            <Routes>
              <Route path="/" element={<MyTracks/>} />
                <Route path="/MyTracks" element={<MyTracks/>} />
                <Route path="/CurrentAlbum" element={<CurrentAlbum/>} />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;