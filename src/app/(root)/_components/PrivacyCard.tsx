import { CardDetailTypes } from "@/types/types";
import Image from "next/image";


const PrivacyCard=({card}:{card:CardDetailTypes})=>{

    //console.log(card)

    return(
        <>
            <div className={`p-8 w-full sm:min-w-[500px] h-[300px] rounded-[15px]   privacy-card ${card.cardType==="basic"&&"bg-[#ffffff] text-[#696974]"} ${card.cardType==="standard"&&"violet-bg-gradient text-[#ffffff]"} ${card.cardType==="gold"&&"slate-bg-gradient text-[#ffffff]"}`}>
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div className="font-bold text-lg sm:text-3xl">Privacy Cards.</div>
                        <div>
                            <Image src={card.cardPaypass} alt="" width={100} height={100} className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div>
                            <Image 
                                src={card.cardNumber}
                                alt=""
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="font-medium text-nowrap">
                                    <div className="text-xs">Card Holder</div>
                                    <div className="text-base sm:text-lg ">John Doe</div>
                                </div>
                                <div className="font-medium text-nowrap">
                                    <div className="text-xs">Expiry Data</div>
                                    <div className="text-base sm:text-lg">09/28</div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={card.cardLogo}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyCard;