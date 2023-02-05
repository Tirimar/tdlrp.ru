import React from 'react';
import style from '../styles/Chronic.module.scss'

const Chronic = ({...props}) => {

    return (
        <div className={style.chronicle} key={props.id}>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <h1>{props.tdlDate}</h1>
        </div>
    );
};

export default Chronic;