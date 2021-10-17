import React from 'react'
import { useSelector } from "react-redux";
import {ContactEnglish} from './ContactEnglish';
import {ContactPolish} from './ContactPolish';
import {ContactRussian} from './ContactRussian';

export const Contact = () => {
    const language = useSelector((state) => state.languageChanger.language)

    switch (language) {
        case "Polish":
            return ( <ContactPolish/> )
        case "English":
            return ( <ContactEnglish/> )
        case "Russian":
            return ( <ContactRussian/> )
        default:
            return ( <ContactPolish/> )
    }
}
