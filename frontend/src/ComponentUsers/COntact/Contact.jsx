import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ContactUs() {
  return (
    <div className="contactLandingContainer">
      <Navbar />
      <div className="contactLanding">
        <div className="contactHeaderContainer">
          <div className="contactHeaderWrapper">
            <h3 className="contactHeadingSub">CONTACT US</h3>
            <h1 className="contactHeading">
              REQUIRE ASSISTANCE WITH ONE OF OUR OFFERINGS OR WISH TO ENQUIRE
              <br />
              FURTHER ABOUT A SERVICE?
            </h1>
            <div className="buttonContainer">
              <button
                className="btn btn-info"
                onClick={() => {
                  const section = document.getElementById("scrollToSection");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch Today!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUsFormContainer">
        <div className="contactUsFormWrapper">
          <div className="contactUsFormInfo">
            <h2 className="contactHeader">
              Contact <br /> Information
            </h2>

            <div className="information">
              <div>
                <h5>Address:</h5>
                <p></p>
              </div>
              <div>
                <h5>Phone:</h5>
                <p></p>

              </div>
              <div>
                <h5>Email:</h5>
                <p></p>

              </div>
              <div>
                <p>
                  We are open monday to friday. <br /> Weekend busy day
                </p>
              </div>
            </div>
          </div>
          <div className="contactUsForm">
            <form className="" id="scrollToSection" action="">
              <div className="contactUsInputConctainer">
                <label htmlFor="">Firstname</label>
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  placeholder="Firstname..."
                />
              </div>
              <div className="contactUsInputConctainer">
                <label htmlFor="">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email..."
                />
              </div>
              <div className="contactUsInputConctainer">
                <label htmlFor="">Message</label>
                <textarea
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  placeholder="Message..."
                  rows="5"
                  cols="50"
                  style={{ height: "100px" }}
                />
              </div>
              <div className="contactUsInputConctainer">
                <button type="button" className="btn btn-info">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
