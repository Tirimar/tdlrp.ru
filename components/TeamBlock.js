import React, {useEffect, useState} from 'react';
import TeamCard from "./TeamCard";
import style from '../styles/TeamBlock.module.scss'
import Arrow from "../public/images/arrow.png"
import Image from "next/image";
import App from "./App";



const TeamBlock = ({team}) => {
    const [slider, setSlider] = useState(0);
    const teamList = team.map((people) => <TeamCard key={people.name} name={people.name} title={people.title} description={people.description} id={people.id}/>)

    return (
        <div className={style.container}>
            <span className={style.team}>Команда разработки</span>
            <div className={style.container_inner}>
            <div className={style.leftArrow} onClick={() => {
                setSlider(slider - 1)
            }}><Image src={Arrow}/></div>
            <div className={style.myteam}>{teamList[0]} {teamList[1]}</div>
            <div className={style.rightArrow} onClick={() => {
                setSlider(slider + 1)
            }}><Image src={Arrow}/></div>
            </div>
        </div>
    );
};


export default TeamBlock;
