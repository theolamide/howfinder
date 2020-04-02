import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components'

const Div1 = styled.div`
width: 80%;
margin: 2%;
padding-right: .6%;
padding-bottom: 1%;
background-color: #f5f0f5;
border-radius: 10px;
margin-left: 10%;
`

const SignUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LabelDiv = styled.div`
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 350px;
    
`;

const FieldInfo = styled(Field)`
border-radius: 5px;
border: 1px solid gray;
width: 200px;
padding: 10px;
`;

const Label = styled.label`
margin-right: 20px;
display: flex;
width: 100px;
font-weight: 500;
`;

const SignUpButton = styled.button`
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #553555;
padding: 15px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
margin: 20px;
width: 25%;

&:hover{
    background-color: #ADF1D2;
    box-shadow: 10px 5px 5px #070707;
}

`
const GetStarted = styled.h2`
color: #553555;
`
const Desc = styled.p`
color: #706f6c;
width: 50%;
margin-top: -3%;
text-align: left;
`
const PDiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
max-width: 700px;
margin-bottom: 1%;
`

const DivContainer = styled.div`
display: flex;
flex-direction: column;
`
const FlexDiv = styled.div`
display: flex;
justify-content: center;
`
const SignUp = ({ values, touched, errors, status }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);



    return (
        <Div1>
            <DivContainer>
                <GetStarted>Get started with a free account</GetStarted>
                <FlexDiv>
                    <PDiv>
                        <Desc>Create an account to start hacking your life by discovering and sharing the best life hacks on the internet.</Desc>
                    </PDiv>
                </FlexDiv>

            </DivContainer>

            <Form>
                <SignUpDiv>

                    <LabelDiv>
                        <Label>Username</Label>
                        <FieldInfo type="text" name="username" />
                        {touched.username && errors.username && (<p>{errors.username}</p>)}

                    </LabelDiv>

                    <LabelDiv>
                        <Label>Password</Label>
                        <FieldInfo type="password" name="password" />
                        {touched.email && errors.email && (<p>{errors.email}</p>)}
                    </LabelDiv>

                    <LabelDiv>
                        <Label>Email</Label>
                        <FieldInfo type="email" name="email" />
                        {touched.password && errors.password && (<p>{errors.password}</p>)}


                    </LabelDiv>

                    <LabelDiv>
                        <Label>User Type</Label>
                        <FieldInfo type="usertype" name="usertype" placeholder="User or Content Creator">
                            {touched.usertype && errors.usertype && (<p>{errors.usertype}</p>)}
                        </FieldInfo>
                    </LabelDiv>
                    <LabelDiv>
                        <SignUpButton type="submit">Submit</SignUpButton>
                    </LabelDiv>

                </SignUpDiv>
            </Form>
        </Div1>
    )
}

const FormikSignUp = withFormik({
    mapPropsToValues({ username, password, email, usertype }) {
        return {
            username: username || "",
            password: password || "",
            email: email || "",
            usertype: usertype || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
        email: Yup.string().required(),
        usertype: Yup.string().required()
    }),

    handleSubmit(values, { props, setStatus }) {
        axios
            .post("https://build-week-how-to.herokuapp.com/api/auth/register", values)
            .then(res => {
                setStatus(res.data);
                console.log(res.status);
                props.history.push('/login')
            })
            .catch(err => console.log(err.res));
    }
})(SignUp);

export default FormikSignUp


//For Ola's Use
{/* <label>Account Type
    <Field type="usertype" name="usertype" placeholder="User or Content Creator"/>
    {touched.usertype && errors.usertype && (<p>{errors.usertype}</p>)}
</label>
<button>Submit</button> */}

//Old code block for Account type
{/* <label>Account Type
    <Field required as="select" name="userType">
        <option value="user">User</option>
        <option value="contentcreator">Content Creator</option>
    </Field>
    <button>Submit</button>
</label> */}
