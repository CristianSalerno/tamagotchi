import React, { useState } from 'react'

//Styles
import '../styles/tamagotchi.scss'
//Images
import tamagotchi from '../assets/tamagotchi.jpeg'
import tamagotchiPoo from '../assets/tamapoop.jpeg'
import tamagotchiDirty from '../assets/tamaclean.jpeg';
import tamagotchiFood from '../assets/tamafood.jpeg';
import tamagotchiSad from '../assets/tamauwu.jpeg';


function TamagotchiBody() {
    const [creature, setCreature] = useState(tamagotchi)

    const getCreature = () => {
        setCreature(tamagotchiPoo)
    }

    return (
        <div className="body">
            <div className="screen">
                <div className="screenLine--1" />
                <div className="creature">
                    <img src={creature} />
                </div>
                <div className="screenLine--2" />
            </div>
            <div className="buttons">
                <div className="button button--a" onClick={getCreature}></div>
                <div className="button button--b"></div>
                <div className="button button--c"></div>
            </div>
        </div>
    )
}

export default TamagotchiBody;