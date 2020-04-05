import React from 'react';
import { axiosWithoutAuth } from './utils/axiosWithAuth';
import Styled from 'styled-components';
import { LabelDiv } from './SignUp';


const Howto = Styled.div`
    margin: 3rem 0;
    width: 25rem;
    height: 70vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid blue;
    border-right: 2px solid #553555;
`
const MainTitle = Styled.h2`
    mergin-top: 0; 
    color: #553555;   
`
const Form = Styled.form`
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const ContentTitle = Styled.input`
    width: 200px;
    height: 2.5rem;
    display:block;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    border: 1.25px solid gray;
    margin: 0.5%;
`
const Content = Styled.textarea`
    width: 200px;
    height: 5rem;
    display:block;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    border: 1.25px solid gray;
    margin: 0.5%;
`
const ButtonStyle = Styled.button`
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    background: #553555;
    padding: 15px;
    border-radius: 5px;
    border: none;
    transition: all 0.4s ease 0s;
    width: 25%;
    cursor: pointer;
        &:hover{
            background-color: #B289B2;
            box-shadow: 10px 5px 5px #553555;
        }
`


export class AddHowTo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewHowTo: {
                name: '',
                desc: '',
                user_id: localStorage.getItem("user_id")
            }
        };
    }

    handleChange = e => {
        this.setState({
            addNewHowTo: {
                ...this.state.addNewHowTo,
                [e.target.name]: e.target.value
            }
        });
    };

    postNewHowTo = (e) => {
        console.log(this.props)
        e.preventDefault()
        axiosWithoutAuth()
            .post('howtos', this.state.addNewHowTo)
            .then(res => {
                console.log(res)
                // console.log(this.props)
                // this.props.history.push('/dashboard')
                window.location.reload()
            })
    }

    // submitForm = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         name: '',
    //         desc: ''
    //     })
    // }

    render() {
        return (
            <Howto>
                <MainTitle>addHow</MainTitle>
                <Form >
                    <LabelDiv>
                        <ContentTitle
                            type="text"
                            name="name"
                            placeholder="title"
                            value={this.state.addNewHowTo.name}
                            onChange={this.handleChange}
                        />
                    </LabelDiv>
                    <LabelDiv>
                        <Content
                            type="text"
                            name="desc"
                            placeholder="content"
                            value={this.state.addNewHowTo.desc}
                            onChange={this.handleChange}
                        />
                    </LabelDiv>
                    <LabelDiv>
                        <ButtonStyle type="submit" onClick={this.postNewHowTo}>
                            Publish
                        </ButtonStyle>
                    </LabelDiv>
                </Form>
            </Howto >
        )
    }
}