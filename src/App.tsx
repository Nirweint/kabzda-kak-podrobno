import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from "./components/OnOff/OnOff";

// function declaration
function App() {
    // do something

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [onOfValue, setOnOfValue] = useState<boolean>(false)

    // return JSX!!!
    return (
        <div className={"app"}>
            <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Menu"}
                onClick={setAccordionCollapsed}
                value={accordionCollapsed}
            />
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Users"}
                onClick={setAccordionCollapsed}
                value={accordionCollapsed}
            />

            <UncontrolledOnOff/>

            <OnOff value={onOfValue} onClick={setOnOfValue}/>
            <OnOff value={onOfValue} onClick={setOnOfValue}/>

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}

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
