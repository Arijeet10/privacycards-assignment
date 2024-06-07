"use client";

import Divider from "@/components/ui/Divider";
import { cards, networkBadges, tokens } from "@/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import CheckoutPrivacyCard from "../_components/CheckoutPrivacyCard";
import Button from "@/components/ui/Button";

const Checkout = () => {
  const { cardDetails } = useParams();
  console.log(cardDetails);

  const cardInfo = cards.filter((item) => item.cardType === cardDetails[0]);

  const networkBadgeInfo = networkBadges.filter(
    (item) => item.name == cardDetails[1]
  );

  const tokenInfo = tokens.filter((item) => item.name == cardDetails[2]);

  return (
    <>
      <div className="py-8">
        <div className="px-20 py-10 relative bg-[#F5F3FE] rounded-[20px] flex flex-col gap-10">
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
            <div className="violet-text-gradient  text-2xl  md:text-3xl lg:text-4xl text-nowrap font-semibold">
              <span className="slate-text-gradient">Check</span>out
            </div>
            <Divider />
          </div>
          <div>
            <CheckoutPrivacyCard
              cardDetails={cardDetails}
              cardInfo={cardInfo}
            />
          </div>
          <div className="flex items-center justify-center gap-8 text-[#2A2A2A99]">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-medium">Selected Network:</div>
              <div>
                <div
                  className={`p-4 border border-[#898989] rounded-lg flex items-center justify-center gap-2 cursor-pointer  `}
                >
                  <div className="">
                    <Image
                      src={networkBadgeInfo[0].logo}
                      alt=""
                      width={100}
                      height={100}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <div
                    className={` font-medium text-xs sm:text-2xl md:text-3xl lg:text-4xl ${
                      cardDetails[0] == "BSC"
                        ? "text-[#F3BA2F]"
                        : "text-[#898989]"
                    } `}
                  >
                    {cardDetails[1]}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-medium">Selected Token:</div>
              <div>
                <div
                  className={`p-4 border ${
                    tokenInfo[0].name == "USDT"
                      ? "border-[#EBEBEB] bg-[#FFFFFF] "
                      : "border-[#898989] bg-transparent"
                  }  rounded-lg flex items-center justify-center gap-2 cursor-pointer `}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      tokenInfo[0].name == "USDT"
                        ? "bg-[#1BA27A]"
                        : "bg-[#898989]"
                    }`}
                  >
                    <Image
                      src={tokenInfo[0].logo}
                      alt=""
                      width={100}
                      height={100}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <div
                    className={`font-medium text-xs sm:text-2xl md:text-3xl lg:text-4xl ${
                      tokenInfo[0].name == "USDT"
                        ? "text-[#1BA27A]"
                        : "text-[#898989]"
                    }`}
                  >
                    {tokenInfo[0].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div onClick={()=>{}} className={`w-[40vw] rounded-md ${cardDetails[0] == "basic" && "bg-[#FFFFFF]"}`}>
              <Button
                buttonName="Pay Now"
                styles={`w-full button-shadow font-semibold ${
                  cardDetails[0] == "basic" && "violet-text-gradient"
                } ${
                  cardDetails[0] == "standard" && "violet-bg-gradient text-[#ffffff]"
                }  ${cardDetails[0] == "gold" && "slate-bg-gradient text-[#ffffff]"} `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
