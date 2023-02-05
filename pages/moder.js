import React from 'react';
import MainContainer from "../components/MainContainer";
import Head from "next/head";
//todo возьми из страницы админки
const Moder = () => {
    return (
        <MainContainer>
            <Head>
                <title>Модерпанель</title>
                <meta name="viewport" content="width=1600"/>
            </Head>
        </MainContainer>
    );
};

export default Moder;