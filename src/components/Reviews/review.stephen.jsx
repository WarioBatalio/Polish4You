import React from 'react'
import photo from '../../Stephen.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const StephenReview = () => {
    return (
        <Review photo={photo} clientName = "Stephen Nunn">
            <p>I can confirm that I took intensive Polish lessons with Anna Wojtasiak during my first year in Poland.
                Anna is a <b>friendly, highly-enthusiastic, well-prepared and professional teacher, and from taking lessons
                    with her I quickly gained the confidence, vocabulary and skills necessary to communicate in a wide range of
                    day-to-day situations in Polish.</b>

                I would have no hesitation in recommending Anna to anyone wishing to learn Polish in the future.</p>
        </Review>
    )
}