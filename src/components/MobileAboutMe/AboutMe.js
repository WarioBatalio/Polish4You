import React from 'react'
import { useSelector } from "react-redux";
import {AboutMeEnglish} from './AboutMeEnglish';
import {AboutMePolish} from './AboutMePolish';
import {AboutMeRussian} from './AboutMeRussian';

export const AboutMe = () => {
    const language = useSelector((state) => state.languageChanger.language)

    switch (language) {
        case "Polish":
            return ( <AboutMePolish/> )
        case "English":
            return ( <AboutMeEnglish/> )
        case "Russian":
            return ( <AboutMeRussian/> )
        default:
            return ( <AboutMePolish/> )
    }

    //var aboutMeMap = new Map();

    //aboutMeMap.set("Polish", AboutMePolish);
    //aboutMeMap.set("English", AboutMeEnglish);
    //aboutMeMap.set("Russian", AboutMeRussian);

    //return (
        //{aboutMeMap.get(language)}
    //)
}