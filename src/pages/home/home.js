import './home.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChromeDinoGame from 'react-chrome-dino';

function Home() {
    useEffect(() => {
        let greetingMessages = Array.prototype.slice.call(document.getElementsByClassName('text'));
        greetingMessages.forEach((greetingMessage, ind) => {
            let letters = greetingMessage.innerHTML.split('');
            let nHTML = ''
            for (var letter of letters) {
                nHTML += "<span class='rubberBand'>" + letter + "</span>";
            }
            document.getElementsByClassName('text')[ind].innerHTML = nHTML;
        });
    });
    return (
        <div className='section'>
            <div className="text-area">
                <header className="App-header">
                    <div className="bodyText">
                        <div className="text">Hi,</div>
                        <div className="text">I'm Ankeet,</div>
                        <div className="text">Web Developer.</div>
                    </div>
                    <Link to='/contact' className="button-cta">Contact Me</Link>
                </header>
            </div>
            <div className='image-area'>
                <div>
                    <ChromeDinoGame />
                </div>
            </div>
        </div>
    );
}

export default Home;