import React, {useContext, useState} from 'react';
import {Context} from "../pages";

const SkinAndCloakLoader = () => {
    const {store} = useContext(Context);
    const [name, setName] = useState('');
    return (
        <div>

        </div>
    );
};

export default SkinAndCloakLoader;