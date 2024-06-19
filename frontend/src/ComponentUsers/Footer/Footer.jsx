import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div
          className="footerWrapper"
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={8}
        >
          <div className="footerItem">
            <h2 className="footerHeader">Product</h2>
            <div className="footerItemLink">Overview</div>

            <div className="footerItemLink">Features</div>
            <div className="footerItemLink">
              <Link to="/gallery">Gallery</Link>
            </div>

            <div className="footerItemLink">Tutorials</div>
            <div className="footerItemLink">
              <Link to="/ServicesAndPricingPage">Pricing</Link>
            </div>
            <div className="footerItemLink">Releases</div>
          </div>
          <div className="footerItem">
            <h2 className="footerHeader">Company</h2>
            <div className="footerItemLink">
              <Link to="/about">About Us</Link>
            </div>
            <div className="footerItemLink">Press</div>
            <div className="footerItemLink">Careers</div>
            <div className="footerItemLink">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footerItemLink">
              <Link to="/partners">Partners</Link>
            </div>
          </div>
          <div className="footerItem">
            <h2 className="footerHeader">Legal</h2>
            <div className="footerItemLink">Cookies Policy</div>
            <div className="footerItemLink">Privacy Policy</div>
            <div className="footerItemLink">Terms of Service</div>
            <div className="footerItemLink">Law Enforcement</div>
            <div className="footerItemLink">Status</div>
          </div>
          <div className="footerItem">
            <h2 className="footerHeader">Follow Us</h2>
            <div className="footerItemLinkSocial">
              <box-icon
                name="facebook-circle"
                type="logo"
                color="#00eeff"
              ></box-icon>
              <div>Facebook</div>
            </div>
            <div className="footerItemLinkSocial">
              <box-icon name="twitter" type="logo" color="#00eeff"></box-icon>
              <div>Twitter</div>
            </div>
            <div className="footerItemLinkSocial">
              <box-icon name="whatsapp" type="logo" color="#00eeff"></box-icon>
              <div>WhatsApp</div>
            </div>
            <div className="footerItemLinkSocial">
              <box-icon name="instagram" type="logo" color="#00eeff"></box-icon>
              <div>Instagram</div>
            </div>
            <div className="footerItemLinkSocial">
              <box-icon name="linkedin" type="logo" color="#00eeff"></box-icon>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerLink">
        <p>© 2024 10JS Media production. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
