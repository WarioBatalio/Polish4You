import React from 'react'
import '../desktop/desktop.styles.css'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const OfferEnglish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <article>
                    <div>
                        <p>Welcome! I offer Polish language courses for foreigners. Lessons can take place online, at my
                            location in the Wola district of Warsaw, or at your home or office.</p>
                        <p className = "Red">Before you enroll in a course, I invite you to take an initial lesson, free of charge.</p>
                        <hr/>
                    </div>
                    <div>
                        <p>I offer <b>Polish language courses</b> catering to:</p>
                        <ul className="Normal-DP">
                            <li><b>General day-to-day use</b> for all abilities and levels</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>Conversational Polish classes</b> - if your main aim is to increase your speaking confidence</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>Intensive Polish language courses</b> - if you wish to learn the language as fast as possible</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>All level government-recognised certificate examination in Polish as a foreign language
                                preparation courses</b> - if you need an official document</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>Polish lessons for kids</b> (minimum age: 7 years)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>Remote learning</b> - on Skype, Zoom, WhatsApp, Messenger...</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>and <b>Polish for Business Training courses</b></li>
                        </ul>
                    </div>
                    <div>
                        <p>As for the <b>number of people in the group</b>, you can choose:</p>
                        <ul className="Normal-DP">
                            <li>One-to-one sessions tailored to the student’s language priorities</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>Classes in a mini group (2 people)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>Classes in a small group (3-4 people)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>In the case of in-company courses, the number of participants is determined individually</li>
                        </ul>
                    </div>
                    <div>
                        <p>As for the <b>location of the classes</b>, you can choose between:</p>
                        <ul className="Normal-DP">
                            <li>The teacher’s location, i.e. my home office in Warsaw's Wola district, Elektoralna street</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>The student’s location, e.g. at your company or at home</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>Online classes (over Skype, Zoom, WhatsApp, or Messenger)</li>
                        </ul>
                    </div>
                    <div className="Desktop-Rounded-Box">
                        <p>
                            Before you start an individual course, I invite you to take a <b>free, 60-minute trial lesson</b>.
                            The aim of this lesson is for us to get to know each other, determine the level of your proficiency
                            in Polish, discuss matters related to the course, and to make your final decision about taking
                            the course easier.
                        </p>
                    </div>
                </article>
            </main>
            <footer>
            </footer>
        </div>
    )
}