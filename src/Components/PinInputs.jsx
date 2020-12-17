import React, { useEffect } from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

const InputBox = styled.input`
    width: 10px
    border: none;
    border-bottom: 2px solid #F50057;
    outline: none;
    // padding: 5px;
    //  margin-left: 25px;
     font-size: 20px;
     positive: relative;
     text-indent: 35px;
`;

export default function PinInput() {

    let values = new Array(4).fill("");
    let elements = [];


    // useEffect(() => {
    //     elements[0].focus();
    // }, [])

    const handleChange = (e, i) => {
        if (isNaN(e.target.value)) {
            return false;
        }
        values[i] = e.target.value;

    };

    const handleOnKeyDown = (e, i) => {
        if (
            (e.keyCode >= 48 && e.keyCode <= 58) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 8
        ) {
            if (e.keyCode === 8 && i === 0) {
                return false;
            }
            else if (e.keyCode === 8 && i > 0) {
                elements[i - 1].focus();
            } else {

                if (e.target.maxLength === 4 && i + 1 < elements.length) {
                    elements[i + 1].focus();
                }
            }
        }
        // if (!values.includes("")) {
        // elements.forEach(item => {
        // item.style.outline = " solid 2px green"
        // item.style.background = "#C8E6C9"
        // })
        // } else {
        //     elements.forEach(item => {
        //         item.style.outline = ""
        //         item.style.background = ""
        //     })
    }


    const handlePaste = (e, index) => {
        e.preventDefault()
        let pasteData = e.clipboardData.getData("Text").split("").map(Number);

        if (pasteData.length > 16) {
            alert("Invalid pin: Please enter 16 digit pin");
        } else {
            for (let i = 0; i < pasteData.length; i++) {
                values[i] = pasteData[i];
                elements[i].value = pasteData[i]
                if (e.target.maxLength === 4 && i + 1 < elements.length) {
                    elements[i + 1].focus();
                }
            }
        }
        // if (!values.includes("")) {
        // elements.forEach(item => {
        // item.style.outline = " solid 1px green"
        // item.style.background = "#C8E6C9"
        // })
        // } else {
        //     elements.forEach(item => {
        //         item.style.outline = ""
        //         item.style.background = ""
        //     })
    }
    // console.log(values)


    return (
        <>
            {values.map((item, index) => (
                <InputBox
                    maxLength="4"
                    minLength="4"
                    onPaste={handlePaste}
                    onKeyUp={(e) => handleOnKeyDown(e, index)}
                    onChange={(e) => handleChange(e, index)}
                    // onFocus={(e) => e.target.style.outline = " solid 2px green"}
                    // onBlur={(e) => e.target.style.outline = ""}
                    key={index}
                    ref={(elem) => (elements[index] = elem)}

                />
            ))}
        </>
    );
}

// PinInput.propTypes = {
//     length: PropTypes.number.isRequired,
//     label: PropTypes.string
// };
// export default PinInput;
