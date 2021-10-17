import React from 'react'
import photo from '../../Nina.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const NinaReview = () => {
    return (
        <Review photo={photo} clientName = "Nina Sorokopud">
            <p>When I came to Poland, I knew some basics of the language, but it was Anna, who helped me to break the ice and start talking Polish.

                She is both good in explaining grammar rules and teaching new vocabulary. In addition she is great in tailoring her lessons to students' need.

                <b>I am very thankful to Anna for a friendly and inspiring atmosphere of her classes, which helped me within few months to achieve a significant progress in learning Polish.</b></p>
        </Review>
    )
}