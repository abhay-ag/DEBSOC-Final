import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer({ links }) {
    return (
        <footer className="bg-zinc-800">
            <div className="container py-8 px-4 mx-auto">
                <div className="footer-nav flex flex-wrap justify-center space-x-10 md:space-x-20">
                    {links.map((link) => (
                        <Link className='footer-nav-link py-2 text-base text-gray-300 hover:text-gray-100 md:text-lg' key={`link-${link.name}`} to={link.to}>{link.name}</Link>
                    ))}
                </div>
                <div className="social-links mt-8 flex justify-center space-x-10 text-base text-gray-400">
                    
                </div>
            </div>
        </footer>
    );
};