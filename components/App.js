import React from 'react';
import MainContainer from "./MainContainer";
import ShortChronicle from "./ShortChronicle";
import TeamBlock from "./TeamBlock";
import WIkiBlock from "./WIkiBlock";
import Greeting from "./Greeting";
import Features from "./Features";

const App = ({team, wiki, chronicle}) => {
    return (
        <MainContainer>
            <Greeting/>
            <ShortChronicle chronicle={chronicle}/>
            <Features/>
            <WIkiBlock wiki={wiki}/>
        </MainContainer>
    );
}

export default App;
