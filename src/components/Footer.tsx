
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../public/payments.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
    <Newsletter/>
    <footer className="w-full">
      <div className="footer-content max-w-[1200px] mx-auto py-12 px-5 flex flex-wrap gap-5">
        <div className="col max-w-[300px]">
          <div className="title mb-5 text-sm">About</div>
          <div className="text text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium earum a atque natus minima placeat eligendi ipsum recusandae nihil ab, sed nisi tenetur laudantium reprehenderit impedit. Iusto placeat itaque dolorem.
          </div>
        </div>
        <div className="col max-w-[300px]">
          <div className="title mb-5 text-sm">Contact</div>
          <div className="c-item flex mb-2 items-start">
            <FaLocationArrow className="flex-shrink-0 text-gray-500 mr-2 mt-1" />
            <div className="text text-gray-500 text-sm">
              12th Cross Rd, BNG, BNH, BNG, Bangaluru, ******
            </div>
          </div>
          <div className="c-item flex mb-2 items-start">
            <FaMobileAlt className="flex-shrink-0 text-gray-500 mr-2 mt-1" />
            <div className="text text-gray-500 text-sm">
              Phone: 91+ 9392477974
            </div>
          </div>
          <div className="c-item flex mb-2 items-start">
            <FaEnvelope className="flex-shrink-0 text-gray-500 mr-2 mt-1" />
            <div className="text text-gray-500 text-sm">
              Email: nfashionhub@gmail.com
            </div>
          </div>
        </div>
        {/* <div className="col max-w-[300px]">
          <div className="title mb-5 text-sm">Categories</div>
          <span className="text text-sm cursor-pointer">Tops</span>
          <span className="text text-sm cursor-pointer">Clothings</span>
          <span className="text text-sm cursor-pointer">Party ware</span>
          <span className="text text-sm cursor-pointer">Co-Ords</span>
          <span className="text text-sm cursor-pointer">Dress</span>
          <span className="text text-sm cursor-pointer">Curve</span>
        </div> */}
        <div className="col max-w-[300px]">
          <div className="title mb-5 text-sm">Pages</div>
          <span className="text text-sm cursor-pointer">Home</span>
          <span className="text text-sm cursor-pointer">About</span>
          <span className="text text-sm cursor-pointer">Privacy Policy</span>
          <span className="text text-sm cursor-pointer">Returns</span>
          <span className="text text-sm cursor-pointer">Terms & Conditions</span>
          <span className="text text-sm cursor-pointer">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar border-t border-gray-300">
        <div className="buttom-bar-content py-5 flex flex-col items-center text-center gap-2 md:flex-row md:justify-between md:max-w-[1200px] mx-auto">
          <div className="text text-gray-500 text-xs">
            ANK 2024 CREATED BY ANK. PREMIUM E-COMMERCE
          </div>
          <img src={Payment} alt="" className="md:ml-4" />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

