import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House:{house}</p>
            <button onClick={handleHouseIncrease}>Aunty magic</button>
        </div>
    );
};

export default Aunty;