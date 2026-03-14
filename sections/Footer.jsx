const Footer = () => {
  return (
    <div className="relative z-10">
      <div className="main-container bg-black justify-center h-full py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-justify">
          <div className=""><img src="src/assets/logo.svg" alt="" /></div>
          <div>
            <span className="font-bold">Services</span>
            <p>Web Design</p>
            <p>UX / UI</p>
            <p>Web Development</p>
            <p>Branding</p>
          </div>
          <div>
            <span className="font-bold">Accessibility</span>
            <p>Mon - Fri: 9:00 - 16:00</p>
            <p>24/7 Email</p>
          </div>
          <div>
            <span className="font-bold">Contact</span>
            <p>work.amiryunuh@gmail.com</p>
            <p>061-649-8077</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">&copy; 2025 Midst | All rights reserved.</div>
      </div>
    </div>
  );
};
export default Footer;
