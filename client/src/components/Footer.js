import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = props => {

    return (
        <footer className="footer-container">
            <div className="footer-container__elements">
                <a className="footer-container__elements-icons" href="https://andreagjackson.com/">
                    <h5>Designed & Developed by Andrea Jackson</h5>
                </a>
                <a className="footer-container__elements-icons" href="https://www.linkedin.com/in/andrea-jackson1/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="footer-container__elements-icons" href="https://angel.co/u/andrea-jackson-13">
                    <FontAwesomeIcon icon={faAngellist} />
                </a>
                <a className="footer-container__elements-icons" href="https://github.com/aganesh0988">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )

}

export default Footer;
