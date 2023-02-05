import React, {useContext, useState} from 'react';
import {Context} from "../pages";
import style from "../styles/Signin.module.scss";

const RulesPanel = () => {
    const {store} = useContext(Context);
    const [number, setNumber] = useState('');
    const [description, setDescription] = useState('');
    const [delnumber, setDelnumber] = useState('');
    return (
        <div>
            <div className={style.login}>
                <span className={style.greeting}>Добавление правила</span>
            <input className={style.input} type={"text"} placeholder={"Номер нового правила"} value={number} onChange={e => setNumber(e.target.value)}/>
            <input className={style.input} type={"text"} placeholder={"Описание нового правила"} value={description} onChange={e => setDescription(e.target.value)}/>
                <br/>
            <span className={style.greeting_2}>Перед отправкой проверь, что все данные введены корректно!</span>
                <br/>
            <button className={style.button} onClick={() => {
                store.addRules(number, description)
                setNumber('');
                setDescription('');
            }}>Добавить правило</button>
            </div>
            <div className={style.login}>
                <span className={style.greeting}>Удаление правила по номеру</span>
                <input className={style.input} type={"text"} placeholder={"Номер удаляемого правила"} value={delnumber} onChange={e => setDelnumber(e.target.value)}/>
                <br/>
                <span className={style.greeting_2}>Перед отправкой проверь, что все данные введены корректно!</span>
                <br/>
                <button className={style.button} onClick={() => {
                    store.removeRules(number);
                    setDelnumber('');
                }}>Удалить правило</button>
            </div>
        </div>
    );
};

export default RulesPanel;