import React, { useState } from 'react';
import logo from '../Assets/Netflix_Logo_RGB.png'


export default function LandingPage() {

    // const [clicked, setClicked] = useState(null);
    // const toggle = i => {
    //     if (clicked === i) {
    //         return setClicked(null)
    //     }

    //     setClicked(i)
    // }

    const accordion = [{
        question: "Wat kan ik kijken op Netflix?",
        answer: "Netflix heeft een uitgebreide catalogus van speelfilms, documentaires, series, anime, bekroonde Netflix Originals en meer. Kijk zoveel je wilt en wanneer je wilt.",
        link: ""
    },
    {
        question: "Wat is Netflix?",
        answer: "Netflix is een streamingservice met een zeer groot aanbod van bekroonde series, films, anime, documentaires en nog veel meer op duizenden apparaten met een internetverbinding. Je kijkt zo veel je wilt, wanneer je wilt, zonder enige vorm van reclame. En dit allemaal voor één lage prijs per maand. Er valt altijd iets nieuws te ontdekken en elke week worden er nieuwe series en films toegevoegd!",
        link: ""
    }];

    return (
        <div id="landing-page">
            <div>
                <header>
                    <nav>
                        <img id="logo" src={logo} alt="" />
                        <div>
                            <button><i class="lni lni-world"></i>Nederlands</button>
                            <button>Inloggen</button>
                        </div>
                    </nav>
                </header>
                <h1>Onbeperkt series, films en meer kijken.</h1>
                <p>Kijk waar je wilt. Altijd opzegbaar.</p>
                <p>Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen.</p>

                <form action="" method="post">
                    <input type="email" name="email" id="email" placeholder="E-mailadres" />
                    <button type="submit">Aan de slag &#62;</button>
                </form>
            </div>

            <div>
                <div>
                    <h2>Kijk op je tv.</h2>
                    <p>Kijk op smart-tv's, PlayStation, Xbox, Chromecast, Apple TV, blu-rayspelers en meer.</p>
                </div>
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                    <video autoPlay playsInline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div>
                <h2>Download series die je offline wilt kijken.</h2>
                <p>Sla je favorieten eenvoudig op zodat je altijd wat kunt kijken.</p>
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                    <div>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                        <div>
                            <h3>Stranger Things</h3>
                            <span>Downloaden...</span>
                        </div>{/* ::After animation */}
                    </div>
                </div>
            </div>

            <div>
                <h2>Kijk overal.</h2>
                <p>Stream onbeperkt series en films op je telefoon, tablet, laptop en tv, zonder meer te betalen.</p>
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
                    <video autoPlay playsInline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div>
                <h2>Maak profielen voor kids.</h2>
                <p>Laat kids op avontuur gaan met hun favoriete personages in een omgeving die speciaal voor hen is gemaakt. Gratis bij je lidmaatschap.</p>
                <img src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfHU6rUGPM-0fCFyBI9QmkWq2Gde4IN73Rd3fPa5OZwCMTevvHHH4I1cJcvKPU2xBsGT4NSOMRpRA9L4IVQrGZHaCPFo.png?r=bb1" alt="" />
            </div>

            <div>
                <h2>Veelgestelde vragen</h2>
                {/* Accordion */}
                {/* <div className="accordion-title" onClick={() => toggle(i)} /> */}
                {/* <div className={clicked === i ? "accordion-content open" : "accordion-content"} /> */}
                {/* Accordion */}
                <h3>Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen.</h3>
                <form action="" method="post">
                    <input type="email" name="email" id="email" placeholder="E-mailadres" />
                    <button type="submit">Aan de slag &#62;</button>
                </form>
            </div>
        </div>
    )
}
