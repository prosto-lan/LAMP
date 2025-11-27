import React from 'react';
import style from './LeftBlockNavigation.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const LeftBlockNavigation: React.FC = () => {

  return (
    <BrowserRouter>
      <div className={style.LBNavWrapper}>

          <main className={style.LBNavMain}>
            <Routes>
                {/* <Route path="/MyTracks" element={< />} /> */}
                {/* <Route path="/CurrentAlbum" element={< />} /> */}
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
};

export default LeftBlockNavigation;