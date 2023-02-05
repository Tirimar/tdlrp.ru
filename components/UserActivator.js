import React, {useContext, useState} from 'react';
import {Context} from "../pages";
import style from "../styles/Signin.module.scss";

const UserActivator = () => {
    const {store} = useContext(Context);
    const [name, setName] = useState('');
    return (
        <div className={style.login}>
            <span className={style.greeting}>Активация игрока по никнейму</span>
            <input className={style.input} type={"text"} placeholder={"Ник игрока для активации"} value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            <span className={style.greeting_2}>Перед отправкой проверь, что все данные введены корректно!</span>
            <br/>
            <button className={style.button} onClick={() => {
                store.userSetActive(name);
                setName('');
            }}>Активировать аккаунт</button>
        </div>
    );
};

export default UserActivator;