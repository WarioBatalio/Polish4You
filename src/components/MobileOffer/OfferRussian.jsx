import React from 'react'
import '../mobile/mobile.styles.css'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const OfferRussian = () => {
    return (
        <div className="Content-Frame">
            <header>
                <ContactInfo/>
            </header>
            <main>
                <article>
                    <div>
                        <p>Добро пожаловать в мою школу! Приглашаю на уроки польского языка как иностранного. Занятия
                            могут проводиться онлайн, у меня в варшавском районе Воля или у тебя - дома или в офисе.</p>
                        <p className="Red">Перед началом курса приглашаю на бесплатный пробный урок.</p>
                        <hr/>
                    </div>
                    <div>
                        <p>Предлагаю следующие <b>виды курсов</b> польского:</p>
                        <ul className="Normal-DP">
                            <li><b>bклассические курсы общего языка</b> на всех уровнях знаний - от начального до
                                профессионального
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>разговорный практикум</b> - свободно общаемся на польском</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>интенсив</b> - если у тебя есть желание выучить польский как можно быстрее</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>подготовка к сдаче государственных сертификационных экзаменов</b> на всех уровнях
                                знаний
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>занятия для детей</b> (с семи лет)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li><b>курсы дистанционного обучения</b> - по Skype, Zoom, WhatsApp, Messenger (режим
                                видео-чата)
                            </li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>а также <b>курсы корпоративного обучения</b></li>
                        </ul>
                    </div>
                    <div>
                        <p>Что касается <b>количества человек в группе</b>, можешь выбрать курс:</p>
                        <ul className="Normal-DP">
                            <li>индивидуальный</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>в мини-группе (2 человека)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>в маленькой группе (3-4 человека)</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>в случае курсов корпоративного обучения количество участников определяется
                                индивидуально
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Что касается <b>места проведения занятий</b>, у тебя выбор между:</p>
                        <ul className="Normal-DP">
                            <li>Tмоим домашним офисом в варшавском районе Воля</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>локацией, удобной обучающемуся, например у тебя дома или в офисе</li>
                        </ul>
                        <ul className="Normal-DP">
                            <li>дистанционным обучением - т.е. уроками в режиме видео-чата (по Skype, Zoom, WhatsApp,
                                Messenger)
                            </li>
                        </ul>
                    </div>
                    <div className="Mobile-Rounded-Box">
                        <p>
                            Перед началом индивидуального курса приглашаю на <b>бесплатный пробный урок</b>.
                            (60 минут). Цель этого урока - познакомиться друг с другом, проверить уровень знания
                            польского
                            языка, обсудить связанные с курсом вопросы и помочь в принятии окончательного решения
                            приступить к нему.
                        </p>
                    </div>
                </article>
            </main>
            <footer>
            </footer>
        </div>
    )
}