import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const GOOGLE_FORM_FIRSTNAME_ID = "i1";
  const GOOGLE_FORM_NAME_ID = "i5";
  const GOOGLE_FORM_EMAIL_ID = "i9";
  const GOOGLE_FORM_NUMBER_ID = "i13";
  const GOOGLE_FORM_MESSAGE_ID = "i17";
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfFaS_Nb_9lV3EyiAs5D4790qjrDAVnRF2ZJyeUSBQhSGQ9A/formResponse";

  //TODO fix url website
  const CORS_PROXY = "localhost:3001";

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append(GOOGLE_FORM_FIRSTNAME_ID, formDetails.firstName);
    formData.append(GOOGLE_FORM_NAME_ID, formDetails.lastName)
    formData.append(GOOGLE_FORM_EMAIL_ID, formDetails.email)
    formData.append(GOOGLE_FORM_NUMBER_ID, formDetails.phone)
    formData.append(GOOGLE_FORM_MESSAGE_ID, formDetails.message)

    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData).then(() =>
      setStatus({
        ...status,
        ["succes"]: true,
        ["message"]: "Send succefully"
      }).catch((error) => setStatus({
        ...status,
        ["success"]: false,
        ["message"]: error.message
      }))
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
