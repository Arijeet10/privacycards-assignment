"use client";

import { CheckoutFormTypes } from "@/types/types";
import { networkBadges } from "@/utils/constants";
import Image from "next/image";
import { SetStateAction } from "react";

const NetworkOptions = ({
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
          Select Network:
        </div>
        <div className="flex justify-start">
          <div className="grid grid-cols-2 gap-4">
            {networkBadges.map((networkBadge, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    setCheckoutForm({
                      ...checkoutForm,
                      network: networkBadge.name,
                    })
                  }
                  className={`p-4 border border-[#898989] rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#FFFFFF] hover:border-[#FFFFFF] ${
                    checkoutForm.network == networkBadge.name &&
                    "bg-[#FFFFFF] border-[#FFFFFF]"
                  }`}
                >
                  <div className="">
                    <Image
                      src={networkBadge.logo}
                      alt=""
                      width={100}
                      height={100}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <div
                    className={` font-medium text-xs sm:text-2xl md:text-3xl lg:text-4xl ${
                      networkBadge.name == "BSC"
                        ? "text-[#F3BA2F]"
                        : "text-[#898989]"
                    } `}
                  >
                    {networkBadge.name}
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

export default NetworkOptions;
