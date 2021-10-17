import React from 'react'
import '../desktop/desktop.styles.css'
import '../mobile/mobile.styles.css'
import Regulamin from '../../Regulamin.pdf'
import {ContactInfo} from '../ContactInfo/ContactInfo'

export const FeesEnglish = () => {
    return (
        <div className ="Content-Frame">
            <header>
                <ContactInfo/>
                <hr/>
            </header>
            <main>
                <div className="fitContent">
                    <p>
                        Lessons are sold in packages of 15 x 60 min. or 10 x 90 min. The price of the package
                        depends on the type of the course (individual, group) and on the location of the classes
                        (at the student's, at the teacher's, remotely).
                    </p>
                    <p>
                        Please remember to cancel your lessons on time! Students will be charged for late
                        cancellations!
                    </p>
                    <hr/>
                </div>
                <div className="fitContent">
                    <table className="Fees-Classes" cellpadding="0" cellSpacing="0" class="Mobile-Material-Classes">
                        <tbody>
                            <tr>
                                <td className="Fees-Package">
                                    <strong>COURSE</strong>
                                </td>
                                <td className="Fees-Package">
                                    <strong>PACKAGE</strong>
                                </td>
                                <td className="Fees-Package">
                                    <strong>LOCATION</strong>
                                </td>
                                <td className="Fees-Package">
                                    <strong>PRICE</strong>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2" className="Fees-Price">
                                    <strong>INDIVIDUAL CLASSES</strong>
                                </td>
                                <td rowSpan="2" className="Fees-Price">
                                    10 x 90 min.
                                    <br/>
                                    or
                                    <br/>
                                    15 x 60 mim.
                                </td>
                                <td className="Fees-Price">
                                    remotely
                                    <br/>
                                    or
                                    <br/>
                                    at the teacher's
                                    <br/>
                                    [ul. Elektoralna 26]
                                </td>
                                <td className="Fees-Price">
                                    <strong>1350 zł</strong>
                                    <br/>
                                    90zł per 60 min.
                                </td>
                            </tr>
                            <tr>
                                <td className="Fees-Price">at the student's</td>
                                <td className="Fees-Price">
                                    <strong>1950 zł</strong>
                                    <br/>
                                    130 zł per 60 min.
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" className="Fees-Package-5-Seperator"></td>
                            </tr>
                            <tr>
                                <td rowSpan="2" className="Fees-Price">
                                    <strong>MINI GROUP</strong>
                                    <br/>
                                    2 people
                                </td>
                                <td rowSpan="2" className="Fees-Price">
                                    10  x 90 min
                                    <br/>
                                    or
                                    <br/>
                                    15 x 60 min.
                                </td>
                                <td className="Fees-Price">
                                    remotely
                                    <br/>
                                    or
                                    <br/>
                                    at the teacher's
                                    <br/>
                                    [ul. Elektoralna 26]
                                </td>
                                <td className="Fees-Price">
                                    <strong>750 zł</strong>
                                    <br/>
                                    50zł per 60 min.
                                </td>
                            </tr>
                            <tr>
                                <td className="Fees-Price">at the student's</td>
                                <td className="Fees-Price">
                                    <strong>1050 zł</strong>
                                    <br/>
                                    70zł per 60 min.
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="Fees-Package-5-Seperator"></td>
                            </tr>
                            <tr>
                                <td rowSpan="2" className="Fees-Price">
                                    <strong>SMALL GROUP</strong>
                                    <br/>
                                    3-4 people
                                </td>
                                <td rowSpan="2" className="Fees-Price">
                                    10  x 90 min.
                                </td>
                                <td className="Fees-Price">
                                    remotely
                                    <br/>
                                    or
                                    <br/>
                                    at the teacher's
                                    <br/>
                                    [ul. Elektoralna 26]"
                                </td>
                                <td className="Fees-Price">
                                    <strong>600 zł</strong>
                                    <br/>
                                    40zł per 60 min.
                                </td>
                            </tr>
                            <tr>
                                <td className="Fees-Price">at the student's</td>
                                <td className="Fees-Price">
                                    <strong>750 zł</strong>
                                    <br/>
                                    50zł per 60 min.
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="Fees-Price">
                                    You can also buy
                                    <strong>a few single lessons</strong>
                                    ,
                                    <br/>
                                     the prce for 60 minutes is
                                    <strong>160 PLN</strong>
                                    then.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                </div>
                <div className="fitContent">
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">The price for the package includes original teaching materials used during the course.</span>
                        </li>
                    </ul>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">The maximum time assigned to use one package of lessons is 4 months.</span>
                        </li>
                    </ul>
                    <hr/>
                </div>
                <div className="fitContent">
                    <p className="Middle"><b>Concerns individual classes only:</b></p>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal">The trial lesson is free and will not be included in the package.</span>
                        </li>
                    </ul>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal"><b>The lesson can be cancelled only until 6 p.m. the previous
                                day</b>, then the lesson will be considered as taught and cannot be rearranged or
                                refunded. Please notify the teacher either in person or by phone: + 48 507 338 294 of
                                any and all cancellations.</span>
                        </li>
                    </ul>
                    <ul className="Normal-DP">
                        <li>
                            <span className="color-normal"> You can cancel up to 20% of the classes from the purchasedpackage.</span>
                        </li>
                    </ul>
                    <p>
                        Before you start the course please read the
                        <a href="#" className="headerProfile-menu-list" onClick={() => window.open(Regulamin)}><i className="mdi mdi-help-circle"></i> enrolment terms.</a>
                    </p>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}