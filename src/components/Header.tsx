import logo from "../assets/images/logo.png";
import phone from "../assets/icons/phone.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container px-4 md:px-0 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="BHIVE Workspace Logo" className="h-10" />
        </div>
        <div>
          <button className="p-2 border border-yellow-400 border-2 rounded-md flex items-center justify-center">
            <img src={phone} alt="Phone" className="h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
