import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

// function declaration
function App() {
    // do something
    console.log("App rendering");
    // return JSX!!!
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            Article 2
            <Rating value={4}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
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
