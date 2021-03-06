import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact() {

  return(
    <Container>
            <Row>
            <Col lg={6}>
                    <div className="box">
                        <h4>My Contact Details</h4>
                        <ul>
                            <li>Email <a href="mailto:kathy.gomozova@gmail.com">kathy.gomozova@gmail.com</a></li>
                            <li>Cell: 425-628-3959 </li>
                            <li><a href="https://github.com/kgo87">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/kgomozova/">LinkedIn</a></li>
                            
                        </ul>
                    </div>
                </Col>

                <Col lg={6}>
                    <div className="box">
                        <form action="https://formspree.io/xvownzqz" method="POST">

                        <h4>Contact Form</h4>
                        <label for="name">Name</label>
                        <br />
                        <input type="text" name="name" placeholder="John Smith" />
                        <br />

                        <label for="email">Email</label>
                        <br />
                        <input type="text" name="email" placeholder="example@gmail.com" />
                        <br />

                        <label for="message">Message</label>
                        <br />
                        <textarea name="message" style={{"height": "150px"}}></textarea>
                        <br />

                        <input type="submit" value="Send" />

                        </form>
                    </div>
                </Col>

            </Row>
        </Container>

   
    )
  }

export default Contact;
