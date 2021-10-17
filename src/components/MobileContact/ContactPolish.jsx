import React from 'react'
import styles from '../mobile/mobile.styles.css'
import photo from '../../contact.png'
import mail from '../../img.png'
import tel from '../../img_1.png'
import house from '../../img_2.png'
import pig from '../../img_3.png'
import {ContactForm} from '../ContactForm/ContactForm';
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const ContactPolish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
                <h1>O Mnie</h1>
                <hr/>
            </header>
            <main>
                <article>
                    <div class="fitContent">
                        <img src={photo} className="pickMiddle" alt="photo"/>
                        <h4>Nazywam się <b>Ania Wojtasiak</b> i mówię po:</h4>
                        <ul className="Normal-DP">
                            <li>
                                <span className="color-normal">polsku - to mój język rodzinny</span>
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>
                                <span>rosyjsku - płynnie</span>
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>
                                <span>angielsku - bardzo dobrze</span>
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>
                                <span> i włosku - radzę sobie</span>
                            </li>
                        </ul>
                    </div>
                    <section>
                        <p className="Normal" class="fitContent">
                            <img class="Contact-Photo"
                                 src={mail}
                                 title="envelope" alt="envelope"/>e-mail:
                            <a target=""
                               href="mailto:ania@polish4you.waw.pl"><strong>ania@polish4you.waw.pl</strong></a>
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={tel}
                                 title="tel" alt="tel"/>tel.,WhatsApp:
                            <b>+48 507 338 294</b>
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={house}
                                 title="house" alt="house"/>lokalizajca: <b>Warsaw, ul. Elektoralna 26</b>; 10 minut pieszo od
                            Hali Gwardii, 20 minut pieszo od Pałacu Kultury i Nauki i 25 minnut pieszo od Starego Miasta
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={pig}
                                 title="pig" alt="pig"/>firmowe konto bankowe:

                            Anna Wojtasiak
                            Bank Spółdzielczy w Białej Rawskiej
                            nr 18 9291 0001 0086 8798 3000 0010
                            IBAN: PL18 9291 0001 0086 8798 3000 0010
                            SWIFT: POLUPLPR
                        </p>
                    </section>
                </article>
                <article>
                    <hr />
                    <ContactForm />
                </article>
            </main>
            <footer>

            </footer>
        </div>
    )
}