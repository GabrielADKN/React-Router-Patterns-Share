import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './ColorList.css';
import NewColorForm from "./NewColorForm";
import initialColors from "../db.json";

export default function ColorList() {
    const [colors, setColors] = useState([]);

    function addColor(newColor) {
        const updatedColors = [
            ...colors,
            { ...newColor, id: newColor.name.toLowerCase().replace(/ /g, '-') }
        ];
        setColors(updatedColors);
        localStorage.setItem('colors', JSON.stringify(updatedColors));
    }

    useEffect(() => {
        const savedColors = localStorage.getItem('colors');
        if (savedColors) {
            setColors(JSON.parse(savedColors));
        } else {
            setColors(initialColors.colors);
            localStorage.setItem('colors', JSON.stringify(initialColors.colors));
        }
    }, []);

    return (
        <>
            <NewColorForm addColor={addColor} />
            <div className="color-list">
                <h1 className="title">Color List</h1>
                <ul className="color-ul">
                    {colors.map((color) => (
                        <li key={color.id} style={{ backgroundColor: color.hex }}>
                            <Link to={`/colors/${color.name}`} className="color-link">{color.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
