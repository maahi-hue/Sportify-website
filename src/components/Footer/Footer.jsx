const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#c4bbaf] text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
      <footer className="footer bg-[#c4bbaf] text-base-content border-base-300 border-t px-10 py-4">
        <aside className=" mx-auto">
          <p>
            EquiSports Ltd.
            <br />
            Since 2024
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
