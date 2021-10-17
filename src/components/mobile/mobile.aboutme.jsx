import React from 'react'
import './mobile.styles.css'
import photo from '../../about-me.png'

export const AboutMe = () => {
    return (
        <div>
            <header>
                <h1>About Me</h1>
                <hr/>
            </header>
            <main>
                <article>
                    <img src={photo} className="pickMiddle" alt="photo"/> <h2><b>Anna Wojtasiak</b></h2>
                    <section>
                        <h4>Speaks: Polish, Russian, English</h4>
                    </section>
                    <section>
                        <p>In 2004 I graduated in Polish Philology from the University of Warsaw. At the beginning I was
                            working as a tutor, journalist and proofreader. Since 2005 I've been teaching Polish as a
                            foreign language, at first in Warsaw language schools, now in my own company. Among others I
                            cooperated with Meritum The Polish Language School, FES Foreign Education Services,
                            Worldwide School, Progress English, Language Partner. In each of these places I've learnt
                            something new, gradually increasing my knowledge and professional experience.</p>
                        <p>I like my job very much. Thanks to it I have an opportunity to meet interesting people and
                            help them to find themselves in Polish reality. My students are wonderful people, who not
                            only decided to get to grips with this extremely difficult language but who are able to see
                            its beauty as well. Through all difficult questions they ask me, through all challenges
                            we're facing together, through shared search for the sense in the grammar elaborateness they
                            give me the chance to discover my own language in a new way. Teaching you is a real
                            pleasure!</p>
                    </section>
                </article>
            </main>
            <footer>

            </footer>
        </div>
    )
}