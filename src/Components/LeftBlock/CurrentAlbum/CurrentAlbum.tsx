import React from "react";
import style from "./CurrentAlbum.module.css"



const CurrentAlbum: React.FC = () => {

    return (
        <div>
            <div>
                <img src="" alt="" />
                <h2 className={style.albumName}></h2>
                <h3 className={style.albumArtist}></h3>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CurrentAlbum;