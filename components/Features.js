import React from 'react';
import style from '../styles/Features.module.scss'
import Feature_1 from '../public/images/features_1.png'
import Feature_2 from '../public/images/features_2.png'
import Feature_3 from '../public/images/features_3.png'
import Image from "next/image";

const Features = () => {
    return (
        <div className={style.features}>
            <span className={style.best}>Наши преимущества</span>
            <div className={style.features_inner}>
                <div className={style.feature}>
                    <span className={style.number}>01</span>
                    <Image className={style.image} src={Feature_1}/>
                    <br/>
                    <br/>
                    <br/>
                    <span className={style.title}>Ролевая игра</span>
                    <br/>
                    <br/>
                    <br/>
                    <span className={style.description}>Погрузитесь в роль своего персонажа, составьте его описание и заведите новых друзей.</span>
                </div>
                <div className={style.feature}>
                    <span className={style.number}>02</span>
                    <Image className={style.image} src={Feature_2}/>
                    <br/>
                    <br/>
                    <br/>
                    <span className={style.title}>Живой мир</span>
                    <br/>
                    <br/>
                    <br/>
                    <span className={style.description}>В основе сервера лежат игроки, их решения и непредсказуемые последствия.</span>
                </div>
                <div className={style.feature}>
                    <span className={style.number}>03</span>
                    <Image src={Feature_3}/>
                    <br/>
                    <br/>
                    <br/>
                    <span className={style.title}>Обновления</span>
                    <br/>
                    <br/>
                    <br/>
                    <span className={style.description}>Частые обновления собственного мода содержат уникальные механики, открывающие новые взаимодействия.</span>
                </div>
            </div>
        </div>
    );
};

export default Features;