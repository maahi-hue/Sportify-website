import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Import icons
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#354f52] p-10 text-white">
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover">Sports Equipment Customization</a>
          <a className="link link-hover">Premium Equipment Sales</a>
          <a className="link link-hover">Global Shipping</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Customer Reviews</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Return & Refund Policy</a>
          <a className="link link-hover">Contact Support</a>
        </nav>
      </footer>
      <footer className="footer bg-[#354f52] text-white border-base-300 border-t px-10 py-4">
        <aside className="mx-auto text-center">
          <p>
            <div className="navbar-start flex items-center justify-center w-full lg:w-auto">
              <a className="btn btn-ghost text-xl flex justify-center items-center">
                <img className="w-28" src={logo} alt="Sportify Logo"></img>
                <p> Ltd.</p>
              </a>
            </div>
            <strong></strong>
            <br />
            Your Trusted Partner in Quality Sports Equipment | Since 2024
          </p>
          <p>© 2024 Sportify Ltd. All rights reserved.</p>

          <div className="flex mx-auto justify-center mt-4 space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#cad2c5]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#cad2c5]"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
