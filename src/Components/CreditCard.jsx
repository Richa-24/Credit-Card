import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import style from '../card.module.css'
import { deleteCard } from '../Redux/action'
import { useDispatch } from 'react-redux'

const Cardwrapper = styled.div`
    height: 300px;
    width: 400px;
    padding: 10px;
`
const CardStyle = styled.div`
    width: 350px;
    height: 200px;
    background-color: #005578;
    border-radius: 10px;
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
    text-align: right;
`
const EnteredInput = styled.div`
    font-size: 15px;
    color: white;
`
const Button = styled.button`
    width: 100px;
    background-color:#005578;
    color: white;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding:10px;
    cursor:pointer;
    outline:none;
    margin-top: 30px;
    align-self: right;

     &:hover{
       background: #2B8ABA
    }
`
export default function CreditCard() {
    const { usersCard } = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteCard(id))
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                usersCard.map((item) => {
                    return (
                        <div key={item.id} >
                            <Cardwrapper>
                                <CardStyle>
                                    <Chip src="https://www.usxfcu.org/assets/1/6/emv_chip.png" />
                                    <Visa src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=visa" />
                                    <Triangles>
                                        <Left />
                                        <Right />
                                        <CardNum>
                                            <div>{item.cardNo}</div>
                                        </CardNum>

                                        <TextOnCard>
                                            <div className={style.flex}>
                                                <div>
                                                    <p>CARD HOLDER</p>
                                                    <EnteredInput>
                                                        <p>{item.holder}</p>
                                                    </EnteredInput>

                                                </div>
                                                <div>
                                                    <p>EXPIRES</p>
                                                    <EnteredInput>
                                                        <p>{item.month}/{item.year}</p>
                                                    </EnteredInput>


                                                </div>
                                                <div>
                                                    <p>CVC</p>
                                                    <EnteredInput>
                                                        <p>{item.cvc}</p>
                                                    </EnteredInput>

                                                </div>
                                            </div>

                                        </TextOnCard>
                                    </Triangles>
                                </CardStyle>

                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                            </Cardwrapper>
                        </div>

                    )
                })
            }
        </div>
    )
}