import React, {useContext, useState} from 'react';
import {Context} from "../pages";
import style from "../styles/Signin.module.scss";

const TeamAdder = () => {
    const {store} = useContext(Context);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div className={style.login} >
            <span className={style.greeting}>Добавление нового камрада</span>
            <input className={style.input} type={"text"} placeholder={"Имя нового админа"} value={name} onChange={e => setName(e.target.value)}/>
            <input className={style.input} type={"text"} placeholder={"Заголовок нового админа"} value={title} onChange={e => setTitle(e.target.value)}/>
            <input className={style.input} type={"text"} placeholder={"Описание нового админа"} value={description} onChange={e => setDescription(e.target.value)}/>
            <span className={style.greeting_2} >Перед отправкой проверь, что все данные введены корректно!</span>
            <button className={style.button}  onClick={() => {
                store.addTeam(name, title, description);
                setTitle('');
                setDescription('');
                setName('');
            }}>Добавить камрада!</button>
        </div>
    );
};

export default TeamAdder;