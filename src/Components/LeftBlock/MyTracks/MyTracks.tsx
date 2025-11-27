import React from 'react';
import style from './MyTracks.module.css'

const MyTracks: React.FC = () => {
  return (
    <div className={style.MyTracksWrapper}>
      <h2>Мои трекаи</h2>
      <div className={style.MyTracksMain}>
        <h2>Мои трекаи</h2>
      </div>
    </div>
  );
};

export default MyTracks;