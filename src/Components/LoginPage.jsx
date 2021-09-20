import React, { useState } from 'react';
import { Col, Container, Image, Row, Form, FormGroup, FormControl, FormText, FormLabel, Button } from 'react-bootstrap';
import logo from '../Assets/Netflix_Logo_RGB.png';

export default function LoginPage() {

    const [checkbox, setCheckbox] = useState(false);

    function handleChange() {
        setCheckbox(!checkbox);
        // console.log(checkbox);
    }

    return (
        <Container fluid id="login-page">
            <Row>
                <Col xs={5}>
                    <header>
                        <nav>
                            {/* <img id="logo" src={logo} alt="" /> */}
                            <Image fluid id="logo" src={logo} alt="Netflix logo" />
                        </nav>
                    </header>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Inloggen</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <form action="" method="post">
                        <input type="email" name="email" id="email" placeholder="E-mailadres of telefoonnummer" />
                        <input type="password" name="password" id="passwordInput" placeholder="Wachtwoord" />
                        <Button type="submit">Inloggen</Button>
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
                            Is Netflix nieuw voor jou? <a href="#">Registreer je nu</a>.
                        </p>
                    </div>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Lees meer informatie</a>.</p>
                </Col>
            </Row>
        </Container>

    )
}
