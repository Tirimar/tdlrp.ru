import React, {useContext, useEffect, useState} from 'react';
import MainContainer from "../components/MainContainer";
import {Context} from "./index";
import RegForm from "../components/RegForm";
import WikiChanger from "../components/WikiChanger";
import TeamAdder from "../components/TeamAdder";
import UserActivator from "../components/UserActivator";
import RulesPanel from "../components/RulesPanel";
import SkinAndCloakLoader from "../components/SkinAndCloakLoader";
import ChronicleAdder from "../components/ChronicleAdder";
import Head from "next/head";
import Popup from "../components/Popup";
import UserAdder from "../components/UserAdder";
import {useRouter} from "next/router";
import ChangePasswordPanel from "../components/ChangePasswordPanel";
import ChangeUsernamePanel from "../components/ChangeUsernamePanel";

const Admin = () => {
    const router = useRouter()
    const {store} = useContext(Context);
    const [popup, setPopup] = useState();
    function showBubble(message){
        setPopup(<Popup message={message}/>)
        setTimeout(() => setPopup(""), 3000);
    }
    function checker () {
        if (typeof window !== 'undefined') {
            if (window.sessionStorage.getItem("roles") !== "ROLE_ADMIN" || store.user.role !== "ROLE_ADMIN" && !store.isAuth) {
                router.push('/404');
            } else {
                return (
                    <div>
                        {popup}
                        <Head>
                            <title>Админпанель</title>
                            <meta name="viewport" content="width=1600"/>
                        </Head>
                        <UserAdder showBubble={showBubble}/>
                        <UserActivator/>
                        <SkinAndCloakLoader/>
                        <ChronicleAdder/>
                        <WikiChanger/>
                        <TeamAdder/>
                        <RulesPanel/>
                        <ChangePasswordPanel showBubble={showBubble}/>
                        <ChangeUsernamePanel showBubble={showBubble}/>
                    </div>)
            }
        }
    }

    return (
        <MainContainer>
            {checker()}
        </MainContainer>
    )

};

export default Admin;