import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { formInputs, cardRequest } from '../Redux/action'
import PinInputs from './PinInputs'
import { v4 as uuid } from 'uuid'

const FormWrapper = styled.div`
    // border: 1px solid pink;
    width: 260px;
    float: right;
    padding:10px;
    position:absolute;
    top:10px;
    left:600px;

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
    border-bottom: 2px solid #F50057;
    outline: none;
    // padding: 5px;
    //  margin-left: 25px;
     font-size: 20px;
     positive: relative;
     text-indent: 35px;
`;

const InputSmall = styled.input`
    width: 80px;
    border: none;
    border-bottom: 2px solid #F50057;
    outline: none;
    padding: 5px;
    margin-right: 18px;
    text-indent: 30px;
`;

const SmallInputs = styled.div`
    display: flex;
    // padding:30px;
    
`
const Button = styled.button`
    width: 100px;
    background-color:#F50057;
    color: white;
    font-size: 15px;
    font-weight: bold;
    align-self: left;
    border: none;
    border-radius: 10px;
    padding:10px;
    cursor:pointer;
    outline:none;
    margin-top: 30px;

     &:hover{
       background: pink
    }
`
const Title = styled.p`
    font-size: 10px;
    color: gray;
`

const Image = styled.img`
   width:20px;
   background:  #F50057;
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
    }, [holder, cardNo, month, year, cvc])

    const handleSubmit = () => {
        let id = uuid()
        if (holder !== "" && month !== "" && year !== "" && cvc !== "")
            dispatch(cardRequest({ holder, cardNo, month, year, cvc, id }))
        else
            alert("Please fill all input fields!")
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
                        {/* <InputBoxes> */}
                        <PinInputs />
                        {/* </InputBoxes> */}
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
