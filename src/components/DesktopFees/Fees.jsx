import React from 'react'
import { useSelector } from "react-redux";
import {FeesEnglish} from './FeesEnglish';
import {FeesPolish} from './FeesPolish';
import {FeesRussian} from './FeesRussian';

export const Fees = () => {
    const language = useSelector((state) => state.languageChanger.language)

    switch (language) {
        case "Polish":
            return ( <FeesPolish/> )
        case "English":
            return ( <FeesEnglish/> )
        case "Russian":
            return ( <FeesRussian/> )
        default:
            return ( <FeesPolish/> )
    }
}