import React, { useState } from 'react';
import {
    changeLanguage,
} from './languageChangerSlice';
import styles from './languageChanger.module.css';
import {useDispatch} from "react-redux";

export function LanguageChanger() {
    const dispatch = useDispatch()
    return (
        <div>
            <div className={styles.row}>
                <languageSelector>
                    <div>
                        <label className={styles.language}>Choose a language:</label>
                        <select onChange= {(event) => dispatch(changeLanguage(event.target.value))} name="language" id="language">
                            <option value="Polish">Polski</option>
                            <option value="English">English</option>
                            <option value="Russian">Pусский</option>
                        </select>
                    </div>
                </languageSelector>
            </div>
        </div>
    );
}