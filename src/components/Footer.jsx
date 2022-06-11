import { Link } from "react-router-dom";

export default function Footer({ footerLinks, footerSocialLinks }) {
    return (
        <footer className="bg-zinc-800">
            <div className="container py-8 px-4 mx-auto">
                <div className="footer-nav flex flex-wrap justify-center space-x-10 md:space-x-20">
                    {footerLinks.map((link) => (
                        <Link className='footer-nav-link py-2 text-base text-gray-300 hover:text-gray-100 md:text-lg' key={`link-${link.name}`} to={link.to}>{link.name}</Link>
                    ))}
                </div>
                <div className="social-links mt-8 flex justify-center space-x-8 text-base text-gray-400">
                    {footerSocialLinks.map((link, i) => (
                      <a key={`footer-social-link-${i}`} target="_blank" href={link.url} className="text-gray-400 hover:text-gray-300 transition-colors" rel="noreferrer">{link.icon}</a>
                    ))}
                </div>
                <div className="mt-8 text-center text-base text-gray-400">
                    &copy; 2022 DEBSOC Not Pvt. Ltd. No Rights Reserved Whatsoever!
                </div>
            </div>
        </footer>
    );
};