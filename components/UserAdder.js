import React, {useContext, useState} from 'react';
import style from "../styles/Signin.module.scss";
import {Context} from "../pages";
import auth_style from "../styles/Auth.module.scss";
import Link from "next/link";


const UserAdder = ({...props}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);
    return (
        <div className={style.login} id={style.greet}>
            <span className={style.greeting}>Регистрация без подтверждения почты</span>
            <input type={"email"}
                   placeholder={"Почта (любая, если для админов)"}
                   className={style.input}
                   value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <input type={"text"}
                   placeholder={"Никнейм"}
                   className={style.input}
                   value={username}
                   onChange={e => setUsername(e.target.value)}/>
            <input type={"password"}
                   placeholder={"Пароль"}
                   className={style.input}
                   value={password}
                   onChange={e => setPassword(e.target.value)}/>
            <br/><br/>
            <button className={style.button} id={style.regbutt} onClick={() => {
                if(username.length >=4 && username.length <=16){
                    if (password.length>=8 && password.length<=24){
                        store.createUser(username, email, password, props.showBubble, "Такое имя или почта уже используются", "Аккаунт успешно зарегистрирован")
                        setEmail('');
                        setUsername('');
                        setPassword('');
                    } else props.showBubble("Длина пароля должна быть больше 8 и меньше 24 символов");
                } else {
                    props.showBubble("Длина никнэйма должна быть больше 4 и меньше 16 символов")
                }
            } }>Подтвердить</button>
        </div>
    );
};

export default UserAdder;