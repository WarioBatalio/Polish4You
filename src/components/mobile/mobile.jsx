import React from 'react'
import {AboutMe} from '../MobileAboutMe/AboutMe'
import {ReviewsFrame} from './mobile.reviews'
import {Contact} from '../MobileContact/Contact'
import {Offer} from '../MobileOffer/Offer'
import {Materials} from '../MobileMaterials/Materials'
import {Fees} from '../MobleFees/Fees'
import {Route, Switch} from 'react-router-dom'
import {Navigation} from '../Navigation/Navigation'
import {LanguageChanger} from '../languageChanger/languageChanger'

export const Mobile = () => {
    return (
        <>
            <div className="Navigation-Container"><Navigation/></div>
            <div className="Content-Container">
                <Switch>
                    <Route path='/AboutMe' component={AboutMe}/>
                    <Route path='/Reviews' component={ReviewsFrame}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='/Offer' component={Offer}/>
                    <Route path='/Materials' component={Materials}/>
                    <Route path='/Fees' component={Fees}/>
                </Switch>
            </div>
        </>
    )
}