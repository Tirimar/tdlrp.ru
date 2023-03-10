import React, {createContext} from "react";
import Store from "../store/store";
import App from "../components/App";
import axios from "axios";
import {API_URL} from "../http";
import Head from "next/head";

export async function getServerSideProps(context) {
    const response1 = await axios.get(API_URL +'/team/get');
    const team = await response1.data;
    const response2 = await axios.get(API_URL +'/wiki/get');
    const wiki = await response2.data[0];
    const response3 = await axios.get(API_URL +'/chronicle/getall');
    const chronicle = await response3.data;
    return {
        props: {team, wiki, chronicle},
    }
}
const Index = ({team, wiki, chronicle}) => {
    return(
        <>
            <Head>
            <title>Тадримлас</title>
                <meta name="viewport" content="width=1600"/>
                <meta name="description" content="Окунись в мир фэнтези-средневековья на Minecraft Role-play сервере."/>
                <meta name="keywords" content="Ролплей, ролеплей, ролл, ролевая игра, игра, ролевка, ролевик, средневековье, история, битва, война, сражение, политика, фракции, жанр, фэнтези, магия, дракон, подземелья, данж, волшебник, люди, человек, орк, эльф, дворф, гном, сатир, мифология, бог, пантеон, древность, средние века, атмосфера, государство, ТДЛ, Тадримлас, Тадремлас, Тадремлаас, Тадримлаас, Воплоти мечту, TDL, Tahdremlaas, РПГ, RPG, MMORPG, ММОРПГ, квест, лор, босс, раса, Майнкрафт, Minecraft, Mine, MC, Role-play, Roleplay, Майн, RP, РП"/>
                <meta name="robots" content="index, follow"/>
                <meta name="yandex-verification" content="7a28d27f4ca871e1" />
            </Head>
      <App team={team} wiki={wiki} chronicle={chronicle}/>
        </>
    );
}
export default Index;
export const store = new Store();
export const Context = createContext({
    store,
});
