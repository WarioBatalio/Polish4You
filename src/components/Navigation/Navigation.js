import {Navbar, Nav, Container} from 'react-bootstrap';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeLanguage,
} from '../languageChanger/languageChangerSlice';
import styles from '../languageChanger/languageChanger.module.css';
import polishFlag from '../../polishFlag.svg'
import russianFlag from '../../russianFlag.svg'
import englishFlag from '../../BritishFlag.svg'
import '../desktop/desktop.styles.css'

export const Navigation = () => {
    const language = useSelector((state) => state.languageChanger.language)
    const dispatch = useDispatch()

    var menuMap = new Map();

    menuMap.set("Polish", ["O Mnie", "Recenzje", "Kontakt", "Oferta", "Materiały", "Ceny", "Język"]);
    menuMap.set("English", ["About Me", "Reviews", "Contact", "Offer", "Materials", "Fees", "Language"]);
    menuMap.set("Russian", ["Oбо мне", "Отзывы", "Контакты", "Предложение","Материалы", "Цены", "Язык"]);
    return(
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <a class="navbar-brand" href="#">Polish4You</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href='/AboutMe'>{menuMap.get(language)[0]}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href='/Reviews'>{menuMap.get(language)[1]}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href='/Contact'>{menuMap.get(language)[2]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='/Offer'>{menuMap.get(language)[3]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='/Materials'>{menuMap.get(language)[4]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='/Fees'>{menuMap.get(language)[5]}</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" data-flag = "true" href="#" id="navbarDropdownMenuLink"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">{menuMap.get(language)[6]}</a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <div class = "fitContent">
                                                <a className="dropdown-item" href="#" onClick={(event) => dispatch(changeLanguage("Polish"))}>
                                                    <img src={polishFlag} height = "25"/> &nbsp; Polski</a>
                                            </div>
                                            <div className="fitContent">
                                                <a className="dropdown-item" href="#" onClick={(event) => dispatch(changeLanguage("English"))}>
                                                    <img src={englishFlag} height = "25"/> &nbsp; English</a>
                                            </div>
                                            <div className="fitContent">
                                                <a className="dropdown-item" href="#" onClick={(event) => dispatch(changeLanguage("Russian"))}>
                                                    <img src={russianFlag} height = "25"/> &nbsp; Pусский</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
