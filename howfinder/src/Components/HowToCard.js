import React from 'react';
import Styled from 'styled-components';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const CardsContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;

    overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 5px;
                height: 0px;
                background-color: white;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #CC92CC;
            }

`
const IndividualCards = Styled.div`
    background-color: #EDD5ED;
    border-radius: .25rem;
    width: 70%
    // height: 55vh;
    margin: 0.5rem;
    color: #070707;    
    // text-transform: capitalize;
    padding: 0.5rem;

            h2{
                text-align: center;
                margin-top: 0;
            }

            p{
                margin:0 1rem;
            }
`

const EditButton = Styled.button`
    color: #fff !important;
    text-decoration: none;
    background: #553555;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    border: none;
    margin: 20px;
    width: 50px;
    height: 40px;
    font-size: .8rem;
    font-weight: 400;
    cursor: pointer;

        &:hover{
            background-color: #ADF1D2;
            box-shadow: 10px 5px 5px #070707;
        }
`
const DeleteButton = Styled.button`
    color: #fff !important;
    text-decoration: none;
    background: #553555;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    border: none;
    margin: 20px;
    width: 60px;
    height: 40px;
    font-size: .8rem;
    font-weight: 400;
    cursor: pointer;

        &:hover{
            background-color: red;
            box-shadow: 10px 5px 5px #070707;
        }
`

export const HowToCard = props => {
    var Username = localStorage.getItem('username')


    return (
        <CardsContainer>
            {props.howtos.map(item => (
                <IndividualCards key={item.id} className='IndividualCards' >
                    <h2> {item.name} by {item.username}</h2>
                    <p> {item.desc} </p>

                    {/* Conditional Rendering of edit and delete buttons */}
                    {Username === item.username ? (
                        <EditButton onClick={(e) => {
                            e.preventDefault();
                            console.log('Button CLicked');
                            props.history.push(`/update-howtos/${item.id}`);
                        }}>
                            Edit
                        </EditButton>
                    ) : null}

                    {Username === item.username ? (
                        <DeleteButton onClick={() => props.deleteCard(item.id)}>
                            Delete
                        </DeleteButton>
                    ) : null}

                </IndividualCards>
            ))}

        </CardsContainer>
    )
}