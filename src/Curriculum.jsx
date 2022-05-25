
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faClock} from "@fortawesome/free-solid-svg-icons";

export default function Curriculum() {
    return (
        <div className="text-white">
            <div className="my-24 text-center text-white">
                <div className="text-3xl sm:text-5xl font-bold">Checkout Our <span className="text-indigo-400">Curriculum</span></div>
                <div className="mt-8 text-xl max-w-lg md:max-w-2xl mx-auto">We have an intense curriculum covering everything which is in demand in the debating community from controversial to extra controversial</div>
            </div>
            <div className="flex justify-center mt-10 pt-10">
                <FontAwesomeIcon className="text-3xl animate-bounce" icon={faAngleDoubleDown} />
            </div>
            <div className="flex flex-col items-center">
                <div className="my-12 mx-4 flex flex-col sm:flex-row items-stretch bg-zinc-800 rounded-2xl overflow-hidden">
                    <div className="px-6 py-14 sm:w-96 flex flex-col items-center justify-center text-center h-full">
                        <div className="w-24 h-24 flex justify-center">
                            <FontAwesomeIcon className="text-4xl text-gray-300 animate-spin" icon={faClock} />
                        </div>
                        <div className="text-3xl mb-4">Mock Debates</div>
                        <div className="text-indigo-300">Dive into the world of debating, MUNs and whatnot</div>
                    </div>
                    <div className="bg-indigo-400 max-w-3xl py-12 sm:py-0">
                        <div className="h-full w-full my-auto px-6 object-contain object-center text-4xl font-bold text-gray-700 flex items-center">There is supposed to be something interesting here!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};