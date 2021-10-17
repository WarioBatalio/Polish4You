import React from 'react'
import photo from '../../Rose.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const RoseReview = () => {
    return (
        <Review photo={photo} clientName = "Rosemary Jurkowski">
            <p>I have been studying Polish for one year at Polish4You!. My teacher, Ania Wojtasiak, is enthusiastic,
                well prepared, thorough and patient with a real love of teaching and the Polish language.
                We are told that this is the second most difficult language in the world after Chinese but <b>in spite of
                having no prior knowledge of Polish, I am very surprised and pleased with the significant progress I have made so far.</b>
                For all nationalities wanting to learn this beautiful language in a pleasant and positive environment I would highly recommend Polish4You!.</p>
        </Review>
    )
}