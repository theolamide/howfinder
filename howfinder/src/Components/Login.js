import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Div1, SignUpDiv, LabelDiv, FieldInfo, GetStarted, FormikForm } from './SignUp';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';

const LogInto = Styled.button`
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
    cursor: pointer;
        &:hover{
            background-color: #B289B2;
            box-shadow: 10px 5px 5px #553555;
        }
`



const LogIn = ({ values, errors, touched, status }, props) => {
    const [LogForm, setLogForm] = useState([]);


    useEffect(() => {
        status && setLogForm(LogForm =>
            [...LogForm, status]);
    }, [status]);
    return (
        <Div1 className="FormField">
            <GetStarted>Sign In</GetStarted>
            <FormikForm>
                <SignUpDiv>
                    <LabelDiv>
                        <FieldInfo
                            type='text'
                            name='username'
                            placeholder='username'
                        />
                        {touched.username && errors.username && (
                            <p classname="errors">{errors.username}</p>
                        )}
                    </LabelDiv>

                    <LabelDiv>
                        <FieldInfo
                            type='password'
                            name='password'
                            placeholder='password'
                        />

                        {touched.password && errors.password &&
                            (<p classname='errors'> {errors.password}</p>
                            )}
                    </LabelDiv>

                    <LabelDiv>
                        <LogInto type="submit">SIGN IN</LogInto>
                    </LabelDiv>
                </SignUpDiv>
            </FormikForm>
        </Div1>
    )


}

const LogInForms = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",

        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),

    handleSubmit(values, { props, setStatus }) {
        axios
            .post("https://build-week-how-to.herokuapp.com/api/auth/login", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.user_id);
                props.history.push('/add-how-to')
            })
            .catch(err => console.log(err.response));
    }
})(LogIn);

export default LogInForms;

{/* <Icons>
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

</Icons> */}


// const Icons = Styled.div`
// display: flex;
// flex-flow: row wrap;
// justify-content: space-around;

// `

// const Yellow = Styled.div`
// color: black;
// font-size: 70px;


// :hover{
//     color: #96C5B0;
//     transform: scale(1.5) rotate(30deg);

// }

// `
// const Blue = Styled.div`
// color: black;
// font-size: 70px;


// :hover{
//     color: 	#FF00FF;
//     transform: scale(1.5) rotate(30deg);

// }

// `
// const Violet = Styled.div`
// color: black;
// font-size: 70px;


// :hover{
//     color: 	#9400D3;
//     transform: scale(1.5) rotate(30deg);

// }

// `


// const Pink = Styled.div`
// color: black;
// font-size: 70px;


// :hover{
//     color: #FF1493;
//     transform: scale(1.5) rotate(-30deg);



// }

// `

// const Red = Styled.div`
// color: black;
// font-size: 70px;

// :hover{
//     color: 	#B22222;
//     transform: scale(1.5) rotate(-30deg);



// }

// `

// const Entire = Styled(Form)`

// background-color: #755B69;
// display: flex;
// box-shadow: black 3px 5px;
// flex-direction: column;
// width: 70%;
// height: 40vh;
// margin-left: 15%
// margin-top: 15%
// padding-top: 5%
// position: fixed;




// `

// const LoginField = Styled(Field)`
// background-color: #755B69;
// border: .1px dotted white;
// color: white;
// font-weight: bold;
// font-size: 15px;
// width: 45%;
// margin-left: 25%;
// margin-top: 2%;
// height: 5vh;
// text-align: center;


// `

// const LogInto = Styled.button`

// width: 35%;
// margin-left: 30%;
// margin-right: 50%;
// height: 5vh;
// margin-top: 2%;
// color: black;
// font-weight: bold;
// font-size: 15px;
// background-color: #ADF1D2;

// :hover{
//     background-color: #96C5B0;
//     box-shadow: black 5px 5px;
// }
// `