import React from 'react'
import '../desktop/desktop.styles.css'
import '../mobile/mobile.styles.css'
import { useMediaQuery } from 'react-responsive';

export const Review = (props) => {
    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 480px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });

    return (
        <div class = "fitContent">
            <article>
                <img className={`student-photo ${isMobileDevice ? "mobile" : "desktop"}`} src={props.photo} alt="photo"/> <h2><b>{props.clientName}</b></h2>
                <section>
                    <p>{props.children}</p>
                </section>
            </article>
            <br className="clear"/>
            <hr/>
        </div>
    )
}