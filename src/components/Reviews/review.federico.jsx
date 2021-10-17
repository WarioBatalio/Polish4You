import React from 'react'
import photo from '../../Fede.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const FedericoReview = () => {
    return (
        <Review photo={photo} clientName = "Federico Forti">
            <p>When I came to Poland for the first time, about one year ago, I couldn’t speak any single word in Polish.
                I knew I could survive with my English, but soon I realized that without a bit of knowledge of the local
                language it’d have been highly difficult to really become part of this reality. So, trying to find out the
                best way to solve this problem, I came across this very website. After the preliminary contacts, I started the course
                And I found out that Ania is a very good teacher, at the same time exacting and available, professional and nice.
                <b>And hers are really polish lessons, held almost entirely in Polish. When I overcame the first impact,
                I realized that her method is really effective, though quite requiring both for teacher and for student.
                But without the continuous support of the English language (but when absolutely necessary) the progress
                in the Polish language are surprisingly fast. And now I have the big satisfaction of speaking with local
                people and realizing that I’m being understood!</b> Polish culture is nice and complex, as well as nice and really
                complex is Polish language, which you could hardly really learn in just one year time. But following the correct way,
                you could eventually find out that they’re also not as irksome as they might look like at the very beginning…
                If you’re looking for a path to get closer to real Poland, I’d suggest Ania’s guide with no hesitation at all.</p>
        </Review>
    )
}