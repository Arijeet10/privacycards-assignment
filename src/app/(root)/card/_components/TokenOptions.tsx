"use client";

import { CheckoutFormTypes } from "@/types/types";
import { tokens } from "@/utils/constants";
import Image from "next/image";
import { SetStateAction } from "react";

const TokenOptions = ({
  checkoutForm,
  setCheckoutForm,
}: {
  checkoutForm: CheckoutFormTypes;
  setCheckoutForm: React.Dispatch<SetStateAction<CheckoutFormTypes>>;
}) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#2A2A2A]">
          Select Tokens:
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col gap-4">
            {tokens.map((token, index) => {
              return (
                <div
                  key={index}
                  onClick={()=>setCheckoutForm({
                    ...checkoutForm,
                    token: token.name,
                  })}
                  className={`p-4 border ${
                    token.name == "USDT"
                      ? "border-[#EBEBEB] bg-[#FFFFFF] "
                      : "border-[#898989] bg-transparent"
                  }  rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#E5E5E5] hover:border-[#E5E5E5] ${checkoutForm.token==token.name&&"bg-[#E5E5E5] border-[#E5E5E5]"}`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      token.name == "USDT" ? "bg-[#1BA27A]" : "bg-[#898989]"
                    }`}
                  >
                    <Image
                      src={token.logo}
                      alt=""
                      width={100}
                      height={100}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <div
                    className={`font-medium text-xs sm:text-2xl md:text-3xl lg:text-4xl ${
                      token.name == "USDT" ? "text-[#1BA27A]" : "text-[#898989]"
                    }`}
                  >
                    {token.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenOptions;
