import React from 'react'
import { useSelector } from "react-redux";
import {OfferEnglish} from './OfferEnglish';
import {OfferPolish} from './OfferPolish';
import {OfferRussian} from './OfferRussian';

export const Offer = () => {
    const language = useSelector((state) => state.languageChanger.language)

    switch (language) {
        case "Polish":
            return (<OfferPolish/>)
        case "English":
            return (<OfferEnglish/>)
        case "Russian":
            return (<OfferRussian/>)
        default:
            return (<OfferPolish/>)
    }
}