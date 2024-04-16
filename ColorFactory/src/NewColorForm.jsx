import React, { useState } from "react";
import './NewColorForm.css';

export default function NewColorForm({ addColor }) {

    const INITIAL_STATE = {
        name: "",
        hex: "",
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((f) => ({
            ...f,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit} className="new-color-form">
            <h3 style={ { color: '#444' }}>Add New Color</h3>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="hex">Hex Code:</label>
                <input
                    type="text"
                    id="hex"
                    name="hex"
                    value={formData.hex}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>
            <button type="submit" className="submit-btn">Add Color</button>
        </form>
    );
}