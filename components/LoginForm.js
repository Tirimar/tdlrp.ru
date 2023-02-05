import React, {useContext, useState} from 'react';
import store, {Context} from "../pages/index";
import AuthService from "../service/AuthService";
import style from "../styles/Signin.module.scss"
import auth_style from "../styles/Auth.module.scss"
import Link from "next/link";


const LoginForm = ({...props}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);
    return (
        <div className={style.login}>
            <span className={style.greeting}>С возвращением!</span>
            <span className={style.greeting_2}>Введите свои данные для авторизации</span>
            <input  type={"text"}
                   placeholder={"Никнейм"}
                   className={style.input}
                   value={username}
                   onChange={e => setUsername(e.target.value)}/>
            <input type={"password"}
                   placeholder={"Пароль"}
                   className={style.input}
                   value={password}
                   onChange={e => setPassword(e.target.value)}/>
            <button className={style.button} id={style.logbutt} onClick={async () => {
                try {
                    await store.login(username, password, props.showBubble, "Неверное имя пользователя или пароль");
                    if (typeof window !== 'undefined') {
                        window.sessionStorage.setItem('key', password);
                    }
                } catch (e){

                }
            }}>Войти</button>
            <div className={style.links}>
                <a href={"https://vk.com/im?media=&sel=-206933990"} className={style.have}>Забыли пароль?</a>
                <div className={style.have} id={style.nothave} onClick={() => props.setCss(auth_style.ladies_left)}>Нет аккаунта?</div>
            </div>
        </div>
    );
};

export default LoginForm;