import React from 'react'
import { useSelector } from "react-redux";
import {MaterialsEnglish} from './MaterialsEnglish';
import {MaterialsPolish} from './MaterialsPolish';
import {MaterialsRussian} from './MaterialsRussian';

export const Materials = () => {
    const language = useSelector((state) => state.languageChanger.language)

    switch (language) {
        case "Polish":
            return ( <MaterialsPolish/> )
        case "English":
            return ( <MaterialsEnglish/> )
        case "Russian":
            return ( <MaterialsRussian/> )
        default:
            return ( <MaterialsPolish/> )
    }
}