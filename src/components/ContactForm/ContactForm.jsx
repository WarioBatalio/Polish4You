import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import '../mobile/mobile.styles.css'
import '../desktop/desktop.styles.css'
import { useMediaQuery } from 'react-responsive';
import {
    changePolishLevel,
} from './motherChangerSlice';
import { useSelector, useDispatch } from "react-redux";

export const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message, polishLevel } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            polishLevel: polishLevel.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    const dispatch = useDispatch()

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p className="Middle" htmlFor="name">Name:</p>
                <textarea type="text" id="name" className="button-pickMiddle" cols = "35" rows = "1" required />
            </div>
            <div>
                <p className="Middle" htmlFor="email">Email:</p>
                <textarea type="email" id="email" className="button-pickMiddle" cols = "35" rows = "1" required />
            </div>
            <div className="fitContent" className="Middle" htmlFor="polishLevel">
                <p className="Middle" htmlFor="message">My fluency in polish:</p>
                <select name="polishLevel" id="polishLevel">
                    <option required>A1.1</option>
                    <option required>A1.2</option>
                    <option required>A2.1</option>
                    <option required>A2.2</option>
                    <option required>B1.1</option>
                    <option required>B1.2</option>
                    <option required>B2.1</option>
                    <option required>B2.2</option>
                    <option required>C1.1</option>
                    <option required>C1.2</option>
                    <option required>C2.1</option>
                    <option required>C2.2</option>
                </select>
            </div>
            <div>
                <p className="Middle" htmlFor="message">Message:</p>
                <textarea  id="message" className="button-pickMiddle" cols = "35"  rows = "3" required />
                <hr />
            </div>
            <div>
                <button type="submit" className = "button-pickMiddle">{status}</button>
            </div>
        </form>
    );
}