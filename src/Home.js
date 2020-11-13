import React from 'react';
import {useHistory} from 'react-router-dom';
import Pizza from './Pizza.jpg';

export default function Home() {
    const history = useHistory();

    const routeToShop = () => {
        console.log(history,"HISTORY");
        history.push("/order")
    };

    return (
        <div className="home-wrapper">
            <img
                className="home-image"
                src={Pizza}
                alt="pizza"
            />
        </div>
    )
}