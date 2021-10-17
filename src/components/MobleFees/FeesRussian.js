import React from 'react'
import '../desktop/desktop.styles.css'
import '../mobile/mobile.styles.css'
import Regulamin from '../../Regulamin.pdf'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const FeesRussian = () => {
    return (
        <div className="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <div className="fitContent">
                    <p>
                        Занятия продаются в пакетах 15 x 60 min. или 10 x 90 min. Цена пакета зависит от типа занятий
                        (индивидуальные, групповые) и места, где они проходят (у учителя, у ученика, онлайн).
                    </p>
                    <p>
                        Не забывайте отменять занятия во-время! Урок, отмененный в тот же день, подлежит оплате!
                    </p>
                    <hr/>
                </div>
                <div className="fitContent">
                    <table className="Fees-Classes" cellPadding="0" cellSpacing="0" className="Mobile-Material-Classes">
                        <tbody>
                        <tr>
                            <td className="Fees-Package">
                                <strong>КУРС</strong>
                            </td>
                            <td className="Fees-Package">
                                <strong>ПАКЕТ</strong>
                            </td>
                            <td className="Fees-Package">
                                <strong>МЕСТО ПРОВЕДЕНИЯ</strong>
                            </td>
                            <td className="Fees-Package">
                                <strong>ЦЕНА</strong>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="Fees-Price">
                                <strong>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</strong>
                            </td>
                            <td rowSpan="2" className="Fees-Price">
                                10 x 90 мин.
                                <br/>
                                или
                                <br/>
                                15 x 60 мин.
                            </td>
                            <td className="Fees-Price">
                                онлайн
                                <br/>
                                или
                                <br/>
                                у учителя
                                <br/>
                                [ул. Elektoralna 26]
                            </td>
                            <td className="Fees-Price">
                                <strong>1350 злотых</strong>
                                <br/>
                                90 злотых за 60 мин.
                            </td>
                        </tr>
                        <tr>
                            <td className="Fees-Price">у ученика</td>
                            <td className="Fees-Price">
                                <strong>1950 злотых</strong>
                                <br/>
                                130 злотых за 60 мин.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="Fees-Package-5-Seperator"></td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="Fees-Price">
                                <strong>МИНИ-ГРУППА</strong>
                                <br/>
                                2 человека
                            </td>
                            <td rowSpan="2" className="Fees-Price">
                                10 x 90 мин.
                                <br/>
                                или
                                <br/>
                                15 x 60 мин.
                            </td>
                            <td className="Fees-Price">
                                онлайн
                                <br/>
                                или
                                <br/>
                                у учителя
                                <br/>
                                [ул. Elektoralna 26]
                            </td>
                            <td className="Fees-Price">
                                <strong>750 злотых</strong>
                                <br/>
                                50 злотых за 60 мин.
                            </td>
                        </tr>
                        <tr>
                            <td className="Fees-Price">u ucznia</td>
                            <td className="Fees-Price">
                                <strong>1050 злотых</strong>
                                <br/>
                                70 злотых за 60 мин.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="Fees-Package-5-Seperator"></td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="Fees-Price">
                                <strong>МАЛЕНЬКАЯ ГРУППА</strong>
                                <br/>
                                3-4 человек
                            </td>
                            <td rowSpan="2" className="Fees-Price">
                                10 x 90 мин.
                            </td>
                            <td className="Fees-Price">
                                онлайн
                                <br/>
                                или
                                <br/>
                                у учителя
                                <br/>
                                [ул. Elektoralna 26]
                            </td>
                            <td className="Fees-Price">
                                <strong>600 злотых</strong>
                                <br/>
                                40 злотых за 60 мин.
                            </td>
                        </tr>
                        <tr>
                            <td className="Fees-Price">у ученика</td>
                            <td className="Fees-Price">
                                <strong>750 злотых</strong>
                                <br/>
                                50 злотых за 60 мин.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="Fees-Price">
                                Есть также возможность провести
                                <strong>несколько занятий без привязки к курсу</strong>
                                <br/>
                                – в этом случае цена за 60 минут составит
                                <br/>
                                <strong>160 злотых.</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                </div>
                <div className="fitContent">
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">В стоимость курса входят оригинальные учебные материалы,
                                используемые во время занятий.</span>
                        </li>
                    </ul>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">Максимальный срок использования одного пакета занятий - 4
                                месяца (со дня проведения первого урока).</span>
                        </li>
                    </ul>
                    <p>Касается только индивидуальных занятий:</p>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">Перед покупкой курса ученик имеет право бесплатно получить
                                пробный шестидесятиминутный урок.</span>
                        </li>
                    </ul>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal"><b>Занятие может быть отменено по инициативе учащегося до 18:00
                                дня, предваряющего день, на который оно было назначено.</b> Учителя необходимо
                                проинформировать об отмене занятия лично или по телефону: +48 507 338 294. После
                                указанного срока занятие будет считаться состоявшимся и не может быть назначено на
                                другое время; деньги за пропущенное занятие не возмещаются.</span>
                        </li>
                    </ul>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">Можно отменить не больше 20% занятий из приобретенного пакета.</span>
                        </li>
                    </ul>
                    <p className="Middle"><strong>УСЛОВИЯ ЗАЧИСЛЕНИЯ НА КУРС</strong></p>
                    <p><strong>ПЛАТЕЖИ</strong></p>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">Оплата производится заранее, до начала курса.</span>
                        </li>
                        <li>
                            <span className="color-normal">В случае денежных переводов, связанные с ними банковские платежи оплачивает учащийся.</span>
                        </li>
                        <li>
                            <span className="color-normal">В случае непосещения учащимся части курса деньги не возмещаются.</span>
                        </li>
                        <li>
                            <span className="color-normal">В случае опозданий или пропусков учащимся отдельных занятий, никакие требования о возврате денег не принимаются.</span>
                        </li>
                        <li>
                            <span className="color-normal">Школа оставляет за собой право изменять график занятий в соответствии с собственными нуждами.</span>
                        </li>
                    </ul>
                    <p>
                        Школа несет обязательства перед учащимся в оказании требуемых услуг и с момента подтверждения курса будет им следовать. Однако школа не несет юридической ответственности в случае невозможности оказания оговоренных услуг по причинам, от нее не зависящим. При этом школа обязуется обеспечить учащегося альтернативными услугами подобного или высшего качества.
                    </p>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}