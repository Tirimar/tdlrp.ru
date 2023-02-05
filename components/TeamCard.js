import React from 'react';
import style from "../styles/TeamCard.module.scss"
import Image from "next/image";
import DeletePic from "../public/images/features_1.png"
//`../server/static/resources/upload/team/${props.id}.png`
const TeamCard = ({...props}) => {
    return (
        <div className={style.card} key={props.name}>
            <div className={style.card_inner}>
                <Image src={DeletePic}/>
                <div className={style.textplate}>
                    <h1 className={style.name}>{props.name}</h1>
                    <h1 className={style.title}>{props.title}</h1>
                    <h1 className={style.description}>{props.description}</h1>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;