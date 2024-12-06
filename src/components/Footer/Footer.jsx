const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#84a98c] p-10 text-white">
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
      <footer className="footer bg-[#84a98c] text-white border-base-300 border-t px-10 py-4">
        <aside className="mx-auto text-center">
          <p>
            <strong>EquiSports Ltd.</strong>
            <br />
            Your Trusted Partner in Quality Sports Equipment | Since 2024
          </p>
          <p>© 2024 EquiSports Ltd. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
