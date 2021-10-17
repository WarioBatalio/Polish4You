import React from 'react'
import photo from '../../Slawek.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const SvyatoslavReview = () => {
    return (
        <Review photo={photo} clientName = "Svyatoslav Moshegov">
            <p><b>The course of Polish by Mrs. Anna Wojtasiak overcame my expectation. Besides upgrading my Polish spoken
                freedom and highlighting my grammar gaps, Mrs. Anna told me lots of curiosities about Poland and its people</b>,
                patiently listening to my irresolute sentences about the country I came from.

                Always having at her disposal a variety of entertaining tasks, she was pretty flexible while conducting the lesson,
                ready to elaborate any subject. Moreover, she was able to guess the subject interesting to me. The lessons directed
                this way were like a casual conversation with an old friend — so swiftly the time ran by. Fascinated by our chat,
                I didn’t even manage to drink a cup of tea, graciously offered by the hostess, during the 3 hours of classes.

                During the course I realized the problems I have to work on, got a significant inspiration to overcome them,
                along with even more passion for this rich and beautiful language. For this valuable result,
                I’d like to express to Mrs. Anna Wojtasiak my deep respect and high appreciation.</p>
        </Review>
    )
}