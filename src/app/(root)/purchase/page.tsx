import Divider from "@/components/ui/Divider";
import { purchases } from "@/utils/constants";
import Image from "next/image";

const purchaseCategories = [
  "Card No.",
  "Purchase type.",
  "Paid amt.",
  "Txn Hash.",
  "Time.",
  "Status.",
];

const Purchase = () => {
  return (
    <>
      <div className="py-8">
        <div className="px-2 sm:px-20 py-10 relative bg-[#F5F3FE] rounded-[20px] flex flex-col gap-10">
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
              <span className="slate-text-gradient">My</span> Purchases
            </div>
            <Divider />
          </div>
          <div className="flex flex-col gap-2">
            <div className="p-4 flex items-center justify-between font-semibold text-xs sm:text-xs md:text-base lg:text-xl rounded-[15px] bg-[#9FA9FF] text-[#FFFFFF]">
              {purchaseCategories.map((item, i) => {
                return (
                  <div key={i} className="flex-1 text-center">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="px-4 flex flex-col gap-4 font-medium text-xs sm:text-base md:text-lg lg:text-2xl">
              {purchases.map((item, i) => {
                return (
                  <div key={i} className="py-4 border-b border-[#E5E5E5] flex items-center justify-between text-nowrap">
                    <div className="flex-1 text-center">{item.CardNo}</div>
                    <div className="flex-1 text-center">{item.PurchaseType}</div>
                    <div className="flex-1 text-center">{item.PaidAmt}</div>
                    <div className="flex-1 text-center">{item.TxnHash}</div>
                    <div className="flex-1 text-center">{item.Time}</div>
                    <div className="flex-1 text-center">{item.Status}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
