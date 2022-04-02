import React, { useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Daimond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div className='grandpa' >
            <h4>Grandpa</h4>
            <p>House:{house} <button
                onClick={handleBuyAHouse}>Buy a house</button></p>
            <section style={{ display: 'Flex' }}>
                <Father house={house} ornaments={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;