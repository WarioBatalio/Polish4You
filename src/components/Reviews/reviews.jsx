import React from 'react'
import {JuanReview} from './review.juan'
import {AnastasiyaReview} from './review.anastasiya'
import {SvyatoslavReview} from './review.Svyatoslav'
import {PetraReview} from './review.petra'
import {RoseReview} from './review.rose'
import {FedericoReview} from './review.federico'
import {NinaReview} from './review.nina'
import {EmilReview}  from './review.emil'
import {StephenReview} from './review.stephen'

export const Reviews = () => {
    return (
        <div>
            <header>
                <h1>Reviews</h1>
                <hr/>
            </header>
            <main>
                <JuanReview/>
                <AnastasiyaReview/>
                <SvyatoslavReview/>
                <PetraReview/>
                <RoseReview/>
                <FedericoReview/>
                <NinaReview/>
                <EmilReview/>
                <StephenReview/>
            </main>
            <footer>

            </footer>
        </div>
    )
}
