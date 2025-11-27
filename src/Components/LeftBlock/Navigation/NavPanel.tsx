import React from "react";
import style from './LeftBlockNavigation.module.css';
import { Link } from "react-router-dom";

const NavPanel: React.FC = () => {

    return (
        <div className={style.navPanelWrapper}>
            <Link to="/MyTracks">MyTracks</Link>
            <Link to="/CurrentAlbum">CurrentAlbum</Link>
        </div>
    );
};

export default NavPanel;