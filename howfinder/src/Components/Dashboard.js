import React, { useState, useEffect } from 'react';
import { AddHowTo } from './AddHowTo';
import { axiosWithoutAuth } from './utils/axiosWithAuth';
import { HowToCard } from './HowToCard';



export default function Dashboard(props) {

    const [state, setState] = useState({ howtos: [] })

    useEffect(() => getData(), [])

    const getData = () => {
        axiosWithoutAuth()
            .get('howtos')
            .then(res => {
                console.log(res.data)
                setState({ howtos: res.data })
            })
            .catch(err => console.log(err))
    }

    const deleteCard = (id) => {
        axiosWithoutAuth()
            .delete(`https://build-week-how-to.herokuapp.com/api/howtos/${id}`)
            .then(res => {
                console.log(res);
                getData();
            })
            .catch(err => console.log(err.response));
    }


    return (
        <div>
            <AddHowTo />
            <HowToCard howtos={state.howtos} deleteCard={deleteCard} history={props.history} />
        </div>
    )
}