import React from "react";
import style from "./PlayerBar.module.css"

interface IPlayerBar {
    trackName: string;
    artistName: string;
    previewUrl: string;
}

const PlayerBar: React.FC<IPlayerBar> = ({trackName, artistName, previewUrl}) => {

    return (
        <div className={style.playerBarWrapper}>
            <div className={style.playerBarMain}>
                <div className={style.controlSystemBlock}>

                    <button className={style.backTrack}>
                        <img src="" alt="" />
                    </button>

                    <button className={style.playPauseTrack}>
                        <img src="" alt="" />
                    </button>

                    <button className={style.nextTrack}>
                        <img src="" alt="" />
                    </button>
                    
                </div>

                <img src={previewUrl} alt={previewUrl} />
                <div className={style.trackInfoBlock}>
                    <h2 className={style.trackName}>{trackName}</h2>
                    <h3 className={style.artistArtist}>{artistName}</h3>
                </div>

            </div>
        </div>
    );
};

export default PlayerBar;