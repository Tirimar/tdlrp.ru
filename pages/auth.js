import React, {useContext, useEffect, useState} from 'react';
import LoginForm from "../components/LoginForm";
import {Context} from "../pages/index";
import MainContainer from "../components/MainContainer";
import {observer} from "mobx-react-lite";
import RegForm from "../components/RegForm";
import style from "../styles/Auth.module.scss"
import Image from "next/image";
import Ladies from "../public/images/auth_ladies.png"
import {useRouter} from "next/router";
import Popup from "../components/Popup";
import Head from "next/head";

const Auth = () => {
    const {store} = useContext(Context);
    const [css, setCss] = useState(style.ladies_right);
    const [popup, setPopup] = useState();
    const router = useRouter()
    function showBubble(message){
        setPopup(<Popup message={message}/>)
        setTimeout(() => setPopup(""), 3000);
    }
    /*useEffect(() => {
        if (window.sessionStorage.getItem('token')) {
            store.setAuth(true)
        }
    }, [])

     */
    if (store.isAuth){
        if (typeof window !== 'undefined') {
            router.push('/profile')
        }
    } else return (
        <MainContainer>
            <Head>
                <title>Авторизация</title>
                <meta name="viewport" content="width=1600"/>
                <meta name="description" content="Самый отзывчивый майнкрафт role-play сервер на всём снг пространстве"/>
                <meta name="robots" content="index, follow"/>
            </Head>
            {popup}
            <div className={style.auth}>
                <div className={style.auth_inner}>
                    <LoginForm showBubble={showBubble} setCss={setCss}/>
                    <RegForm showBubble={showBubble} setCss={setCss}/>
                    <div className={css} id={style.ladies}><Image src={Ladies}/></div>
                </div>
            </div>
        </MainContainer>
    );
};

export default observer(Auth);