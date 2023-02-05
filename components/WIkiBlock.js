import React from 'react';
import Delete from "../public/images/wiki.png"
import style from "../styles/WikiBlock.module.scss"
import Image from "next/image";
import Arrow from "../public/images/arrow_2.svg"


const WIkiBlock = ({wiki}) => {
    return (
        <div className={style.wiki}>
            <span className={style.wiki_chosen}>Избранная статья</span>
            <div className={style.wikiblock}>
                <Image width={500}
                       height={500} className={style.wikimage} src={Delete}/>
                <div className={style.text_inner} key={wiki.title}>
                   <span className={style.title}>{wiki.title}</span>
                    <br/><br/><br/>
                    <span className={style.description}>{wiki.description}</span>
                    <a className={style.link} href={"https://tdlrp.fandom.com/ru/wiki/%D0%97%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D1%8B%D0%B5_%D0%92%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B0"}>Узнать больше <Image src={Arrow}/></a>
                </div>
            </div>
        </div>
    );
};


export default WIkiBlock;
