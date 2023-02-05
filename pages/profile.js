import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import MainContainer from "../components/MainContainer";
import style from "../styles/Profile.module.scss"
import {Context} from "./index";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import Loader from  "../public/images/loader.png"
import Popup from "../components/Popup";
import createReader from "../Utils/SizeChecker"
import Arrow from "../public/images/arrow.png"
import Head from "next/head";




const Profile = () => {
    const {store} = useContext(Context);
    useLayoutEffect(() => {
        if(store.user.username){setNickname(store.user.username);
        if(window.sessionStorage.getItem("roles") === "ROLE_ADMIN" || store.user.role === "ROLE_ADMIN" && store.isAuth){
        setAdmin(<Link href={"admin"}><button className={style.admin}>Админ-панель</button></Link>);
    } else if (window.sessionStorage.getItem("roles") === "ROLE_MODERATOR" || store.user.role === "ROLE_MODER" && store.isAuth){
        setModer(<Link href={"moder"}><button className={style.moder}>Модер-панель</button></Link>)
    }}
        else if(window.sessionStorage.getItem("username")) {
            (setNickname(window.sessionStorage.getItem("username")))
            if(window.sessionStorage.getItem("roles") === "ROLE_ADMIN" || store.user.role === "ROLE_ADMIN" && store.isAuth){
        setAdmin(<Link href={"admin"}><button className={style.admin}>Админ-панель</button></Link>);
    } else if (window.sessionStorage.getItem("roles") === "ROLE_MODERATOR" || store.user.role === "ROLE_MODER" && store.isAuth){
        setModer(<Link href={"moder"}><button className={style.moder}>Модер-панель</button></Link>)
    }
        } else if (typeof window !== 'undefined') {
            if (!store.isAuth) {
                router.push('/404')
            }
        }
    }, [Profile, store.user])
    const [nickname, setNickname] = useState(store.user.username)
    const [admin, setAdmin] = useState()
    const [moder, setModer] = useState()
    const [css, setCss] = useState(style.pre_read);
    const [popup, setPopup] = useState("");
    const [open, setOpen] = useState(false);
    const [choose, setChoose] = useState(null);
    const [menuname, setMenuname] = useState('Выберите тип файла');
    const optionStyle1 = style.option;
    const optionStyle2 = style.option_checked;

    const router = useRouter()


    const [drag, setDrag] = useState(false);
    function showBubble(message){
        setPopup(<Popup message={message}/>)
        setTimeout(() => setPopup(""), 3000);
    }
    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
        setCss(style.pre_read_drag);
    }
    function dragLeaveHandler(e){
        e.preventDefault();
        setDrag(false);
        setCss(style.pre_read);
    }

    async function onDropHandler(e){
        e.preventDefault();
        if(choose != null){
            let file = [...e.dataTransfer.files];
            file = file[0];
            const sz = await createReader(file, nickname, showBubble, choose);
        } else {
            showBubble("Сперва выберите тип файла");
        }
        setDrag(false);
        setCss((style.pre_read))
    }
    return (
        <MainContainer>
            <Head>
                <title>Личный кабинет</title>
                <meta name="viewport" content="width=1600"/>
                <meta name="description" content="Окунись в мир фэнтези-средневековья на Minecraft Role-play сервере."/>
                <meta name="keywords" content="Ролплей, ролеплей, ролл, ролевая игра, игра, ролевка, ролевик, средневековье, история, битва, война, сражение, политика, фракции, жанр, фэнтези, магия, дракон, подземелья, данж, волшебник, люди, человек, орк, эльф, дворф, гном, сатир, мифология, бог, пантеон, древность, средние века, атмосфера, государство, ТДЛ, Тадримлас, Тадремлас, Тадремлаас, Тадримлаас, Воплоти мечту, TDL, Tahdremlaas, РПГ, RPG, MMORPG, ММОРПГ, квест, лор, босс, раса, Майнкрафт, Minecraft, Mine, MC, Role-play, Roleplay, Майн, RP, РП"/>
                <meta name="robots" content="index, follow"/>
            </Head>
            {popup}
            <div className={style.profile}>
                <div className={style.title}>Личный кабинет</div>
                <div className={style.profile_info}>
                    <div className={style.info}>
                        <div>
                        <span className={style.nickname}>{nickname}</span>
                            <br/>
                            <br/>
                        <div className={style.menu} onClick={() => {
                            open ? setOpen(false) : setOpen(true)
                        }}><span>{menuname}</span><div className={open ? style.arrow_rotated : style.arrow}><Image src={Arrow}/></div></div>
                            {open ?  (<div className={style.optionslist}>
                                        <span className={choose=="skin" ? optionStyle2 : optionStyle1} onClick={() => {
                                            setChoose("skin");
                                            setMenuname("Скин");
                                            setOpen(false);
                                        }}>Скин</span>
                                        <span className={choose=="cape" ? optionStyle2 : optionStyle1} onClick={() => {
                                            setChoose("cape");
                                            setMenuname("Плащ");
                                            setOpen(false);
                                        }}>Плащ</span>
                                    </div>)
                            : <div/>}
                        </div>
                        <div onDragStart={e => dragStartHandler(e)}
                             onDragLeave={e => dragLeaveHandler(e)}
                             onDragOver={e => dragStartHandler(e)}
                             onDrop={e => onDropHandler(e)}
                             className={css}>
                            <div className={style.image}><Image width={400} height={400} src={Loader}/></div>
                            <br/>
                            <span className={style.drop}>Перетащите файл для загрузки</span>
                        </div>
                    </div>
                </div>
                {admin}
                {moder}
            </div>
        </MainContainer>
    );
};

export default Profile;