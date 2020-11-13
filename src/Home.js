import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    const routeToShop = () => {
        console.log(history,"HISTORY");
        history.push("/help")
    };

    return (
        <div className="home-wrapper">
            <img
                className="home-image"
                src="../Assets/Pizza.jpg"
                alt="pizza"
            />
        </div>
    )
}