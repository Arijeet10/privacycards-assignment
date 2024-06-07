import Divider from "./ui/Divider";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer=()=>{

    return(
        <>
            <footer className="py-4  text-[#A0A0A0] border-t border-[#EBEBEB] font-semibold text-base sm:text-sm md:text-base lg:text-lg">
                <div className="flex flex-col gap-8">
                <div className="mx-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 ">
                    <div className="flex flex-col gap-4">
                        <div className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl slate-text-gradient">
                            Privacy <span className="violet-text-gradient">Cards</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-xl sm:text-lg md:text-xl lg:text-2xl">BE PART OF OUR COMMUNITY</div>
                            <div className="p-2 rounded-lg border border-[#EBEBEB]">
                                <div className="flex items-center justify-between">
                                <div>
                                    <FaFacebook />
                                </div>
                                <div>
                                    <FaXTwitter />
                                </div>
                                <div>
                                    <FaInstagram />
                                </div>
                                <div>
                                    <FaLinkedinIn />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>How it Works?</div>
                        <div>
                            <div>Road</div>
                            <div>Map</div>
                        </div>
                    </div>
                    <div>
                        <div>Terms and Conditions</div>
                        <div>Kyc Policy</div>
                    </div>
                    <div>
                        <div>FAQ</div>
                        <div>Contact Us</div>
                    </div>
                </div>
                <Divider />
                <div className="flex items-center justify-center">
                    <div className="text-[#A0A0A0] font-medium">
                    © All rights reserved to PrivacyCards
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;