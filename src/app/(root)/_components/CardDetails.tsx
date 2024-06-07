"use client";

import SelectButton from "@/components/ui/SelectButton";
import PrivacyCard from "./PrivacyCard";
import Divider from "@/components/ui/Divider";
import { CardDetailTypes } from "@/types/types";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const CardDetails = ({ card }: { card: CardDetailTypes }) => {
  const cardType = card.cardType
    .split("")
    .map((item, i) => (i == 0 ? item.toUpperCase() : item))
    .join("");

    const router=useRouter()

    const handleSelectCard=()=>{
      router.push(`/card/${card.cardType}`)
    }

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-4 ">
          <div
            className={`flex flex-col lg:flex-row gap-6 items-start ${
              card.cardType == "standard" && "lg:order-2"
            }`}
          >
            <div
              className={`flex flex-col gap-2 ${
                card.cardType == "standard" && "lg:order-2"
              }`}
            >
              <div>
                <PrivacyCard card={card} />
              </div>
              <div onClick={()=>handleSelectCard()} className={`mx-4 ${card.cardType=="basic"&&"bg-[#FFFFFF] rounded-md"}`}>
                {card.cardType === "basic" && (
                  <SelectButton styles="bg-[#FFFFFF] violet-text-gradient button-shadow " />
                )}
                {card.cardType === "standard" && (
                  <SelectButton styles="violet-bg-gradient text-[#ffffff]" />
                )}
                {card.cardType === "gold" && (
                  <SelectButton styles="slate-bg-gradient text-[#ffffff]" />
                )}
              </div>
            </div>
            <div
              className={`ml-32 lg:ml-0 lg:pt-0 lg:mt-8 border-b lg:border-r w-60 h-0 lg:w-0 lg:h-60 border-[#E0E0E0] ${
                card.cardType == "standard" && "lg:order-1"
              }`}
            />
          </div>
          <div
            className={`flex flex-col gap-4 ${
              card.cardType == "standard" && "lg:order-1"
            }`}
          >
            <div className="">
              <Button
                buttonName={cardType}
                styles={`text-[#FFFFFF] ${
                  card.cardType == "basic" && "bg-[#343434]"
                }  ${card.cardType == "standard" && "violet-bg-gradient"} ${
                  card.cardType == "gold" && "slate-bg-gradient"
                }`}
              />
            </div>
            <div className="flex flex-col gap-4 text-[#191919] font-medium">
              <div>Card Cost: {card.cardCost}</div>
              <div>Monthly Top-up Limit: {card.cardLimit}</div>
            </div>
          </div>
        </div>
        <div className={`${card.cardType == "gold" && "hidden"}`}>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default CardDetails;
