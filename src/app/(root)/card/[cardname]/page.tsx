"use client";

import { cards } from "@/utils/constants";
import { NextPage } from "next";
import PrivacyCard from "../../_components/PrivacyCard";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Benifits from "../_components/Benifits";
import NetworkOptions from "../_components/NetworkOptions";
import TokenOptions from "../_components/TokenOptions";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the type for the params
interface Params {
  cardname: string;
}

// Define the type for the props
interface SelectedCardProps {
  params: Params;
}

const SelectedCard: NextPage<SelectedCardProps> = ({ params }) => {
  const { cardname } = params;
  console.log(cardname);
  const cardDetails = cards.filter((item) => item.cardType == cardname);

  const router = useRouter();

  const [checkoutForm, setCheckoutForm] = useState({
    card: cardname,
    network: "",
    token: "",
  });

  const handleCardPay = () => {
    if (!checkoutForm.network && !checkoutForm.token) {
      alert("Select Network and Token for the card to buy");
    } else {
      console.log(checkoutForm);
      router.push(
        `/card/checkout/${checkoutForm.card}/${checkoutForm.network}/${checkoutForm.token}`
      );
    }
  };

  return (
    <>
      <div className="py-8">
        <div className="px-2 sm:px-10 lg:px-20 py-10 w-full relative bg-[#F5F3FE] rounded-[20px] flex flex-col gap-10">
          <div className="absolute top-0 right-0 ">
            <Image
              src="/Triangle.png"
              alt=""
              width={100}
              height={100}
              className="w-full h-full rounded-tr-[20px]"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Divider />
            <div className="violet-text-gradient text-2xl  md:text-3xl lg:text-4xl text-nowrap font-semibold">
              <span className="slate-text-gradient">Selected</span> Cards
            </div>
            <Divider />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <div className="md:w-[45vw]">
                <PrivacyCard card={cardDetails[0]} />
              </div>
              <div
                className={`mx-4  ${
                  cardname == "basic" && "bg-[#FFFFFF] rounded-md"
                }`}
              >
                {cardname === "basic" && (
                  <Button
                    buttonName="Buy Now"
                    styles="w-full font-medium  violet-text-gradient button-shadow "
                  />
                )}
                {cardname === "standard" && (
                  <Button
                    buttonName="Buy Now"
                    styles="w-full font-medium violet-bg-gradient text-[#ffffff]"
                  />
                )}
                {cardname === "gold" && (
                  <Button
                    buttonName="Buy Now"
                    styles="w-full font-medium slate-bg-gradient text-[#ffffff]"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="">
            <Benifits />
          </div>
          <div>
            <NetworkOptions
              checkoutForm={checkoutForm}
              setCheckoutForm={setCheckoutForm}
            />
          </div>
          <div>
            <TokenOptions
              checkoutForm={checkoutForm}
              setCheckoutForm={setCheckoutForm}
            />
          </div>
          <div className="flex items-center justify-center">
            <div
              onClick={() => handleCardPay()}
              className={`w-[40vw] rounded-md ${
                cardname == "basic" && "bg-[#FFFFFF]"
              }`}
            >
              <Button
                buttonName="Pay 500 UST"
                styles={`w-full button-shadow font-semibold ${
                  cardname == "basic" && "violet-text-gradient"
                } ${
                  cardname == "standard" && "violet-bg-gradient text-[#ffffff]"
                }  ${
                  cardname == "gold" && "slate-bg-gradient text-[#ffffff]"
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCard;
