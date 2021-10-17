import React from 'react'
import './desktop.styles.css'
import photo from '../../contact.png'
import mail from '../../img.png'
import tel from '../../img_1.png'
import house from '../../img_2.png'
import pig from '../../img_3.png'

export const Contact = () => {
    return (
        <div>
            <header>
                <h1>About Me</h1>
                <hr/>
            </header>
            <main>
                <article>
                    <div class="fitContent">
                        <img src={photo} className="photo-pickLeft" alt="photo"/>
                            <h4>My name is <b>Ania Wojtasiak</b> and I speak:</h4>
                            <ul className="Normal-DP">
                                <li>
                                    <span className="color-normal">Polish - it's my mother tongue</span>
                                </li>
                            </ul>
                            <ul className="Normal-DP">
                                <li>
                                    <span>Russian - fluently</span>
                                </li>
                            </ul>
                            <ul className="Normal-DP">
                                <li>
                                    <span>English - proficiently</span>
                                </li>
                            </ul>
                            <ul className="Normal-DP">
                                <li>
                                    <span> and Italian - on conversational level</span>
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
                                 title="house" alt="house"/>location: <b>Warsaw, ul. Elektoralna 26</b>; 10 minute walk from Hala
                            Gwardii, 20 minute walk from Palace of Culture and Science and 25 minute walk from the Old Town
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={pig}
                                 title="pig" alt="pig"/>business bank account:

                            Polish4You! Anna Wojtasiak
                            Bank Spółdzielczy w Białej Rawskiej
                            nr 18 9291 0001 0086 8798 3000 0010
                            IBAN: PL18 9291 0001 0086 8798 3000 0010
                            SWIFT: POLUPLPR
                        </p>
                    </section>
                </article>
            </main>
            <footer>

            </footer>
        </div>
    )
}