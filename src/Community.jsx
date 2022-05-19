import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faWhatsapp} from "@fortawesome/free-brands-svg-icons";


export default function Community() {
    return (
        <div>
            <div className="desperate-join-message px-6 md:px-10 pt-14 text-center">
                <div className="text-4xl md:text-5xl font-bold py-10">Join our <span className="text-indigo-400">Community</span></div>
                <div className="text-xl font-base/">
                    <div>Become a member of our super awesome community and witness a learning ecosystem where curiosity is nurtured.</div>
                    <div>Join our whatsapp channel making sure you get all the updates</div>
                </div>
                <div className="py-10 flex flex-wrap justify-center items-center">
                    <a href="/something" className="mt-4 mx-3">
                        <div className="px-6 py-2 bg-indigo-400 hover:bg-indigo-500 box-border rounded text-lg">
                            <div className="flex items-center space-x-3">
                                <FontAwesomeIcon className="h-6 w-6" icon={faDiscord} />
                                <span>Join Discord</span>
                            </div>
                        </div>
                    </a>
                    <a href="/something" className="mt-4 mx-3">
                        <div className="px-6 py-2 bg-green-900 hover:bg-green-800 box-border rounded text-lg">
                            <div className="flex items-center space-x-3">
                                <FontAwesomeIcon className="h-6 w-6" icon={faWhatsapp} />
                                <span>Join Whatsapp</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="pt-14 text-center">
                <div className="font-bold text-3xl md:text-4xl">Checkout Our Wall of Love</div>
                <div className="text-indigo-400 text-xl md:text-2xl font-medium">See what our Students say</div>
                <div className="mt-10 flex mx-8 lg:mx-16 justify-center">
                    <img src="https://devsnest.in/_next/static/media/wall-of-love.161402d1.svg"  alt=""/>
                </div>
            </div>
            <div className="mt-20 md:flex md:w-5/6 mx-auto">
                <div className="my-16 mx-10 md:mx-0 text-gray-700 text-xl text-center font-medium py-6 px-10 bg-indigo-400 rounded-lg md:flex md:items-center md:text-2xl">There is supposed to be something interesting here, we just don't know yet!</div>
                <div className="flex flex-col items-center m-16">
                    <div className="font-bold text-4xl">
                        <div>Join Our Community on <span className="text-indigo-400">Discord</span></div>
                    </div>
                    <div className="mt-8 text-lg">We have the most curious debating community on discord where students help each other out and make great opinions together</div>
                    <div className="pt-10">
                        <a href="/something">
                            <div className="px-6 py-2 bg-indigo-400 hover:bg-indigo-500 box-border rounded text-lg">
                                <div className="flex items-center space-x-3">
                                    <FontAwesomeIcon className="h-6 w-6" icon={faDiscord} />
                                    <span>Join Discord</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="font-medium mt-8">To get our notification <a href="/something" className="text-green-700 hover:text-green-600">Join WhatsApp &#8594;</a></div>
                </div>
            </div>
            <div className="text-center">
                <div className="font-bold text-4xl">Past <span className="text-indigo-400">Events</span></div>
                <div className="mt-8 max-w-xl px-8 mx-auto text-xl">Expert debates and workshops on all domains and every topic by best of the best in the industry</div>
                <div className="my-12 p-8 bg-indigo-400 text-gray-700 rounded-md max-w-max md:max-w-lg mx-auto text-2xl font-bold">Here Too!</div>
            </div>
        </div>
    );
};