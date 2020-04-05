import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { AddHowTo } from './AddHowTo';
import { axiosWithoutAuth, axiosWithAuth } from './utils/axiosWithAuth';
import { HowToCard } from './HowToCard';



export default function Dashboard(props) {

    const [state, setState] = useState({ howtos: [] })

    useEffect(() => getData(), [])

    const getData = () => {
        axiosWithoutAuth()
            .get('howtos')
            .then(res => {
                console.log("Inside", res.data)
                setState({ howtos: res.data })
            })

            .catch(err => console.log("FE Error", err))
    }

    const deleteCard = (id) => {
        axiosWithoutAuth()
            .delete(`https://build-week-how-to.herokuapp.com/api/howtos/${id}`)
            .then(res => {
                console.log(res);
                getData();
            })
            .catch(err => {
                console.log(err.response)
                console.log("FE Error", err)
            });
    }


    return (
        <DashboardRoot>
            <AddHowTo />
            <HowToCard howtos={state.howtos} deleteCard={deleteCard} history={props.history} />
        </DashboardRoot>
    )
}

const DashboardRoot = Styled.div`
    display: flex;
    height: 85vh;
    // border: 1px solid red;
`