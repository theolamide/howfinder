import React from 'react';
import { axiosWithoutAuth } from './utils/axiosWithAuth';
import Styled from 'styled-components';

const Icons = Styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;

`

const Yellow = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: #96C5B0;
    transform: scale(1.5) rotate(30deg);
   
}

`
const Blue = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: 	#FF00FF;
    transform: scale(1.5) rotate(30deg);
   
}

`
const Violet = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: 	#9400D3;
    transform: scale(1.5) rotate(30deg);
   
}

`


const Pink = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: #FF1493;
    transform: scale(1.5) rotate(-30deg);
 
}

`

const Red = Styled.div`
color: black;
font-size: 70px;

:hover{
    color: 	#B22222;
    transform: scale(1.5) rotate(-30deg);  
   
}

`

const Howto = Styled.div`
background-color: #755B69;
box-shadow: black 3px 5px;
height: 60vh;
width: 70%;
margin-left: 15%;


`
const MainTitle = Styled.h2`
font-family: ComicSansMs;
font-size: 50px;

`
const ContentTitle = Styled.input`

width: 50%;
height: 5vh;
display:block;
margin-left: 25%;
margin-top: 5%;
font-size: 15px;
text-align: center;
font-weight: bold;



`
const Content = Styled.textarea`
width: 50%;
height: 5vh;
display:block;
margin-left: 25%;
margin-top: 5%;
font-size: 15px;
text-align: center;
font-weight: bold;

`
const ButtonStyle = Styled.button`
width: 15%;
height: 5vh;
margin-top: 5%;
text-align: center;
font-weight: bold;
background-color: #ADF1D2;

:hover{
    background-color: #96C5B0;
    box-shadow: black 5px 5px;
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
                this.props.history.push('/dashboard')
                // window.location="/dashboard"
            })
    }

    render() {
        return (
            <div>
                <h2>Add How-To</h2>

                <link rel={"stylesheet"} href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"} />
                <Icons>
                    <Yellow>
                        <i className="fa fa-car"></i>
                    </Yellow>
                    <Pink>
                        <i className="fa fa-bicycle"></i>
                    </Pink>

                    <Red>
                        <i className="fa fa-camera"></i>
                    </Red>

                    <Blue>
                        <i className="fa fa-coffee"></i>
                    </Blue>

                    <Violet>
                        <i className="fa fa-glass"></i>
                    </Violet>

                    <Violet>
                        <i className="fa fa-globe"></i>
                    </Violet>

                </Icons>
                <Howto>
                    <MainTitle>Add How-To</MainTitle>
                    <form>
                        <ContentTitle
                            type="text"
                            name="name"
                            placeholder="title"
                            value={this.state.addNewHowTo.name}
                            onChange={this.handleChange}
                        />
                        <Content
                            type="text"
                            name="desc"
                            placeholder="content"
                            value={this.state.addNewHowTo.desc}
                            onChange={this.handleChange}
                        />


                        <ButtonStyle type="submit" onClick={this.postNewHowTo}>
                            Publish
                        </ButtonStyle>
                    </form>
                </Howto>
            </div>
        )
    }
}

//Old Code
{/* <form>
                    <input 
                        type="text"
                        name="name"
                        placeholder="title"
                        value={this.state.addNewHowTo.name}
                        onChange={this.handleChange}
                    />
                    <textarea
                        type="text"
                        name="desc"
                        placeholder="content"
                        value={this.state.addNewHowTo.desc}
                        onChange={this.handleChange}
                    />
                   

                    <button type="submit" onClick={this.postNewHowTo}>
                        Publish
                    </button>
                </form> */}