import { CardDetailTypes } from "@/types/types";
import PrivacyCard from "../../_components/PrivacyCard";
import CardTypePurchaseBalance from "./CardTypePurchaseBalance";
import Button from "@/components/ui/Button";
import { cards } from "@/utils/constants";



const MyCard=({cardType,cardStatus}:{cardType:string,cardStatus:string})=>{

    const cardData=cards.filter(item=>item.cardType==cardType)

    return(
        <>
          <div className="p-4  rounded-lg bg-[#FFFFFF]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-full border border-[#EBEBEB] rounded-[15px]">
                    <PrivacyCard card={cardData[0]} />
                </div>
                <div className="w-full px-8">
                    <CardTypePurchaseBalance />
                </div>
                <div className="flex items-center justify-center">
                <div className={`w-[20vw] bg-[#FFFFFF]`}>
                    <Button buttonName={`${cardStatus=="active"?'TopUp':'Activate the Card'}`} styles={`w-full button-shadow font-semibold ${cardType=="basic"&&"violet-text-gradient"} ${cardType=="standard"&&"text-[#FFFFFF] violet-bg-gradient"} ${cardType=="gold"&&"text-[#FFFFFF] slate-bg-gradient"} `} />
                </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default MyCard;