import React from 'react'
import '../desktop/desktop.styles.css'
import '../mobile/mobile.styles.css'
import Regulamin from '../../Regulamin.pdf'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const FeesPolish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <div className="fitContent">
                    <p>
                        Lekcje są sprzedawane w pakietach 15 x 60 min. lub 10 x 90 min. Cena pakietu zależy od tego, czy
                        uczysz się indywidualnie czy w grupie oraz od miejsca odbywania się zajęć (u ucznia, u
                        nauczyciela lub zdalnie).
                    </p>
                    <p>
                        Pamiętaj o odwoływaniu lekcji w terminie! Lekcja odwołana tego samego dnia jest płatna!
                    </p>
                    <hr/>
                </div>
                <div className="fitContent">
                    <table className="Fees-Classes" cellpadding="0" cellSpacing="0" class="Mobile-Material-Classes">
                        <tbody>
                        <tr>
                            <td className="Fees-Package">
                                <strong>KURS</strong>
                            </td>
                            <td className="Fees-Package">
                                <strong>PAKIET</strong>
                            </td>
                            <td className="Fees-Package">
                                <strong>LOKALIZACJA</strong>
                            </td>
                            <td className="Fees-Package">
                                <strong>CENA</strong>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="Fees-Price">
                                <strong>LEKCJE INDYWIDUALNE</strong>
                            </td>
                            <td rowSpan="2" className="Fees-Price">
                                10 x 90 min.
                                <br/>lub
                                <br/>
                                15 x 60 mim.
                            </td>
                            <td className="Fees-Price">
                                zdalnie
                                <br/>
                                lub
                                <br/>
                                u nauczyciela
                                <br/>
                                [ul. Elektoralna 26]
                            </td>
                            <td className="Fees-Price">
                                <strong>1350 zł</strong>
                                <br/>
                                90zł za 60 min.
                            </td>
                        </tr>
                        <tr>
                            <td className="Fees-Price">u ucznia</td>
                            <td className="Fees-Price">
                                <strong>1950 zł</strong>
                                <br/>
                                130 zł za 60 min.
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" className="Fees-Package-5-Seperator"></td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="Fees-Price">
                                <strong>MINIGRUPA</strong>
                                <br/>
                                2 osoby
                            </td>
                            <td rowSpan="2" className="Fees-Price">
                                10  x 90 min.
                                <br/>
                                lub
                                <br/>
                                15 x 60 min.
                            </td>
                            <td className="Fees-Price">
                                zdalnie
                                <br/>
                                lub
                                <br/>
                                u nauczyciele
                                <br/>
                                [ul. Elektoralna 26]
                            </td>
                            <td className="Fees-Price">
                                <strong>750 zł</strong>
                                <br/>
                                50zł za 60 min.
                            </td>
                        </tr>
                        <tr>
                            <td className="Fees-Price">u ucznia</td>
                            <td className="Fees-Price">
                                <strong>1050 zł</strong>
                                <br/>
                                70zł za 60 min.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="Fees-Package-5-Seperator"></td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="Fees-Price">
                                <strong>MAŁA GRUPA</strong>
                                <br/>
                                3-4 osoby
                            </td>
                            <td rowSpan="2" className="Fees-Price">
                                "10  x 90 min.
                            </td>
                            <td className="Fees-Price">
                                zdalnie
                                <br/>
                                lub
                                <br/>
                                u nauczyciela
                                <br/>
                                [ul. Elektoralna 26]
                            </td>
                            <td className="Fees-Price">
                                <strong>600 zł</strong>
                                <br/>
                                40zł za 60 min.
                            </td>
                        </tr>
                        <tr>
                            <td className="Fees-Price">u ucznia</td>
                            <td className="Fees-Price">
                                <strong>750 zł</strong>
                                <br/>
                                50zł za 60 min.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="Fees-Price">
                                Można też wykupić
                                <strong>tylko kilka lekcji</strong>
                                ,
                                <br/>
                                 cena za 60 minut zajęć wynosi wówczas
                                <strong>160 ZŁ</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                </div>
                <div className="fitContent">
                    <p>
                        Przed przystąpieniem do kursu przeczytaj:
                    </p>
                    <p className="Big-Ass">WARUNKI UCZESTNICTWA W KURSIE</p>
                </div>
                <div className="fitContent">
                    <div className="Rounded-Box-2">§1 PŁATNOŚCI</div>
                        <section>
                            <p>1.<b> Opłata za pakiet zajęć musi zostać dokonana przed rozpoczęciem kursu.</b></p>
                            <p>2. Opłatę można uiścić gotówką lub przelewem na konto o numerze:
                                Anna Maria Wojtasiak
                                Bank Spółdzielczy w Białej Rawskiej
                                nr 18 9291 0001 0086 8798 3000 0010
                                IBAN: PL18 9291 0001 0086 8798 3000 0010
                                SWIFT: POLUPLPR
                                Dopuszcza się również płatność przez system PayPal.
                            </p>
                            <p>
                                3. W przypadku płatności przelewem lub przez system PayPal słuchacze są zobowiązani do pokrycia
                                wszelkich kosztów bankowych i dodatkowych opłat.
                            </p>
                            <p>
                                4. Płatność jest uznana w momencie otrzymania środków przez szkołę; z uwagi na czas transferu
                                środków, należy dokonać go odpowiednio wcześnie.
                            </p>
                            <p>
                                5. W cenę pakietu zajęć zostały wliczone autorskie materiały dydaktyczne, z których korzystamy
                                podczas lekcji, ale nie obejmuje ona opłat za podręczniki.
                            </p>
                            <p>
                                6. <b>Maksymalny czas na wykorzystanie jednego pakietu zajęć wynosi 4 miesiące (od dnia
                                przeprowadzenia pierwszej lekcji).</b> Po upływie tego czasu pakiet traci ważność, a
                                niewykorzystane lekcje przepadają. Słuchaczowi nie przysługuje zwrot kosztów finansowych za
                                niewykorzystane lekcje.
                            </p>
                            <hr/>
                        </section>
                </div>
                <div className="FitContent">
                    <div className="Rounded-Box-2">§2 SPÓŹNIENIA, NIEOBECNOŚCI I REZYGNACJA Z ZAJĘĆ</div>
                    <p>1.Spóźnienie lub nieobecność na zajęciach nie stanowi podstawy do zmniejszenia opłat za kurs.</p>
                    <p>2. W przypadku rezygnacji z kursu przed wykorzystaniem pełnej liczby określonych w pakiecie
                        godzin uczestnikowi nie przysługuje odszkodowanie finansowe.
                    </p>
                    <hr/>
                </div>
                <div className="FitContent">
                    <div className="Rounded-Box-2">§3 LEKCJA PRÓBNA I ODWOŁYWANIE / PRZEKŁADANIE ZAJĘĆ
                        dotyczy kursów indywidualnych</div>
                    <p>1.<b> Lekcja próbna trwa 60 min., jest darmowa, i nie zostanie później wliczona do pakietu.</b></p>
                    <p>2.<b> Lekcję można odwołać / przełożyć najpóźniej do godziny 18:00 poprzedzającego dnia.</b>
                        Odwołania można zgłaszać mailowo: ania@polish4you.waw.pl lub telefonicznie: + 48 507 338 294. W
                        takim wypadku lekcja zostanie odrobiona później, w terminie ustalonym indywidualnie pomiędzy
                        nauczycielem i uczniem.
                    </p>
                    <p>
                        3. W przypadku niezgłoszenia odwołania lekcji lub odwołania jej po terminie, lekcja jest uważana
                        za zrealizowaną i nie ma możliwości przełożenia jej na inny termin. Lekcja przepada i słuchaczowi nie przysługuje zwrot kosztów finansowych.
                    </p>
                    <p>
                        4. <b>Można odwołać / przełożyć nie więcej, niż 20% zajęć z wykupionego pakietu.</b>
                    </p>
                    <p>
                        5. Szkoła zastrzega sobie możliwość zmiany terminu odbywania się zajęć w wyjątkowych
                        przypadkach, np. choroba nauczyciela. W takim przypadku lekcje nie przepadają, lecz zostaną
                        odrobione później, w terminie ustalonym indywidualnie pomiędzy nauczycielem i uczniem.
                    </p>
                    <hr/>
                </div>
                <div className="FitContent">
                    <div className="Rounded-Box-2">§4 PRZEKŁADANIE ZAJĘĆ
                    dotyczy kursów grupowych</div>
                    <p>1. Ewentualna zmiana terminu zajęć ustalana jest z grupą i wymaga zgody wszystkich uczestników kursu.</p>
                    <p>2.Można przełożyć nie więcej, niż 20% zajęć z wykupionego pakietu.</p>
                    <p>
                        3. Szkoła zastrzega sobie możliwość zmiany terminu odbywania się zajęć w wyjątkowych przypadkach,
                        np. choroba nauczyciela. W takim przypadku lekcje nie przepadają, lecz zostaną odrobione później,
                        w terminie ustalonym pomiędzy nauczycielem i wszystkimi uczestnikami kursu.

                    </p>
                    <hr/>
                </div>
                <div className="fitContent">
                    <p>
                        Szkoła zobowiązuje się do zapewnienia jak najlepszej obsługi. W przypadku braku możliwości
                        przeprowadzenia kursu z przyczyn od siebie niezależnych szkoła zobowiązuje się zapewnić kurs o
                        podobnej lub wyższej wartości pieniężnej.
                    </p>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}