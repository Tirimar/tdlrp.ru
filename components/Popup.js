import React from 'react';
import style from "../styles/Popup.module.scss"

const Popup = ({message}) => {
    return (
        <div className={style.popup}>
            <span>{message}</span>
        </div>
    );
};

export default Popup;