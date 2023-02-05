import React from 'react';
import style from "../styles/ChronicPage.module.scss"

const ChronicleOnPage = ({...props}) => {
    return (
        <div className={style.chronic}>
            <span className={style.date_1st_letter}>{props.date.split(" ")[0]}<span className={style.date_other}>{props.date.split(" ")[1]}. {props.date.split(" ")[2]} г.</span></span>
            <span className={style.title}>{props.title}</span>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default ChronicleOnPage;