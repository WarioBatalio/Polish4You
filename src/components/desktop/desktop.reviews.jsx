import React from 'react'
import './desktop.styles.css'
import photo from '../../about-me.png'
import {Reviews} from '../Reviews/reviews.jsx'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const ReviewsFrame = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <article>
                    <Reviews/>
                </article>
            </main>
            <footer>
            </footer>
        </div>
    )
}