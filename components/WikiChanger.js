import React, {useContext, useState} from 'react';
import {Context} from "../pages";
import style from "../styles/Signin.module.scss";

const WikiChanger = () => {
    const {store} = useContext(Context);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div className={style.login}>
            <span className={style.greeting}>Изменение избранной статьи</span>
            <input className={style.input} type={"text"} placeholder={"Новый заголовок вики"} value={title} onChange={e => setTitle(e.target.value)}/>
            <input className={style.input} type={"text"} placeholder={"Новое описание вики"} value={description} onChange={e => setDescription(e.target.value)}/>
            <br/>
            <span className={style.greeting_2}>Перед отправкой проверь, что все данные введены корректно!</span>
            <br/>
            <button className={style.button} onClick={() => {
                store.wikiChange(title, description);
                setTitle('');
                setDescription('');
            }}>Изменить вики</button>
        </div>
    );
};

export default WikiChanger;