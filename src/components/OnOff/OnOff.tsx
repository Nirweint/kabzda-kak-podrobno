import React from 'react';

type OnOffPropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        padding: '5px',
        cursor: "pointer",
        border: "1px solid black",
        marginLeft: "3px",
        backgroundColor: props.value ? "green" : "white",
    }
    const offStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        padding: '5px',
        cursor: "pointer",
        border: "1px solid black",
        marginLeft: "3px",
        backgroundColor: props.value ? "white" : "red",
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red",
    }
    const onClickIndicatorToggle = () => props.onClick(!props.value)

    return (
        <div>
            <div style={onStyle} onClick={onClickIndicatorToggle}>On</div>
            <div style={offStyle} onClick={onClickIndicatorToggle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}