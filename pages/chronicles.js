import React from 'react';
import MainContainer from "../components/MainContainer";
import axios from "axios";
import {API_URL} from "../http";
import style from "../styles/Chronicle.module.scss"
import Chronicle_on_page from "../components/Chronicle_on_page";
import Head from "next/head";
export async function getServerSideProps(context) {
    const response3 = await axios.get(API_URL +'/chronicle/getall');
    const chronicle = await response3.data;
    return {
        props: {chronicle},
    }
}
const Chronicles = ({chronicle}) => {
    let chron = chronicle.reverse();
    return (
        <MainContainer>
            <Head>
                <title>Летопись</title>
                <meta name="viewport" content="width=1600"/>
                <meta name="description" content="Окунись в мир фэнтези-средневековья на Minecraft Role-play сервере."/>
                <meta name="keywords" content="Ролплей, ролеплей, ролл, ролевая игра, игра, ролевка, ролевик, средневековье, история, битва, война, сражение, политика, фракции, жанр, фэнтези, магия, дракон, подземелья, данж, волшебник, люди, человек, орк, эльф, дворф, гном, сатир, мифология, бог, пантеон, древность, средние века, атмосфера, государство, ТДЛ, Тадримлас, Тадремлас, Тадремлаас, Тадримлаас, Воплоти мечту, TDL, Tahdremlaas, РПГ, RPG, MMORPG, ММОРПГ, квест, лор, босс, раса, Майнкрафт, Minecraft, Mine, MC, Role-play, Roleplay, Майн, RP, РП"/>
                <meta name="robots" content="index, follow"/>
            </Head>
            <br/><br/>
            <span className={style.main}>Летопись</span>
            <br/>
            <div className={style.chronicles}>
                {chronicle.map((ch) => <Chronicle_on_page key={ch.title} date={ch.date} title={ch.title} description={ch.description}/>)}
            </div>
        </MainContainer>
    );
};

export default Chronicles;
