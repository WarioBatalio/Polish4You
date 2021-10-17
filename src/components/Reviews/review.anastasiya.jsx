import React from 'react'
import photo from '../../Anastazja.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const AnastasiyaReview = () => {
    return (
        <Review photo={photo} clientName = "Anastasiya Gubanova">
            <p><b>Since our first lesson Anna built open and friendly environment which allowed to dive in a
                new language without a fear.</b> In the beginning we started with face-to-face lessons and
                afterwards we switch to on-line sessions. Based on my experience I can tell that both formats
                worked well for me and I managed to achieve noticeable progress during those 1,5 years learning
                with Anna’s support. I can understand and speak Polish on the basic level, which helps me
                communicate with other people here in Poland.</p>
            <p>I appreciate a lot Annas’ dedication to her work and flexible approach. She always knows how to
                motivate her students when they must deal with difficult for understanding topics. She keeps the
                interest in learning by combining practice tasks in different books steadily developing student’s
                verbal skills, enlarging the vocabulary and gaining knowledge in grammar.</p>
            <p>I am grateful for all her efforts and would definitely recommend her classes to my friends and
                colleagues.</p>
        </Review>
    )
}