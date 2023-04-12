import logo from "../../assets/icons/logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 z-20 w-full bg-[#161616]">
      <div className="flex items-center p-6 px-24">
        <a className="shrink-0">
          <img className="h-12" src={logo} alt="Logo CyberBrigade" />
        </a>
        <div className="invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100">
          <nav className="w-full">
            <ul className="flex flex-col lg:flex-row">
              <li>
                <a
                  href="#"
                  aria-expanded="false"
                  className="flex items-center justify-between py-3.5 lg:px-5 text-gray-600 hover:text-red-600"
                  style={{ transition: "0.5s ease", textShadow: "0.5s ease" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-expanded="false"
                  className="flex items-center justify-between py-3.5 lg:px-5 text-gray-600 hover:text-red-600"
                  style={{ transition: "0.5s ease", textShadow: "0.5s ease" }}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-expanded="false"
                  className="flex items-center justify-between py-3.5 lg:px-5 text-gray-600 hover:text-red-600"
                  style={{ transition: "0.5s ease", textShadow: "0.5s ease" }}
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-expanded="false"
                  className="flex items-center justify-between py-3.5 lg:px-5 text-gray-600 hover:text-red-600"
                  style={{ transition: "0.5s ease", textShadow: "0.5s ease" }}
                >
                  Contac
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
