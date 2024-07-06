import IconFacebook from "./Icons/IconFacebook";
import IconInstagram from "./Icons/IconInstagram";
import IconPinterest from "./Icons/IconPinterest";
import IconTwitter from "./Icons/IconTwitter";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="content-center bg-very-dark-violet px-6 py-12">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-start gap-y-8 lg:grid-cols-6 lg:gap-x-4">
        <Logo color="#fff" />
        <div className="footer-container">
          <h4 className="footer-titles">Features</h4>
          <a href="#" className="footer-links">
            Link Shorterning
          </a>
          <a href="#" className="footer-links">
            Branded Links
          </a>
          <a href="#" className="footer-links">
            Analytics
          </a>
        </div>
        <div className="footer-container">
          <h4 className="footer-titles font-bold">Resources</h4>
          <a href="#" className="footer-links">
            Blog
          </a>
          <a href="#" className="footer-links">
            Developers
          </a>
          <a href="#" className="footer-links">
            Support
          </a>
        </div>
        <div className="footer-container">
          <h4 className="footer-titles font-bold">Company</h4>
          <a href="#" className="footer-links">
            About
          </a>
          <a href="#" className="footer-links">
            Our Team
          </a>
          <a href="#" className="footer-links">
            Careers
          </a>
          <a href="#" className="footer-links">
            Contact
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="#">
            <IconFacebook />
          </a>
          <a href="#">
            <IconTwitter />
          </a>
          <a href="#">
            <IconPinterest />
          </a>
          <a href="#">
            <IconInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
