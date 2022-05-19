import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ links }) {
    return (
        <footer className="bg-zinc-800">
            <div className="container py-8 px-4 mx-auto">
                <div className="footer-nav flex flex-wrap justify-center space-x-10 md:space-x-20">
                    {links.map((link) => (
                        <Link className='footer-nav-link py-2 text-base text-gray-300 hover:text-gray-100 md:text-lg' key={`link-${link.name}`} to={link.to}>{link.name}</Link>
                    ))}
                </div>
                <div className="social-links mt-8 flex justify-center space-x-8 text-base text-gray-400">
                    <a target="_blank" href="https://m.facebook.com/chitkaradebsoc" className="text-gray-400 hover:text-gray-300 transition-colors" rel="noreferrer">
                        <FontAwesomeIcon className="h-6 w-6" icon={faFacebook} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/debsoc_chitkara/?hl=en" className="text-gray-400 hover:text-gray-300 transition-colors" rel="noreferrer">
                        <FontAwesomeIcon className="h-6 w-6" icon={faInstagram} />
                    </a>
                    <a target="_blank" href="https://in.linkedin.com/company/debsoc-cuiet" className="text-gray-400 hover:text-gray-300 transition-colors" rel="noreferrer">
                        <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
                    </a>
                    <a href="/something-else" className="text-gray-400 hover:text-gray-300 transition-colors">
                        <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
                    </a>
                </div>
                <div className="mt-8 text-center text-base text-gray-400">
                    &copy; 2022 DEBSOC Not Pvt. Ltd. No Rights Reserved Whatsoever!
                </div>
            </div>
        </footer>
    );
};