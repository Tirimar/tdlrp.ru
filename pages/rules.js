import React from 'react';
import MainContainer from "../components/MainContainer";
import axios from "axios";
import {API_URL} from "../http";
import style from '../styles/rules.module.scss'
import Head from "next/head";
export async function getServerSideProps(context) {
    const response = await axios.get(API_URL +'/rules/getall');
    const rules = await response.data;
    return {
        props: {rules},
    }
}
const Rules = ({rules}) => {
    function compare(a, b) {
        if (Number(a.number.split(".")[1]) > Number(b.number.split(".")[1])) return 1;
        if (Number(a.number.split(".")[1]) == Number(b.number.split(".")[1])) return 0;
        if (Number(a.number.split(".")[1]) < Number(b.number.split(".")[1])) return -1;
    }
    const ruleArr = rules.sort(compare);
    const One = ruleArr.filter(item => item.number[0] == 1);
    const Two = ruleArr.filter(item => item.number[0] == 2);
    const Three = ruleArr.filter(item => item.number[0] == 3);
    const Four = ruleArr.filter(item => item.number[0] == 4);

    return (
        <MainContainer>
            <Head>
                <title>Правила</title>
                <meta name="viewport" content="width=1600"/>
                <meta name="description" content="Окунись в мир фэнтези-средневековья на Minecraft Role-play сервере."/>
                <meta name="keywords" content="Ролплей, ролеплей, ролл, ролевая игра, игра, ролевка, ролевик, средневековье, история, битва, война, сражение, политика, фракции, жанр, фэнтези, магия, дракон, подземелья, данж, волшебник, люди, человек, орк, эльф, дворф, гном, сатир, мифология, бог, пантеон, древность, средние века, атмосфера, государство, ТДЛ, Тадримлас, Тадремлас, Тадремлаас, Тадримлаас, Воплоти мечту, TDL, Tahdremlaas, РПГ, RPG, MMORPG, ММОРПГ, квест, лор, босс, раса, Майнкрафт, Minecraft, Mine, MC, Role-play, Roleplay, Майн, RP, РП"/>
                <meta name="robots" content="index, follow"/>
            </Head>
            <div className={style.rules}>
                <br/><br/>
                <span className={style.main}>Правила</span>
                <div className={style.ruleblock}>
                    <span className={style.title}><span className={style.number}>1</span>  Основное положение</span>
                    <br/><br/>
                    {One.map((rule) => <h1 className={style.h1} key={rule.number}>{rule.number} {rule.description}</h1>)}
                </div>
                <div className={style.ruleblock}>
                    <span className={style.title}><span className={style.number}>2</span>  Общение на проекте</span>
                    <br/><br/>
                    {Two.map((rule) => <h1 className={style.h1} key={rule.number}>{rule.number} {rule.description}</h1>)}
                </div>
                <div className={style.ruleblock}>
                    <span className={style.title}><span className={style.number}>3</span>  Техническое положение</span>
                    <br/><br/>
                    {Three.map((rule) => <h1 className={style.h1} key={rule.number}>{rule.number} {rule.description}</h1>)}
                </div>
                <div className={style.ruleblock}>
                    <span className={style.title}><span className={style.number}>4</span>  Правила отыгрыша</span>
                    <br/><br/>
                    {Four.map((rule) => <h1 className={style.h1} key={rule.number}>{rule.number} {rule.description}</h1>)}
                </div>
                <div className={style.ruleblock}>
                    <span className={style.title}>Возможные наказания:</span>
                    <br/><br/>
                    <h1 className={style.h1}>– при легких нарушениях бан, или мут. От нескольких минут, до суток.</h1>
                    <h1 className={style.h1}>– при средних нарушениях бан от суток, до семи дней.</h1>
                    <h1 className={style.h1}>– при тяжелых нарушениях бан от недели, до месяца.</h1>
                    <h1 className={style.h1}>– при использовании стороннего ПО, либо при постоянных нарушениях выдается перманентный бан.</h1>
                </div>
            </div>
        </MainContainer>
    );
};

export default Rules;
