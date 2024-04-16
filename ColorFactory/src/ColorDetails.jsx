import { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

const ColorDetails = () => {
    const { name } = useParams();

    const getColors = () => {
        const storedColors = localStorage.getItem('colors');
        return storedColors ? JSON.parse(storedColors) : [];
    };

    const color = getColors().find(color => color.name === name);

    useEffect(() => {
        document.body.style.backgroundColor = color ? color.hex : 'white';
        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, [color]);

    if (!color) {
        return <p style={{ color: 'red' }}>Color not found</p>;
    }

    return (
        <div style={{ backgroundColor: '#333', padding: '20px', color: 'white' }}>
            <h1>{color.name}</h1>
            <p>Hex: {color.hex}</p>
            <Link to="/colors" className='btn btn-primary'>Back</Link>
        </div>
    );
}

export default ColorDetails;
