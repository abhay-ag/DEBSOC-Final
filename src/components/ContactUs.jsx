import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHashtag, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    return (
        <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto scrollbar my-40">
            <div className="m-auto flex items-center justify-center py-12 px-4 flex-col max-w-screen-sm">
                <h1 className="text-5xl text-center font-black">Contact Us:</h1>
                <div className="flex flex-col mt-10 px-10">
                    <div className="flex items-center mb-4 text-xl space-x-4">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span>debsoc.cuiet@chitkara.edu.in</span>
                    </div>
                    <div className="flex items-center mb-4 text-xl space-x-4">
                        <FontAwesomeIcon icon={faHashtag} />
                        <span>Somewhere in the neighbourhood of Chitkara University</span>
                    </div>
                </div>
            </div>
        </div>
    );
};