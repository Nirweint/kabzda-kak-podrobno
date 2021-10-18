import React from 'react';

type OnOffPropsType = {
    isActive: boolean
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        padding: '5px',
        border: "1px solid black",
        marginLeft: "3px",
        backgroundColor: props.isActive ? "green" : "white",
    }

    const offStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        padding: '5px',
        border: "1px solid black",
        marginLeft: "3px",
        backgroundColor: props.isActive ? "white" : "red",
    }

    const indicatorStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.isActive ? "green" : "red",
    }


    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}