import React, { useState } from 'react';

type UncontrolledOnOffPropsType = {
    // on: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    let [on, setOn] = useState(false)

    
    const onStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        padding: '5px',
        cursor: "pointer",
        border: "1px solid black",
        marginLeft: "3px",
        backgroundColor: on ? "green" : "white",
}
    const offStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        padding: '5px',
        cursor: "pointer",
        border: "1px solid black",
        marginLeft: "3px",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }


    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}