import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHashtag, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import './style.css'

export default function ContactUs() {
    return (
        <div className="flex-1 flex flex-col max-w-7xl w-full h-[100vh] mx-auto scrollbar">
            <div className="m-auto flex items-center justify-center py-12 px-4 flex-col max-w-screen-sm">
                <h1 className="text-5xl text-center font-bold text-white">Contact Us:</h1>
                <div className="flex flex-col mt-10 px-10">
                    <div className="flex text-white items-center hover:text-blue-200 transition mb-4 text-xl space-x-4">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <a href="mailto:debsoc.cuiet@chitkara.edu.in" target="_blank">debsoc.cuiet@chitkara.edu.in</a >
                    </div>
                    <div className="flex text-white items-center mb-4 text-xl space-x-4">
                        <FontAwesomeIcon icon={faHashtag} />
                        <span>Somewhere in the neighbourhood of Chitkara University</span>
                    </div>
                </div>
            </div>
        </div>
    );
};