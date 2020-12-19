import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 63px;
    border: none;
    border-bottom: 2px solid #005578;
    outline: none;
    padding: 5px;
    margin-right: 5px;
    text-indent: 20px;
`;

export default function PinInput(props) {

    let values = new Array(4).fill("");
    let elements = [];

    const handleChange = (e, i) => {
        if (isNaN(e.target.value)) {
            return false;
        }
        values[i] = e.target.value;
        let val = values.reduce((a, b) => a + b, "")
        props.onChange(val)
    };

    const handleOnKeyDown = (e, i) => {
        // key code for 0-9 & enter(8)
        if (
            (e.keyCode >= 48 && e.keyCode <= 58) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 8
        ) {
            if (e.keyCode === 8 && i === 0) {
                return false;
            }
            //focus on deleting
            else if (e.keyCode === 8 && i > 0) {
                if (e.target.value.length === 0) {
                    elements[i - 1].focus();
                }
            }
            //focus on adding
            else {
                if (e.target.value.length === 4 && i + 1 < elements.length) {
                    elements[i + 1].focus();
                }
            }
        }
    }

    const handlePaste = (e, index) => {
        e.preventDefault()
        let pasteData = e.clipboardData.getData("Text").split("");
        let arr = []
        let string = ""

        if (pasteData.length > 16)
            alert("Please paste 16 digit valid card number")
        else
            for (let j = 0; j < pasteData.length; j++) {
                string += pasteData[j]

                //4 digits per input box
                if ((j + 1) % 4 === 0) {
                    arr.push(string)
                    string = ""
                }
            }
        arr.forEach((item, i) => {
            values[i] = item
            elements[i].value = values[i]

            if (e.target.value.length === 4 && i + 1 < elements.length) {
                elements[i + 1].focus();
            }
        })
        props.onChange(arr.join(""));
    };

    return (
        <>
            {values.map((item, index) => (
                <InputBox
                    maxLength="4"
                    minLength="4"
                    onPaste={handlePaste}
                    onKeyUp={(e) => handleOnKeyDown(e, index)}
                    onChange={(e) => handleChange(e, index)}
                    key={index}
                    ref={(elem) => (elements[index] = elem)}
                />
            ))}
        </>
    );
}