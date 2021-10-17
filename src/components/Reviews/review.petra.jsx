import React from 'react'
import photo from '../../Petra.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const PetraReview = () => {
    return (
        <Review photo={photo} clientName = "Petra Zemanová">
            <p>Being Czech native speaker, I am facing specific issues with learning Polish as these languages are quite similar.
                Anna perfectly assessed my skills and was able to tailor the lessons to the topics and grammar I need.
                <b>Her lessons are interactive, variable, I never get bored. She is always prepared for the lesson and I feel that I get a high quality service.</b>
                Anna helped me also to understand better Poland and Polish people.</p>
        </Review>
    )
}