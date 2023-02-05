import React, {useContext, useState} from 'react';
import {Context} from "../pages";
import style from "../styles/Signin.module.scss";


const ChronicleAdder = () => {
    const {store} = useContext(Context);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(store.getDate());
    const [newdate, setNewdate] = useState('')
    const [description, setDescription] = useState('');
    return (
        <div className={style.login}>
            <span className={style.greeting}>Добавление записи в летопись</span>
            <span className={style.greeting}>{date.split(" ")[0]}  {date.split(" ")[1]}.  {date.split(" ")[2]} г.
            </span>
            <input className={style.input} type={"text"} placeholder={"Новый заголовок летописи"} value={title} onChange={e => setTitle(e.target.value)}/>
            <input className={style.input} type={"text"} placeholder={"Новое описание летописи"} value={description} onChange={e => setDescription(e.target.value)}/>
            <input className={style.input} type={"text"} placeholder={"Дата образец: 11 мар(без точки) 524 (оставьте поле пустым, если нужна сегодняшняя дата)"} value={newdate} onChange={e => setNewdate(e.target.value)}/>
            <br/>
            <span className={style.greeting_2}>Перед отправкой проверь, что все данные введены корректно!</span>
            <br/>
            <button className={style.button} onClick={() => {
                if (newdate.length<3){
                    store.chronicleAdd(title, description, date)
                } else {
                    store.chronicleAdd(title, description, newdate)
                }
                setTitle('');
                setNewdate('');
                setDescription('');

            }}>Добавить запись в летопись</button>
        </div>
    );
};

export default ChronicleAdder;