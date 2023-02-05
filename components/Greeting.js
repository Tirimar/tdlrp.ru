import React from 'react';
import Image from 'next/image'
import Window from '../public/images/head_image.png'
import style from '../styles/Greeting.module.scss'
import Link from "next/link";

const Greeting = () => {
    return (
        <div className={style.greeting}>
            <Image src={Window} className={style.window} alt={"window"}/>
            <div className={style.info}>
                <h1 className={style.h1}>Воплоти мечту.</h1>
                <span className={style.spans}>Душа жаждет приключений? Воплоти любые свои
                    <br/>
                    задумки на Role-play сервере Minecraft. Мы ждём
                    <br/>
                    тебя на просторах Тадримласа!
                </span>
                <br/>
                <div className={style.buttons}>
                    <button className={style.startgame}><Link href={"auth"}><a className={style.link}>Начать игру</a></Link></button>
                    <button className={style.launcher}><a href={"https://launcher.tdlrp.ru/Tahdremlaas.exe"}>Лаунчер</a></button>
                </div>
            </div>
        </div>
    );
};

export default Greeting;