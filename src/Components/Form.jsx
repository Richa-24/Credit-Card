import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { formInputs, cardRequest } from '../Redux/action'
import PinInputs from './PinInputs'
import { v4 as uuid } from 'uuid'

const FormWrapper = styled.div`
    width: 300px;
    height: 300px;
    padding:10px;
    position:absolute;
    top:10px;
    left:500px;

    @media all and (max-width: 800px){
        top:350px;
        left: 100px;
    }
`
const InputWrapper = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column
`
const InputBoxes = styled.input`
    width: 300px;
    border: none;
    border-bottom: 2px solid #005578;
    outline: none;
     font-size: 20px;
     positive: relative;
     text-indent: 35px;
`;

const InputSmall = styled.input`
    width: 80px;
    border: none;
    border-bottom: 2px solid #005578;
    outline: none;
    padding: 5px;
    margin-right: 18px;
    text-indent: 30px;
`;

const SmallInputs = styled.div`
    display: flex;    
`
const Button = styled.button`
    width: 100px;
    background-color:#005578;
    color: white;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    padding:10px;
    cursor:pointer;
    outline:none;
    margin-top: 30px;

     &:hover{
       background: #2B8ABA
    }
`
const Title = styled.p`
    font-size: 10px;
    color: gray;
`

const Image = styled.img`
   width:20px;
   background:  #005578;
   position: absolute;
`
export default function Form() {
    const [holder, setHolder] = useState("")
    const [cardNo, setCardNo] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [cvc, setCvc] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(formInputs({ holder, cardNo, month, year, cvc }))
    }, [holder, cardNo, month, year, cvc, cardNo])

    const handleSubmit = (e) => {
        let id = uuid()
        if (holder !== "" && month !== "" && year !== "" && cvc !== "") {
            if (isNaN(month, year, cvc)) {
                alert("please fill valid number in month, year & cvc!")
                return false;
            }
            if (!isNaN(holder)) {
                alert("please enter valid holder name")
                return
            }
            else
                dispatch(cardRequest({ holder, cardNo, month, year, cvc, id }))
        }
        else {
            alert("Please fill all input fields!")
        }
        setHolder("")
        setMonth("")
        setYear("")
        setCvc("")
    }

    const onChange = (value) => {
        if (value.length === 16) {
            setCardNo(value)
        }
    }

    return (
        <>
            <FormWrapper>
                <p>Card Details</p>
                <InputWrapper>
                    <div>
                        <Title>CARDHOLDER NAME</Title>
                        <Image src="https://flaticons.net/icon.php?slug_category=people&slug_icon=customer" />
                        <InputBoxes value={holder} onChange={(e) => setHolder(e.target.value)} maxLength="12" />
                    </div>

                    <div>
                        <Title>CARD NUMBER</Title>
                        <Image src="https://flaticons.net/icon.php?slug_category=banking&slug_icon=safety-box-02" />

                        <SmallInputs><PinInputs onChange={onChange} /></SmallInputs>
                    </div>

                    <SmallInputs>
                        <div>
                            <Title>EXPIRY MONTH</Title>
                            <Image src="https://flaticons.net/icon.php?slug_category=office&slug_icon=for-this-week" />
                            <InputSmall value={month} onChange={(e) => setMonth(e.target.value)} maxLength="2" />
                        </div>
                        <div>
                            <Title>EXPIRY YEAR</Title>
                            <Image src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=calendar-date-02" />
                            <InputSmall value={year} onChange={(e) => setYear(e.target.value)} maxLength="2" />
                        </div>

                        <div>
                            <Title>CVC</Title>
                            <Image src="https://flaticons.net/icon.php?slug_category=network-security&slug_icon=lock" />
                            <InputSmall value={cvc} onChange={(e) => setCvc(e.target.value)} maxLength="3" />
                        </div>

                    </SmallInputs>

                    <Button onClick={handleSubmit}>SUBMIT</Button>

                </InputWrapper>
            </FormWrapper>
        </>
    )
}