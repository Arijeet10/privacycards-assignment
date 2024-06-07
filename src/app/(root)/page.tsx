import Divider from "@/components/ui/Divider";
import { cards } from "@/utils/constants";
import CardDetails from "./_components/CardDetails";
import Image from "next/image";
import PlansAndFeatures from "./_components/PlansAndFeatures";

const Home = () => {


  return (
    <>
      <div className="py-8">
        <div className="flex flex-col gap-10">
          <div className="px-2 sm:px-10 lg:px-20 py-10 relative bg-[#F5F3FE] rounded-[20px] flex flex-col gap-10">
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
              <div className="violet-text-gradient uppercase text-2xl  md:text-3xl lg:text-4xl text-nowrap font-semibold">
                <span className="slate-text-gradient">Card</span> Details
              </div>
              <Divider />
            </div>
            <div className="flex flex-col gap-8">
              {cards.map((card, index) => {
                return <CardDetails key={index} card={card} />;
              })}
            </div>
          </div>
          <div>
            <PlansAndFeatures />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
