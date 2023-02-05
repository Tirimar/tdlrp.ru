import React, {useContext, useState} from 'react';
import style from "../styles/Signin.module.scss";
import {Context} from "../pages";

const ChangeUsernamePanel = ({...props}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const  [newusername, setNewusername] = useState('');
    const {store} = useContext(Context);
    return (
        <div className={style.login} id={style.greet}>
            <span className={style.greeting}>Смена никнейма</span>
            <input type={"text"}
                   placeholder={"Никнейм"}
                   className={style.input}
                   value={username}
                   onChange={e => setUsername(e.target.value)}/>
            <input type={"text"}
                   placeholder={"Новый никнейм"}
                   className={style.input}
                   value={newusername}
                   onChange={e => setNewusername(e.target.value)}/>
            <input type={"email"}
                   placeholder={"Почта"}
                   className={style.input}
                   value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <br/><br/>
            <button className={style.button} id={style.regbutt} onClick={() => {
                if(newusername.length >=4 && newusername.length <=16){
                        store.changeUsername(username, email, newusername, props.showBubble, "Имя и почта от разных аккаунтов", "Аккаунт успешно зарегистрирован")
                        setEmail('');
                        setUsername('');
                        setNewusername('');
                } else {
                    props.showBubble("Длина никнэйма должна быть больше 4 и меньше 16 символов")
                }
            } }>Подтвердить</button>
        </div>
    );
};

export default ChangeUsernamePanel;