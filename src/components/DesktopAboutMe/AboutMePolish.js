import React from 'react'
import '../desktop/desktop.styles.css'
import photo from '../../about-me.png'
import {ContactInfo} from '../ContactInfo/ContactInfo'
import UwDiploma from '../../Dyplom-UW.pdf'
import RussianCertificate from '../../TRKI-IV.pdf'
import ClientTestimonials from '../../Rekomendacje.pdf'

export const AboutMePolish = () => {
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
                            <img src={photo} className="pickRight" alt="photo"/>
                            <div className="Rounded-Box-2">MOJE WYKSZTAŁCENIE</div>
                            <section>
                                <p class = "Normal">Jestem absolwentką Uniwersytetu Warszawskiego, w 2004 roku ukończyłam studia magisterskie
                                    na kierunku filologia polska (specjalność nauczycielska). Moim rodzimym językiem jest polski, znam również:</p>
                            </section>
                            <section>
                                <ul className="Normal-DP">
                                    <li>
                                        <span className="color-normal">język rosyjski - na poziomie profesjonalnym (certyfikat TRKI-IV/C2, 2012 r.),</span>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <span>język angielski - na poziomie zaawansowanym (C1),</span>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <span>oraz język włoski - na poziomie średnio zaawansowanym (B1).</span>
                                    </li>
                                </ul>
                            </section>
                            <hr/>
                        </div>
                        <div className="fitContent">
                            <div className="Rounded-Box-2">MOJA PRACA</div>
                            <section>
                                <p class = "Normal"><b>Uczę obcokrajowców języka polskiego od 2005 roku, czyli już ponad 15 lat.</b>
                                    Początkowo pracowałam w warszawskich szkołach językowych, a w 2007 roku założyłam działalność
                                    gospodarczą. Prowadzę zajęcia grupowe i indywidualne, kursy stacjonarne i on-line, dla dorosłych
                                    i dla dzieci, udzielam prywatnych domowych lekcji, a także prowadzę szkolenia dla firm i przygotowuję
                                    moich uczniów do egzaminów certyfikatowych na wszystkich poziomach zaawansowania.</p>
                                <p class= "Normal">
                                    Potrafię w prosty sposób wyjaśniać zawiłości gramatyki (to wcale nie jest takie trudne jak
                                    się wydaje, naprawdę!), ale równie chętnie poćwiczę z Tobą prowadzenie niedbałej konwersacji
                                    przy herbacie, zaimprowizuję rozmowę kwalifikacyjną, czy razem z Twoim dzieckiem poczytam pierwszą
                                    w jego życiu polską książkę. Podczas zajęć korzystam z różnych podręczników, zarówno tych starych,
                                    jak i tych najnowszych, starając się zawsze, aby nauka była ciekawa i dostosowana do Twoich potrzeb.
                                    Lubię też sama przygotowywać różnorodne materiały dydaktyczne, którymi chętnie się dzielę,
                                    znajdziesz je na tej stronie, w zakładce „Materiały”.</p>
                                <p class = "Normal">
                                    W mojej pracy cenię sobie możliwość poznawania interesujących ludzi z różnych krajów,
                                    kultur i środowisk. Bardzo mnie cieszą wszystkie zdane przez Was egzaminy, pokonane blokady
                                    językowe, związane ze znajomością polskiego małe i duże sukcesy w pracy i w życiu, czy te właśnie
                                    po raz pierwszy czytane po polsku artykuły czy książki. Towarzyszenie Wam na ścieżce poznawania mojego
                                    rodzimego języka to dla mnie ogromna przyjemność!</p>
                            </section>
                            <hr/>
                        </div>
                        <div className="fitContent">
                            <div className="Rounded-Box-2">MOJE ZAINTEERESOWANIA</div>
                            <section>
                                <p class = "Normal"><b>Zawsze lubiłam czytać,</b> jako dziecko marzyłam, żeby pracować w bibliotece.
                                    Teraz również w wolnych chwilach chętnie sięgam po książkę, zwłaszcza z zakresu
                                    <b>literatury pięknej, religioznawstwa</b> lub <b>psychologi.</b> Moją pasją jest <b>uczenie się języków</b>
                                    i poznawanie związanych z nimi kultur. Znam już rosyjski, angielski i włoski i nie zamierzam na tym poprzestać!
                                </p>
                                <p class = "Normal">
                                    Nie jestem jednak typowym molem książkowym, równie chętnie aktywnie spędzam czas: na macie
                                    do jogi, na siłowni, na długich spacerach lub na rowerze. Od ponad 10 lat praktykuję jogę,
                                    a od 2019 roku pracuję również jako <b>nauczycielka jogi.</b> Pragnąc pogłębiać wiedzę i
                                    rozwijać swoje umiejętności w tej dziedzinie, w 2020 roku rozpoczęłam na <b>Akademii Wychowania
                                    Fizycznego Józefa Piłsudskiego w Warszawie</b> studia podyplomowe na kierunku relaksacja i joga.
                                </p>
                                <hr/>
                            </section>
                            <section>
                                <p>W załączeniu:</p>
                                <ul className="Normal-DP">
                                    <li>
                                        <span className="color-normal"><a href="#" className="headerProfile-menu-list" onClick={() => window.open(UwDiploma)}><i className="mdi mdi-help-circle"></i> Dyplom ukończenia studiów magisterskich</a></span>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <a href="#" className="headerProfile-menu-list" onClick={() => window.open(RussianCertificate)}><i className="mdi mdi-help-circle"></i> Certyfikat poświadczający znajomość języka rosyjskiego na poziomie C2</a>
                                    </li>
                                </ul>
                                <ul className="Normal-DP">
                                    <li>
                                        <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ClientTestimonials)}><i className="mdi mdi-help-circle"></i> Wybrane listy rekomendacyjne</a>
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