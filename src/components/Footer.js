import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid>
            <Row className="border-top justify-content-start p-3">
                <Col className="p-0" md={3} sm={12}>
                    <a href="https://github.com/SparshPatwa"> 
                        GitHub
                    </a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/sparsh-patwa-30132848/">
                        Linkedin
                    </a>
                </Col>
            </Row>
            </Container>
        </footer>
    );

}
export default Footer;