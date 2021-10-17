import tel from '../../img_1.png'
import mail from '../../img.png'
import '../desktop/desktop.styles.css'
import '../mobile/mobile.styles.css'

export const ContactInfo = () => {
    return(
        <div>
            <header className="fitContent">
                <h5 className="Normal" className="pickRight">
                    <a target=""
                       href="mailto:ania@polish4you.waw.pl">
                        <img className="Content-Frame2"
                             src={mail}
                             title="envelope" alt="envelope"/>
                        <strong>ania@polish4you.waw.pl</strong>
                    </a>
                    <a>
                        <img className="Content-Frame2"
                             src={tel}
                             title = "tel" alt = "tel"/>
                        +48 507 338 294
                    </a>
                </h5>
            </header>
            <main className="InfoText">
                <h6>Please feel free to contact me if you have any questions.</h6>
            </main>
        </div>
    )
}