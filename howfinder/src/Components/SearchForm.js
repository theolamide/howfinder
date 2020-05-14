import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import SearchCard from "./SearchCard";
import styled from "styled-components";

const StyledButton = styled.button`
color: #fff !important;
text-decoration: none;
background: #553555;
padding: 10px;
border-radius: 5px;
display: inline-block;
border: none;
margin: 20px;
width: 80px;
height: 40px;
`
const Input = styled.input`
padding: 10px;
border: 1px solid #263650;
border-radius: 5px;
`

export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axiosWithAuth()
            // .get("https://build-week-how-to.herokuapp.com/api/howtos")
            .get("https://howfinder.herokuapp.com/api/howtos")
            .then(response => {
                console.log(response)
                const howtos = response.data.filter(data => data.name.toLowerCase().includes(query.toLowerCase())
                );
                setData(howtos);
            })
    }, [query])


    const handleChange = event => {
        setQuery(event.target.value);
    }
    return (
        <section className="search-form">
            <form>

                <Input className="searchinput"
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                />
                <StyledButton type="submit">Search</StyledButton>
            </form>

            {data.map((howto => {
                return (<SearchCard key={howto.id} name={howto.name} desc={howto.desc} />)
            }
            ))}

        </section>
    );
}