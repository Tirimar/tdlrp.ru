import React, {useContext, useState} from 'react';
import {Context} from "../pages/index";
import style from "../styles/Signin.module.scss"
import auth_style from "../styles/Auth.module.scss";
import Image from "next/image";
import Ok from "../public/images/ok.svg"
import Link from "next/link";
import {useRouter} from "next/router";


const RegForm = ({...props}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const router = useRouter();
    const {store} = useContext(Context);
    const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
    let checkbox;
    if (check === false){
        checkbox = <div className={style.agreement} onClick={() => {if(check === false){setCheck(true)}else setCheck(false)}}/>;
    } else {
        checkbox = <div className={style.agreement} onClick={() => {if(check === false){setCheck(true)}else setCheck(false)}}><Image src={Ok}/></div>
    }
    function redirect(){
        if (typeof window !== 'undefined') {
            router.push('/');
        }
    }
    return (
        <div className={style.login} id={style.greet}>
            <span className={style.greeting}>Приветствуем!</span>
            <span className={style.greeting_2}>Введите свои данные для регистрации</span>
            <input type={"email"}
                   placeholder={"Почта*"}
                   className={style.input}
                   value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <span className={auth_style.alert}>*вам придёт письмо с подтверждением</span>
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
            <div className={style.agree_block}>
                {checkbox}
                <label htmlFor="agree">Обязуюсь соблюдать <Link href={'rules'}><a className={style.rules}>правила</a></Link> проекта</label>
            </div>
            <button disabled={!check} className={check ? style.button : style.button_unactive} id={style.regbutt} onClick={async () => {
                if(username.length >=4 && username.length <=16){
                    if (password.length>=8 && password.length<=24){
                        if(!cyrillicPattern.test(username)){
                            try {
                                await store.registration(username, email, password, props.showBubble, "Такое имя или почта уже используются", "Проверьте почту, указанную при регистрации", "Регистрация временно недоступна")
                                setTimeout(() => redirect(), 3001);
                            } catch (e){

                            }
                        } else {
                            props.showBubble("Ник не должен содержать кириллицу.");
                        }

                    } else props.showBubble("Длина пароля должна быть больше 8 и меньше 24 символов");
                } else {
                    props.showBubble("Длина никнэйма должна быть больше 4 и меньше 16 символов")
                }
                } }>Подтвердить</button>
            <div className={style.have} onClick={() => props.setCss(auth_style.ladies_right)}>Уже есть аккаунт? Нажмите здесь</div>
        </div>
    );
};

export default RegForm;