import React from 'react'
import '../desktop/desktop.styles.css'
import photo from '../../contact.png'
import mail from '../../img.png'
import tel from '../../img_1.png'
import house from '../../img_2.png'
import pig from '../../img_3.png'
import {ContactForm} from '../ContactForm/ContactForm'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const ContactPolish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <article>
                    <div class="fitContent">
                        <img src={photo} className="photo-pickLeft" alt="photo"/>
                        <h4>Nazywam się <b>Ania Wojtasiak</b> i mówię po:</h4>
                        <ul className="Normal-DP">
                            <li>
                                <span>polsku</span>
                                <span> - to mój język rodzinny</span>
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
                                 title="envelope" alt="envelope"/><b>e-mail:</b>
                            <a target=""
                               href="mailto:ania@polish4you.waw.pl"><strong>ania@polish4you.waw.pl</strong></a>
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={tel}
                                 title="tel" alt="tel"/><b>tel.,WhatsApp:</b>
                            +48 507 338 294
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={house}
                                 title="house" alt="house"/><b>lokalizajca:</b> Warsaw, ul. Elektoralna 26; 10 minut pieszo od
                            Hali Gwardii, 20 minut pieszo od Pałacu Kultury i Nauki i 25 minnut pieszo od Starego Miasta
                        </p>
                        <p><img className="Contact-Photo"
                                src={pig}
                                title="pig" alt="pig"/><b>firmowe konto bankowe:</b>
                        </p>
                        <ul className="Normal" class="fitContent">
                            <li>
                                Anna Wojtasiak
                            </li>
                            <li>
                                Bank Spółdzielczy w Białej Rawskiej
                            </li>
                            <li>
                                nr 18 9291 0001 0086 8798 3000 0010
                            </li>
                            <li>
                                IBAN: PL18 9291 0001 0086 8798 3000 0010
                            </li>
                            <li>
                                SWIFT: POLUPLPR
                            </li>
                        </ul>
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