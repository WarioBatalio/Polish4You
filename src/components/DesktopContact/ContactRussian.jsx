import React from 'react'
import '../desktop/desktop.styles.css'
import photo from '../../contact.png'
import mail from '../../img.png'
import tel from '../../img_1.png'
import house from '../../img_2.png'
import pig from '../../img_3.png'
import {ContactForm} from '../ContactForm/ContactForm'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const ContactRussian = () => {
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
                        <h4>Меня зовут <b>Аня Войтасяк</b> и я говорю:</h4>
                        <ul className="Normal-DP">
                            <li>
                                <span className="color-normal">по-польски - это мой родной язык</span>
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>
                                <span>по-русски - свободно</span>
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>
                                <span>по-английски - очень хорошо</span>
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>
                                <span>и по-итальянски - на разговорном уровне</span>
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
                                 title="tel" alt="tel"/>тел.,WhatsApp:
                            <b>+48 507 338 294</b>
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={house}
                                 title="house" alt="house"/>место проведения занятий: Варшава, ul. Elektoralna 26; 10
                            минут пешком от Хали гвардии, 20 минут пешком от Дворца культуры и науки и 25 минут пешком
                            от Старого города
                        </p>
                        <p className="Normal" class="fitContent">
                            <img className="Contact-Photo"
                                 src={pig}
                                 title="pig" alt="pig"/>банковский счет компании:

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