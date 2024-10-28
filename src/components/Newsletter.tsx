import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import NewLatterBanner from '../../public/newsletter-bg.jpeg';

const Newsletter = () => {
    return (
        <div className="w-full h-96 flex items-center bg-white bg-cover bg-center" style={{ backgroundImage: `url(${NewLatterBanner})` }}>
            <div className="flex flex-col items-center mx-auto">
                <span className="text-gray-500 uppercase mb-4">Newsletter</span>
                <span className="text-lg font-medium mb-5 text-center">Sign up for latest updates and offers</span>
                <div className="flex items-center align-middle mb-2">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="border border-gray-300 rounded-none p-3 w-52 md:w-72 outline-none "
                    />
                    <button className="bg-purple-600 text-white h-12 w-28 flex items-center justify-center cursor-pointer">
                        Subscribe
                    </button>
                </div>
                <div className="text-gray-500 mb-5 text-sm">Will be used in accordance with our Privacy Policy</div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 flex justify-center items-center bg-gray-800 text-white rounded-full">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-gray-800 text-white rounded-full">
                        <FaTwitter size={14} />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-gray-800 text-white rounded-full">
                        <FaInstagram size={14} />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-gray-800 text-white rounded-full">
                        <FaLinkedinIn size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
