import React from 'react'
import '../desktop/desktop.styles.css'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const OfferPolish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <article>
                    <div>
                        <p>Witajcie! Zapraszam na lekcje języka polskiego jako obcego. Zajęcia mogą odbywać się on-line, u mnie na warszawskiej Woli, albo w Twoim domu lub biurze.</p>
                        <p className = "Red">Przed rozpoczęciem kursu zapraszam na bezpłatną lekcję próbną.</p>
                        <hr/>
                    </div>
                    <div>
                        <p>Jeśli chodzi o <b>typ kursu</b>, proponuję:</p>
                        <ul className="Normal-DP">
                            <li><b>klasyczne kursy języka ogólnego</b> na wszystkich poziomach - od początkującego do zaawansowanego</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>konwersacje</b> - swobodnie rozmawiamy po polsku</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>kursy intensywne</b> - jeśli zależy Ci na jak najszybszym opanowaniu języka</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>kursy przygotowujące do państwowych egzaminów certyfikatowych</b> na wszystkich poziomach zaawansowania</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>zajęcia dla dzieci</b> (od siedmiu lat)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>kursy zdalne</b> - przez Skype, Zoom, WhatsApp, Messenger</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>oraz <b>szkolenia dla firm</b></li>
                        </ul>
                    </div>
                    <div>
                        <p>Jeśli chodzi o <b>ilość osób w grupie</b>, możesz wybrać kurs:</p>
                        <ul className="Normal-DP">
                            <li>indywidualny</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>w minigrupie (2 osoby)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>w małej grupie (3-4 osoby)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>w przypadku kursów in-company liczbę uczestników zajęć ustala się indywidualnie</li>
                        </ul>
                    </div>
                    <div>
                        <p>Jeśli chodzi o <b>miejsce odbywania się zajęć</b>, proponuję:</p>
                        <ul className="Normal-DP">
                            <li>moje domowe biuro, na warszawskiej Woli</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>lokalizację wskazaną przez ucznia, czyli na przykład Twoją firmę lub dom</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>lekcje przez komunikator internetowy, np. Skype, Zoom, WhatsApp, Messenger</li>
                        </ul>
                    </div>
                    <div className="Desktop-Rounded-Box">
                        <p>
                            Przed rozpoczęciem kursu indywidualnego zapraszam na <b>bezpłatną lekcję próbną</b> (60 min.).
                            Celem takiej lekcji jest poznanie się, sprawdzenie poziomu znajomości języka polskiego, omówienie
                            spraw związanych z kursem oraz ułatwienie podjęcia ostatecznej decyzji o przystąpieniu do niego.
                        </p>
                    </div>
                </article>
            </main>
            <footer>
            </footer>
        </div>
    )
}