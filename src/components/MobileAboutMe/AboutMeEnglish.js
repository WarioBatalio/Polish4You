import React from 'react'
import styles from '../mobile/mobile.styles.css'
import photo from '../../about-me.png'
import {ContactInfo} from '../ContactInfo/ContactInfo'
import UwDiploma from '../../Dyplom-UW.pdf'
import RussianCertificate from '../../TRKI-IV.pdf'
import ClientTestimonials from '../../Rekomendacje.pdf'

export const AboutMeEnglish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <div>
                    <article>
                        <div className="fitContent">
                            <img src={photo} className="pickMiddle" alt="photo"/>
                            <div className="Rounded-Box-2">MY EDUCATION</div>
                            <section>
                                <p class = "Normal">I am a graduate of the University of Warsaw. In 2004, I completed a master's degree
                                    in Polish
                                    philology (teaching specialisation).</p>
                                <p class = "Normal">My native language is Polish, but I also speak:</p>
                            </section>
                            <section>
                                <ul className="Normal-DP">
                                    <li>
                                        <span className="color-normal">Russian - at a professional level (TRKI-IV/C2 certificate),</span>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <span>English - at an advanced level (C1),</span>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <span>and Italian - at an intermediate level (B1).</span>
                                    </li>
                                </ul>
                            </section>
                            <hr/>
                        </div>
                        <div className="fitContent">
                            <div className="Rounded-Box-2">MY PROFESSION</div>
                            <section>
                                <p class = "Normal">   <b>I’ve been teaching Polish to foreigners since 2005, which is over 15 years
                                    now.</b>
                                    Initially, I worked at language schools in Warsaw, but then I set up my own business
                                    at 2007.
                                    I conduct various types of classes: individual and group, in-person and online, for
                                    adults and for children,
                                    as well as private home lessons and training sessions for companies, and I can help
                                    you prepare
                                    for the government-recognised certification exam at every level.</p>
                                <p class = "Normal">
                                       I can explain grammar complexities simply (it isn’t as difficult as it may seem,
                                    really!),
                                    but I will also willingly practise casual conversation with you over a cup of tea,
                                    improvise
                                    a job interview in Polish, or read Polish books together with your children. While
                                    conducting
                                    my lessons, I use different coursebooks and other teaching materials, some of them
                                    old and
                                    some brand-new, with the goal of making the learning process interesting and
                                    tailored to your
                                    needs. In addition, I like to prepare a variety of teaching materials myself, which
                                    I am happy
                                    to share. You can find them on the "Materials" subpage. </p>
                                <p class = "Normal">

                                    In my line of work, I appreciate having the opportunity to meet and work with great
                                    people
                                    from different countries, cultures, and backgrounds. I’m really quite proud of all
                                    the exams
                                    my students have passed, the language barriers they've overcome, the books they’ve
                                    read in
                                    Polish for the first time, and all other successes (both big and small) connected to
                                    improving
                                    their command of the language. Accompanying learners on the path of exploring my
                                    mother tongue is a real pleasure!</p>
                                <hr/>
                            </section>
                        </div>
                        <div className="fitContent">
                            <div className="Rounded-Box-2">MY INTERESTS</div>
                            <section>
                                <p class = "Normal"><b>I’ve always liked to read;</b> jas a child, my dream job was to work in a library.
                                    To this day, I often read books in my spare time, especially in the fields of
                                    <b>belles-lettres, religious studies,</b> and <b>psychologi.</b> My passion is.<b>learning
                                        foreign languages</b>
                                    and exploring the cultures related to them. Besides my native Polish, I already
                                    speak Russian, English, and Italian, and I'm not going to stop there!
                                </p>
                                <p class = "Normal">
                                    However, I am not a typical bookworm, as I also like spending my time in active
                                    ways: on
                                    a yoga mat, at the gym, on long walks, or even on a bicycle. I’ve been practising
                                    yoga for
                                    over 10 years now, and since 2019, I have been working as a <b>yoga
                                    teacher.</b> Last year,
                                    with a desire to deepen my knowledge and develop my skills, I enrolled in <b>postgraduate
                                    studies at the Józef Piłsudski University of Physical Education in Warsaw in the
                                    field of
                                    relaxation and yoga.</b>
                                </p>
                                <hr/>
                            </section>
                            <section>
                                <p>Attachments:</p>
                                <ul className="Normal-DP">
                                    <li>
                                        <span className="color-normal"><a href="#" className="headerProfile-menu-list" onClick={() => window.open(UwDiploma)}><i className="mdi mdi-help-circle"></i> Master's degree from the University of Warsaw</a></span>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <a href="#" className="headerProfile-menu-list" onClick={() => window.open(RussianCertificate)}><i className="mdi mdi-help-circle"></i> Certificate confirming knowledge of the Russian language at the C2 level</a>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ClientTestimonials)}><i className="mdi mdi-help-circle"></i> Selected client testimonials</a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </article>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}