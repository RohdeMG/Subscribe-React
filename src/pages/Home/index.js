import React, { useState } from "react";
import Progress from "../../components/Progress";

const Home = () => {
    const [subscribers] = useState(500);
    const goal = 1000;

    return (
        <article className="App__container">
            <p className="App__container__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            
            <div className="App__container__subs">
                <p className="App__container__subs__count">133</p>
                <p className="App__container__subs__label">Inscritos</p>
            </div>
            <Progress contador={subscribers} goal={goal}/>
        </article>

    )
}

export default Home;