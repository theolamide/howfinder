import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';


const NavBox = styled.nav`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    background-color: #553555
    // border: 1px solid red;
`

const H1Style = styled.h1`
    width: 20%;
    color: white;
    font-size: 2rem;`


const NavLink = styled(Link)`
    padding: 0.5rem;
    width: 5rem;
    text-decoration: none;
    color: #EDD5ED;
    text-align: center;
    cursor: pointer;
        &:hover{
        background-color: #553555;
        color: white;
        }
`
const NavDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin: 0 2rem;

        button{
            padding: 0.5rem;
            width: 5rem;
            background: #EDD5ED;
            border: 1px solid #EDD5ED;
            border-radius: 0.25rem;
            text-decoration: none;
            color: black;
            cursor: pointer;
                &:hover{
                background-color: #553555;
                color: white;
                box-shadow: 0.75px 0.75px 0.75px #EDD5ED;
                }
        }
`

const Nav = (props) => {

    const Logout = () => {
        localStorage.clear()
        props.history.push("/login")
    }

    return (
        <NavBox>
            <H1Style>How-To</H1Style>

            <NavDiv>
                <NavLink to="/dashboard">howFeed</NavLink>
                <NavLink to="/searchform">Search</NavLink>
                {/* Conditional Rendering of Login and Logout buttons */}
                {localStorage.getItem('token') ?
                    (<button onClick={Logout} > Logout </button>) :
                    null
                }
            </NavDiv>
        </NavBox>
    )
}

export default withRouter(Nav);