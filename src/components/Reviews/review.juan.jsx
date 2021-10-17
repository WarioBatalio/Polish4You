import React from 'react'
import photo from '../../Juan.jpg'
import '../desktop/desktop.styles.css'
import {Review} from './review'

export const JuanReview = () => {
    return (
        <Review photo={photo} clientName = "Juan Felipe Alvarado">
            <p>Z Anią czuję się bardzo swobodnie ucząc się tak trudnego języka, jakim jest polski. <b>Pomimo że nie jestem osobą,
                której przychodzi z łatwością nauka języków, Ani ufam i czuję się bezpiecznie i spokojnie podczas nauki polskiego.</b>
                Jest osobą miłą i profesjonalną, lekcje odbywają się co tydzień, zgodnie z jej metodą nauki, oraz zawsze jest moment na konwersacje.
                To najbardziej pomogło mi pozbyć się blokady, żeby zacząć mówić po polsku.</p>
        </Review>
    )
}