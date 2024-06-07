import Divider from "@/components/ui/Divider";
import Image from "next/image";
import { cards, myCards } from "@/utils/constants";

import MyCard from "./_components/MyCard";



const MyCards = () => {



  return (
    <>
      <div className="py-8">
        <div className="px-20 py-10 relative bg-[#F5F3FE] rounded-[20px] flex flex-col gap-10">
          <div className="absolute top-0 right-0 ">
            <Image
              src="/triangle.png"
              alt=""
              width={100}
              height={100}
              className="w-full h-full rounded-tr-[20px]"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Divider />
            <div className="violet-text-gradient text-2xl  md:text-3xl lg:text-4xl text-nowrap font-semibold">
              <span className="slate-text-gradient">My</span> Cards
            </div>
            <Divider />
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {myCards.map((item,i)=>{
                return(
                  <div key={i} className="relative rounded-lg">
                    <MyCard cardType={item.cardType} cardStatus={item.cardStatus} />
                    {item.cardStatus!=='active' && item.cardStatus!=='notActive' && (
                      <div className="absolute z-50 inset-0 rounded-lg">
                        <div className="rounded-lg absolute z-10 inset-0 backdrop-blur-sm bg-[rgba(255,255,255,0.5)]" />
                        <div className={`absolute z-50 top-1/4 left-2/4 translate-x-[-50%] translate-y-[-50%] ${item.cardType!=="basic"?"text-[#FFFFFF]":"text-[#6D6D6D]"}  font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-nowrap`}>{item.cardStatus}</div>
                      </div>
                    )}
                  </div>
                )
            })}
          </div>
          {/* <div>
            <div className="flex flex-col items-start gap-4">
                <div className="w-full ">
                    <PrivacyCard card={cards[0]} />
                </div>
                <div className="w-full ">
                    <CardTypePurchaseBalance />
                </div>
                <div className={`w-full bg-[#FFFFFF]`}>
                    <Button buttonName="TopUp" styles="w-full button-shadow font-semibold violet-text-gradient" />
                </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MyCards;
