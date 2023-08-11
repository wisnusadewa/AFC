import NavbarLogo from '../assets/images/afc-logo.png';
import contact from '../assets/images/messaging.png';
import WA from '../assets/images/whatsapp-icon.svg';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <img src={NavbarLogo} className="btn btn-ghost" />
        </div>
        <div className="navbar-end flex text-[13px] md:text-[20px]">
          <div className="w-full md:w-52">
            <div className="flex items-center">
              <a href="http://wa.me/+6281372835667">
                <p className="bg-yellow-300 px-1 rounded-md">CONTACT ORDER</p>
              </a>
              <img src={contact} width={30} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-14 bg-black">
          <p className="fixed w-[95px] rounded-md px-1 border right-14 bottom-7 text-[13px] bg-green-400 opacity-50">Hubungi Kami</p>
          <div className="fixed">
            <a href="http://wa.me/+6281372835667">
              <img src={WA} className="mb-20 md:w-20 w-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
