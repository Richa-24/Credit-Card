import React from "react";
import { useSelector } from 'react-redux'
import styled from "styled-components";
import style from '../card.module.css'

const Cardwrapper = styled.div`
    height: 300px;
    width: 400px;
    float: left;
    padding: 10px;
    top: 30px;
    position: relative; 
`
const ShadowCard = styled.div`
    width: 350px;
    height: 200px;
    background-color: #F5F5F5s;
    border-radius: 10px;
    position: relative;
    top: 40px;
    left: 40px;
    right: 50px;
    box-shadow: 10px 10px 15px  #BDBDBD;

    @media all and (max-width: 800px){
        top:80px;
        left: 80px;
    }
`
const CardStyle = styled.div`
    width: 350px;
    height: 200px;
    background-color: #005578;
    border-radius: 10px;
    position: absolute;
    top:10px;

    @media all and (max-width: 800px){
        top:50px;
        left: 50px;
    }
`
const Visa = styled.img`
    float: right;
    width: 60px;
    padding-right: 30px;
`
const Chip = styled.img`
    width: 40px;
    height: 30px;
    background-color: #005578;
    margin: 40px 0 0 30px;
`
const Left = styled.div`
    width: 0; 
    height: 0; 
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent; 
    border-right:80px solid #EEEEEE; 
    opacity: 0.2;
`
const Right = styled.div`
    width: 0; 
    height: 0; 
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-left: 80px solid #EEEEEE;
    opacity: 0.2;
        
`
const Triangles = styled.div`
    display: flex;
    position: relative;
    left: 100px;
    top: -40px;
    width:160px;
`
const TextOnCard = styled.div`
    display: flex;
    position: absolute;
    top: 100px;
    left: -80px;
    width: 400px;
    color: white;
    font-size: 10px;  
    `
const CardNum = styled.div`
    position: relative;
    top: 50px;
    left: -210px;
    font-size: 30px;
    color: white;
    font-family: kufam;
    display: flex;
`
const EnteredInput = styled.div`
    font-size: 15px;
    color: white;
`

export default function Card() {
    const { holder, cardNo, month, year, cvc } = useSelector((state) => state)

    return (
        <>
            <Cardwrapper>
                <ShadowCard />
                <CardStyle>

                    <Chip src="https://www.usxfcu.org/assets/1/6/emv_chip.png" />
                    <Visa src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=visa" />
                    <Triangles>
                        <Left />
                        <Right />
                        <CardNum>
                            {cardNo}
                        </CardNum>

                        <TextOnCard>

                            <div className={style.flex}>
                                <div>
                                    <p>CARD HOLDER</p>
                                    <EnteredInput>
                                        <p>{holder}</p>
                                    </EnteredInput>

                                </div>
                                <div>
                                    <p>EXPIRES</p>
                                    <EnteredInput>
                                        <p>{month}/{year}</p>
                                    </EnteredInput>

                                </div>
                                <div>
                                    <p>CVC</p>
                                    <EnteredInput>
                                        <p>{cvc}</p>
                                    </EnteredInput>
                                </div>
                            </div>

                        </TextOnCard>
                    </Triangles>
                </CardStyle>

            </Cardwrapper>
        </>
    )
}