import React from 'react';
import Styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const CardsContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const IndividualCards = Styled.div`
    background-color: #BF77BF;
    border-radius: .8rem;
    width: 30%;
    height: 55vh;
    margin: 1rem;
    color: #070707;
    cursor: pointer;
    text-transform: capitalize;
    opacity: .8;

    :hover{
        transform: scale(1.1);
        color: white;
        opacity: 1;
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

&:hover{
    background-color: red;
    box-shadow: 10px 5px 5px #070707;
}
`

export const HowToCard = props => {
    // console.log(props)
    return (
        <CardsContainer>
            {props.howtos.map(item => (
                <IndividualCards key={item.id} className='IndividualCards' >
                    <h2> {item.name} </h2>
                    <p> {item.desc} </p>

                    {/* <Link to={`/update-howtos/${item.id}`}>
                        Edit
                    </Link> */}

                    <EditButton onClick={(e) => {

                        e.preventDefault();
                        console.log('Button CLicked');
                        props.history.push(`/update-howtos/${item.id}`);

                    }} >
                        Edit
                    </EditButton>


                    <DeleteButton onClick={() => props.deleteCard(item.id)}>
                        Delete
                    </DeleteButton>

                </IndividualCards>
            ))}

        </CardsContainer>
    )
}

{/* <button onClick={()=> {props.history.push(`/update-howtos/${item.id}`)}} >
                            Edit
                        </button> */}

                        // window.location.reload();
