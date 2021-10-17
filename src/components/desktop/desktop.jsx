import React from 'react'
import {AboutMe} from '../DesktopAboutMe/AboutMe'
import {Contact} from '../DesktopContact/Contact'
import {ReviewsFrame} from './desktop.reviews'
import {Offer} from '../DesktopOffer/Offer'
import {Materials} from '../DesktopMaterials/Materials'
import {Fees} from '../DesktopFees/Fees'
import {Route, Switch} from 'react-router-dom'
import {Navigation} from '../Navigation/Navigation'
import {LanguageChanger} from '../languageChanger/languageChanger'

export const Desktop = () => {
    return (
        <>
            <div class = "Navigation-Container"><Navigation/></div>
            <div class = "Content-Container">
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