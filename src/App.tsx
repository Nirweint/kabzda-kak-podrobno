import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/Rating';

// function declaration
function App() {
    // do something
    console.log("App rendering");
    // return JSX!!!
    return (
        <div>
            {/* <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            Article 2
            <Rating value={4}/>
            <Accordion titleValue={"Users"} collapsed={false}/> */}

            {/* <OnOff />
            <OnOff />
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/> */}

            <UncontrolledRating />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering");
    return <h1>{props.title}</h1>;
}


export default App;
