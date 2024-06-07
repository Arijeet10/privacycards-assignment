import PrivacyCard from "@/app/(root)/_components/PrivacyCard";
import Button from "@/components/ui/Button";
import { CardDetailTypes } from "@/types/types";


const CheckoutPrivacyCard=({cardDetails,cardInfo}:{cardDetails:string|string[],cardInfo:CardDetailTypes[]})=>{

    return(
        <>
                    <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-4 ">
              <div className={`flex flex-col lg:flex-row gap-6 items-start `}>
                <div className={``}>
                  <PrivacyCard card={cardInfo[0]} />
                </div>
                <div
                  className={`ml-32 lg:ml-0 lg:pt-0 lg:mt-8 border-b lg:border-r w-60 h-0 lg:w-0 lg:h-60 border-[#E0E0E0]`}
                />
              </div>
              <div className={`flex flex-col gap-4`}>
                <div className="">
                  <Button
                    buttonName={cardDetails[0]
                      .split("")
                      .map((item, i) => (i == 0 ? item.toUpperCase() : item))
                      .join("")}
                    styles={`text-[#FFFFFF] ${
                      cardDetails[0] == "basic" && "bg-[#343434]"
                    }  ${
                      cardDetails[0] == "standard" && "violet-bg-gradient"
                    } ${cardDetails[0] == "gold" && "slate-bg-gradient"}`}
                  />
                </div>
                <div className="flex flex-col gap-4 text-[#2A2A2A99] font-medium ">
                  <div>Card Cost: {cardInfo[0].cardCost}</div>
                  <div>Monthly Top-up Limit: {cardInfo[0].cardLimit}</div>
                </div>
              </div>
            </div>
        </>
    )
}

export default CheckoutPrivacyCard;