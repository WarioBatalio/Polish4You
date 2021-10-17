import React from 'react'
import '../desktop/desktop.styles.css'
import '../mobile/mobile.styles.css'
import photo from '../../about-me.png'
import {ContactInfo} from '../ContactInfo/ContactInfo'
import Alfabet from '../../alfabet.pdf'
import RodzajRzeczownika from '../../rodzaj-gramatyczny.pdf'
import Liczebniki from '../../Liczebniki.pdf'
import OdmianaLiczebnikiRodzaje from '../../jeden-dwa-trzy.pdf'
import OdmianaLiczebnikiRodzajePrzypadki from '../../dwa-dwie-dwaj.pdf'
import Przypadki from '../../przypadki.pdf'
import OdmianaRzeczowniki from '../../trudne-rzeczowniki.pdf'
import PluraliaTantum from '../../pluralia-tantum.pdf'
import OdmianaZaimkiDzier from '../../zaimki-dzierżawcze.pdf'
import OdmianaZaimkiWskaz from '../../ten-ta-to.pdf'
import ReakcjiaPrzyim from '../../rekcja-przyimków.pdf'
import ReakcjaDopełniacz from '../../rekcja-plansze-dopełniacz.pdf'
import ReakcjaBiernik from '../../rekcja-plansze-biernik.pdf'
import ReakcjaNarzędnik from '../../rekcja-plansze-narzędnik.pdf'
import ReakcjaMiejscownik from '../../rekcja-plansze-miejscownik.pdf'
import StopniowaniePrzym from '../../stopniowanie-przymiotników.pdf'
import StopniowaniePrzys from '../../stopniowanie-przysłówków.pdf'
import CzasTeraz from '../../czas-teraźniejszy.pdf'
import CzasPrzesz from '../../czas-przeszły.pdf'
import CzasPrzysz from '../../czas-przyszły-złożony.pdf'
import Aspekt from '../../aspekt.pdf'
import CzasownikiRuchu from '../../czasowniki-ruchu.pdf'
import TrybWarunk from '../../Tryb-warunkowy.pdf'
import TrybRoz from '../../tryb-rozkazujący.pdf'
import KoniugCzasPowiem from '../../powinien.pdf'
import KoniugCzasByc from '../../być.pdf'
import Imienislowy from '../../imiesłowy.pdf'
import CzesciMowy from '../../części-mowy.pdf'
import Obocz from '../../oboczności.pdf'
import Negacja from '../../negacja.pdf'
import UwDiploma from '../../Dyplom-UW.pdf'
import RussianCertificate from '../../TRKI-IV.pdf'
import ClientTestimonials from '../../Rekomendacje.pdf'

