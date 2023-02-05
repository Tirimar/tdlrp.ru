import React, {useContext, useEffect, useState} from 'react';
import Chronic from "./Chronic";
import style from '../styles/ShortChronicle.module.scss'
import Link from "next/link";
import Image from "next/image";
import Route from '../public/images/route.png'
import {Context} from "../pages";
import Arrow from "../public/images/arrow_2.svg"

const ShortChronicle = ({...props}) => {
    let chronicle = props.chronicle
    function compare(a, b) {
        if (Number(a.number.split(" ")[2]) > Number(b.number.split(" ")[2])) return 1;
        if (Number(a.number.split(" ")[2]) == Number(b.number.split(" ")[2])) return 0;
        if (Number(a.number.split(" ")[2]) < Number(b.number.split(" ")[2])) return -1;
    }
    const {store} = useContext(Context);
    const [date, setDate] = useState(store.getDate());
    const [ch1, setCh1] = useState(true);
    const [ch2, setCh2] = useState(false);
    const [ch3, setCh3] = useState(false);
    let chronicle1;
    let chronicle2;
    let chronicle3;
    /////////////////////////////////1
    if(ch1 === true){
        chronicle1 = <div className={style.chronicle}>
            <div className={style.chronicle_inner}>
            <span className={style.date_1st_letter}>{chronicle[chronicle.length-1].date.split(" ")[0]}</span>
                <span className={style.date_other}>{chronicle[chronicle.length-1].date.split(" ")[1]}.</span>
                <span className={style.date_other}>{chronicle[chronicle.length-1].date.split(" ")[2]} г.</span>
                <br/>
            <span className={style.title}>{chronicle[chronicle.length-1].title}</span>
                <br/>
                <br/>
            <span className={style.description}>{chronicle[chronicle.length-1].description}</span>
            </div>
        </div>
    } else if(ch1 === false) {
        chronicle1 = <div className={style.chronicle_hided} onClick={() => {
            setCh1(true);
            setCh3(false);
            setCh2(false);
        }}>
            <span className={style.date_hided}>{chronicle[chronicle.length-1].date.split(" ")[0]}</span>
            <span className={style.title_rotated}>{chronicle[chronicle.length-1].title}</span>
            <span className={style.description_hided}>{chronicle[chronicle.length-1].description}</span>
        </div>
    }
    //////////////////////////////////////////2
    if(ch2 === true){
        chronicle2 = <div className={style.chronicle}>
            <div className={style.chronicle_inner}>
                <span className={style.date_1st_letter}>{chronicle[chronicle.length-2].date.split(" ")[0]}</span>
                <span className={style.date_other}>{chronicle[chronicle.length-2].date.split(" ")[1]}.</span>
                <span className={style.date_other}>{chronicle[chronicle.length-2].date.split(" ")[2]} г.</span>
                <br/>
            <span className={style.title}>{chronicle[chronicle.length-2].title}</span>
                <br/>
                <br/>
            <span className={style.description}>{chronicle[chronicle.length-2].description}</span>
            </div>
        </div>
    } else if(ch2 === false) {
        chronicle2 = <div className={style.chronicle_hided} onClick={() => {
            setCh1(false);
            setCh3(false);
            setCh2(true);}
        }>
            <span className={style.date_hided}>{chronicle[chronicle.length-2].date.split(" ")[0]}</span>
            <span className={style.title_rotated}>{chronicle[chronicle.length-2].title}</span>
            <span className={style.description_hided}>{chronicle[chronicle.length-2].description}</span>
        </div>
    }
    ///////////////////////////////3
    if(ch3 === true){
        chronicle3 = <div className={style.chronicle}>
            <div className={style.chronicle_inner}>
                <span className={style.date_1st_letter}>{chronicle[chronicle.length-3].date.split(" ")[0]}</span>
                <span className={style.date_other}>{chronicle[chronicle.length-3].date.split(" ")[1]}.</span>
                <span className={style.date_other}>{chronicle[chronicle.length-3].date.split(" ")[2]} г.</span>
                <br/>
            <span className={style.title}>{chronicle[chronicle.length-3].title}</span>
                <br/>
                <br/>
            <span className={style.description}>{chronicle[chronicle.length-3].description}</span>
            </div>
        </div>
    } else if(ch3 === false) {
        chronicle3 = <div className={style.chronicle_hided} onClick={() => {
            setCh1(false);
            setCh3(true);
            setCh2(false);}
        }>
            <span className={style.date_hided}>{(chronicle[chronicle.length-3].date).split(" ")[0]}</span>
            <div className={style.title_rotated}>{chronicle[chronicle.length-3].title}</div>
            <span className={style.description_hided}>{chronicle[chronicle.length-3].description}</span>
        </div>
    }
//***********************************************************
    return (
        <div className={style.chronicle_block}>
            <div className={style.chronicle_info}>
                <h1 className={style.h1}>Летопись</h1>
                <br/>
                <span className={style.info}>Летопись событий составляется<br/>из действий игроков на сервере.</span>
                <br/>
                <br/>
                <br/>
                <Link href={"/chronicles"}><a className={style.route}>Поздние записи <Image src={Arrow}/></a></Link>
                <div className={style.dater}>
                    <span className={style.h1}>Текущая дата:<br/>
                        <span className={style.date}>{date.split(" ")[0]} </span>
                        <span className={style.date}>{date.split(" ")[1]}. </span>
                        <span className={style.date}>{date.split(" ")[2]} г. </span>
                    </span>
                </div>
            </div>
            <div className={style.chronicles}>
                {chronicle1}
                {chronicle2}
                {chronicle3}
          </div>
        </div>
    );
};

export default ShortChronicle;