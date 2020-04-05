import React, { useState, useEffect } from "react";
import { axiosWithoutAuth } from './utils/axiosWithAuth';
import styled from "styled-components";

const ContainerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Divy = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 800px;
height: 500px;
background-color: #f5f0f5
`
const EditForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 20%;
`
const EditTitle = styled.input`
display: flex;
margin-top: 32px;
font-size: 16px;
width: 500px
display: block;
color: #4d2d52;
border: 2px solid rgba(77, 45, 82, 0.8);
`
const EditDesc = styled.textarea`
display: flex;
margin-top: 32px;
font-size: 16px;
width: 500px
height: 300px;
display: block;
color: #4d2d52;
border: 2px solid rgba(77, 45, 82, 0.8);
margin-bottom: 10%;
`
const UpdateButton = styled.button`
color: #fff !important;
text-decoration: none;
background: #553555;
padding: 10px;
border-radius: 5px;
display: inline-block;
text-align: center;
border: none;
margin: 20px;
width: 100px;
height: 50px;
font-size: .8rem;
font-weight: 400;

&:hover{
    background-color: #ADF1D2;
    box-shadow: 10px 5px 5px #070707;
`
const EditHeading = styled.h2`
display: flex;
align-items: center;
justify-content: center;
color: #553555;
border: 3px solid #f5f0f5;
width: 795px;
height: 50px;
margin-bottom: -5px;
background-color: #fcfafc

`
const initial = {
    name: '',
    desc: '',
    user_id: ''
}

export const UpdateHowTo = props => {
    const [updateForm, setUpdateForm] = useState(initial);

    useEffect(() => {
        console.log(props.match.params.id)
        axiosWithoutAuth()
            .get(`howtos/${props.match.params.id}`)
            .then(res => {
                console.log(res.data);
                setUpdateForm(res.data)
            })
            .catch(err => console.log('this is useEffect error', err))
    }, [props.match.params.id])


    const handleSubmit = event => {
        event.preventDefault();
        axiosWithoutAuth()
            .put(`howtos/${props.match.params.id}`, updateForm)
            .then(() => {
                console.log(updateForm.id);
                props.history.push(`/dashboard`)
            })
            .catch(err => console.log('this is handleSubmit error', err))
    }

    const handleChange = event => {
        setUpdateForm({ ...updateForm, [event.target.name]: event.target.value })
    }

    return (
        <ContainerDiv>
            <EditHeading>Edit this How-To</EditHeading>
            <Divy>

                <EditForm onSubmit={handleSubmit} >
                    <EditTitle
                        type="text"
                        name="name"
                        placeholder="title"
                        value={updateForm.name}
                        onChange={handleChange}
                    />
                    <EditDesc
                        type="text"
                        name="desc"
                        placeholder="content"
                        value={updateForm.desc}
                        onChange={handleChange}
                    />


                    <UpdateButton type="submit">
                        Update
                </UpdateButton>
                </EditForm>
            </Divy>



        </ContainerDiv>
    )
}