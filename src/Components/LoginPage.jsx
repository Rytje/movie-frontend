import React, { useState } from 'react';
import logo from '../Assets/Netflix_Logo_RGB.png';

export default function LoginPage() {

    const [checkbox, setCheckbox] = useState(false);

    function handleChange() {
        setCheckbox(!checkbox);
        // console.log(checkbox);
    }

    return (
        <div id="login-page">
            <header>
                <nav>
                    <img id="logo" src={logo} alt="" />
                </nav>
            </header>

            <h1>Inloggen</h1>

            <form action="" method="post">
                <input type="email" name="email" id="email" placeholder="E-mailadres of telefoonnummer" />
                <input type="password" name="password" id="passwordInput" placeholder="Wachtwoord" />
                <button type="submit">Inloggen</button>
                <label>
                    Mijn gegevens onthouden
                    <input type="checkbox" name="rememberCheck" id="rememberCheck" value={checkbox} onChange={handleChange} />
                </label>
            </form>
            <a href="#">Hulp nodig?</a>
            <div>
                <img src="" alt="" />
                <a href="#">Inloggen met Facebook</a>
            </div>
            <div>
                <p>
                    Is Netflix nieuw voor jou? <a href="#">Registreet je nu</a>.
                </p>
            </div>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Lees meer informatie</a>.</p>
        </div>
    )
}