export const MaterialsRussian = () => {
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
                            <img src={photo} className="pickRight" alt="photo" style={{height: 220}} />
                            <section>
                                <p class = "Normal">
                                    Польский язык, сложен ли он в изучении? По-моему нет сложных или легких языков, все
                                    зависит от того, какой из них - твой родной и какие иностранные языки уже изучены
                                    тобой. Безусловно, носителям славянских языков польский будет даваться легче :) Но
                                    главный фактор успеха - сколько усилий, любви и терпения будет вложено в обучение.
                                </p>
                                <p class = "Normal">
                                    Здесь будут размещаться материалы для самостоятельного изучения польского языка.
                                    Надеюсь, они будут полезны и, благодаря ним процесс обучения станет еще интереснее,
                                    удобнее и приятнее.
                                </p>
                                <p class = "Normal">
                                    Для преподавателей польского как иностранного языка: я буду рада, если вы
                                    воспользуетесь распечатками данных материалов при проведении своих занятий (все
                                    материалы, размещенные здесь, доступны для скачивания).
                                </p>
                                <hr/>
                            </section>
                        </div>
                        <div className="fitContent">
                            <section>
                                <p className="pinkHeader"><b>МАТЕРИАЛЫ PDF</b></p>
                                <table class="Material-Classes">
                                    <tbody>
                                    <tr>
                                        <td className="Fees-Package">
                                            <strong>ГРАММАТИЧЕСКИЕ ТАБЛИЦЫ</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Alfabet)}><i className="mdi mdi-help-circle"></i> Alfabet</a>
                                                    <span className="color-normal"> - idealna tabela na pierwszą lekcję polskiego :)</span>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <p className="pinkBody">
                                                <b>
                                                    Числительные:
                                                </b>
                                            </p>
                                            <hr/>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(RodzajRzeczownika)}><i className="mdi mdi-help-circle"></i> Rodzaj gramatyczny rzeczownika</a>
                                                    <span className="color-normal"> : męski, żeński i nijaki, męskoosobowy i niemęskoosobowy, męskożywotny i męskorzeczowy... - o co w tym chodzi? :) </span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Liczebniki)}><i className="mdi mdi-help-circle"></i> Liczebniki główne, porządkowe i zbiorowe</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(OdmianaLiczebnikiRodzaje)}><i className="mdi mdi-help-circle"></i> Odmiana liczebników przez rodzaje</a>
                                                    <span className="color-normal"> : jeden, jedna, jedno, dwa, dwie, dwaj, dwóch, dwoje...</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(OdmianaLiczebnikiRodzajePrzypadki)}><i className="mdi mdi-help-circle"></i> Odmiana liczebnika "dwa" przez rodzaje i przypadki</a>
                                                    <span className="color-normal"> : dwa, dwie, dwaj, dwiema...</span>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <p className="pinkBody">
                                                <b>
                                                    Склонение:
                                                </b>
                                            </p>
                                            <hr/>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Przypadki)}><i className="mdi mdi-help-circle"></i> Przypadki</a>
                                                    <span className="color-normal"> : mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik i wołacz</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(OdmianaRzeczowniki)}><i className="mdi mdi-help-circle"></i> Odmiana "trudnych" rzeczowników</a>
                                                    <span className="color-normal"> : brat, człowiek, dziecko, imię, ksiądz, książę, miłość, muzeum, pieniądz, przyjaciel, zwierzę</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(PluraliaTantum)}><i className="mdi mdi-help-circle"></i> Pluralia tantum</a>
                                                    <span className="color-normal"> czyli rzeczowniki, które mają tylko liczbę mnogą</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(OdmianaZaimkiDzier)}><i className="mdi mdi-help-circle"></i> Odmiana zaimków dzierżawczych</a>
                                                    <span className="color-normal"> : mój, moja, moje</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(OdmianaZaimkiWskaz)}><i className="mdi mdi-help-circle"></i> Odmiana zaimków wskazujących</a>
                                                    <span className="color-normal"> : ten, ta, to</span>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <p className="pinkBody">
                                                <b>
                                                    Рекция (управление глаголов и предлогов):
                                                </b>
                                            </p>
                                            <hr/>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ReakcjiaPrzyim)}><i className="mdi mdi-help-circle"></i> Rekcja przyimków</a>
                                                    <span className="color-normal"> - 6 kolorowych plansz</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ReakcjaDopełniacz)}><i className="mdi mdi-help-circle"></i> Rekcja: dopełniacz</a>
                                                    <span className="color-normal"> - 6 kolorowych plansz</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ReakcjaBiernik)}><i className="mdi mdi-help-circle"></i> Rekcja: biernik</a>
                                                    <span className="color-normal"> - 13 kolorowych plansz</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ReakcjaNarzędnik)}><i className="mdi mdi-help-circle"></i> Rekcja: narzędnik</a>
                                                    <span className="color-normal"> - 5 kolorowych plansz</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(ReakcjaMiejscownik)}><i className="mdi mdi-help-circle"></i> Rekcja: miejscownik</a>
                                                    <span className="color-normal"> - 6 kolorowych plansz</span>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <p className="pinkBody">
                                                <b>
                                                    Степени сравнения прилагательных и наречий:
                                                </b>
                                            </p>
                                            <hr/>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(StopniowaniePrzym)}><i className="mdi mdi-help-circle"></i> Stopniowanie przymiotników</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(StopniowaniePrzys)}><i className="mdi mdi-help-circle"></i> Stopniowanie przysłówków</a>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <p className="pinkBody">
                                                <b>
                                                    Спряжение:
                                                </b>
                                            </p>
                                            <hr/>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(CzasTeraz)}><i className="mdi mdi-help-circle"></i> Czas teraźniejszy, grupy koniugacyjne</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(CzasPrzesz)}><i className="mdi mdi-help-circle"></i> Czas przeszły</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(CzasPrzysz)}><i className="mdi mdi-help-circle"></i> Czas przyszły złożony</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Aspekt)}><i className="mdi mdi-help-circle"></i> Aspekt</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(CzasownikiRuchu)}><i className="mdi mdi-help-circle"></i> Czasowniki ruchu</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(TrybWarunk)}><i className="mdi mdi-help-circle"></i> Tryb warunkowy (przypuszczający)</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(TrybRoz)}><i className="mdi mdi-help-circle"></i> Tryb rozkazujący</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(KoniugCzasPowiem)}><i className="mdi mdi-help-circle"></i> Koniugacja czasownika "powinien"</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(KoniugCzasByc)}><i className="mdi mdi-help-circle"></i> Koniugacja czasownika "być"</a>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <p className="pinkBody">
                                                <b>
                                                    Остальные таблицы:
                                                </b>
                                            </p>
                                            <hr/>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Imienislowy)}><i className="mdi mdi-help-circle"></i> Imiesłowy</a>
                                                    <span className="color-normal"> : przymiotnikowe (czynne i bierne) i przysłówkowe (współczene i uprzednie)</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(CzesciMowy)}><i className="mdi mdi-help-circle"></i> Części mowy</a>
                                                    <span className="color-normal"> : liczebniki, rzeczowniki, przymiotniki, przysłówki, przyimki...</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Obocz)}><i className="mdi mdi-help-circle"></i> Oboczności (alternacje)</a>
                                                    <span className="color-normal"> : liczebniki, rzeczowniki, przymiotniki, przysłówki, przyimki...</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Negacja)}><i className="mdi mdi-help-circle"></i> Negacja</a>
                                                    <span className="color-normal"> : liczebniki, rzeczowniki, przymiotniki, przysłówki, przyimki...</span>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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