import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import Link from "next/link";
import style from "../styles/MainContainer.module.scss"
import {Context} from "../pages";
import Logo_r from "../public/images/tdllogo_r.png"
import Logo_w from "../public/images/tdllogo_w.svg"
import Vk from "../public/images/vk_logo.png"
import Wiki from "../public/images/wiki_logo.png"
import Discord from "../public/images/discord_logo.png"
import Image from 'next/image'
import Head from "next/head";

const MainContainer = ({ children, ...props }) => {
    const {store} = useContext(Context);
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
        if(store.user !== {} && window.sessionStorage.getItem("username") !== null && window.sessionStorage.getItem("username") !== undefined &&
            window.sessionStorage.getItem("key") !== null && window.sessionStorage.getItem("key") !== undefined)
        store.login(window.sessionStorage.getItem("username"), window.sessionStorage.getItem("key"))
    }}, [MainContainer])
    useEffect(() => {
        if(store.isAuth){
        setButton(<Link href={"/"}><button onClick={()=>store.logout()} className={style.login}>Выйти</button></Link>)
            setLink("profile");
    } else {
            setLink("auth");
            setButton(<Link href={"auth"}><button className={style.login}>Войти</button></Link>)}
        }, [store.isAuth, MainContainer, store.user])
    const [button, setButton] = useState(<Link href={"auth"}><button className={style.login}>Войти</button></Link>);
    const [link, setLink] = useState("profile");
    return (
        <div className={style.main_container}>
            <header>
                <div className={style.header_container}>
                    <div className={style.header_left_block}>
                        <Link href={"/"}><Image src={Logo_r} className={style.mainlogo} alt={"TDL"}/></Link>
                        <Link href={"chronicles"}><a className={style.headerlink}>Летопись</a></Link>
                        <Link  href={"rules"}><a className={style.headerlink}>Правила</a></Link>
                        <a className={style.headerlink} href={"https://tdlrp.fandom.com/ru/wiki/Tahdremlaas_%D0%92%D0%B8%D0%BA%D0%B8"}>Вики</a>
                    </div>
                    <div className={style.header_right_block}>
                        <Link href={link}><a className={style.headerlink}>Профиль</a></Link>
                        {button}
                    </div>
                </div>
            </header>
            <div className={style.content}><div className={style.content_inner}>{children}</div></div>
            <footer>
                <div className={style.footertdl}>
                    <div className={style.logo}>
                        <Image src={Logo_w} alt={"TDL"}/>
                    </div>
                    <div className={style.footerlinks}>
                        <div className={style.linkblock}>
                            <Link href={"/"}><a className={style.footerlink}>Главная</a></Link>
                            <Link href={"chronicles"}><a className={style.footerlink}>Летопись</a></Link>
                            <Link href={"rules"}><a className={style.footerlink}>Правила</a></Link>
                        </div>
                        <div className={style.linkblock}>
                            <Link href={link}><a className={style.footerlink}>Авторизация</a></Link>
                            <Link href={link}><a className={style.footerlink}>Личный кабинет</a></Link>
                        </div>
                    </div>
                    <div className={style.footerlogos}>
                        <a className={style.footerlogo} href={"https://vk.com/tdlrp"}><Image src={Vk} alt={"Vkontakte"}/></a>
                        <a className={style.footerlogo} href={"https://discord.com/invite/HyBGHst5ud"}><Image src={Discord} alt={"Discord"}/></a>
                        <a className={style.footerlogo} href={"https://tdlrp.fandom.com/ru/wiki/Tahdremlaas_%D0%92%D0%B8%D0%BA%D0%B8"}><Image src={Wiki} alt={"Wiki fandom"}/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainContainer;