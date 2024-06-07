import { benifits } from "@/utils/constants";

const Benifits = () => {
  return (
    <>
      <div className="max-w-[500px] flex flex-col  gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-medium text-[#2A2A2A] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Benefit:
          </div>
            <div className="text-[#4A4A4A] text-sm sm:text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur. Velit amet ut cras sed
              egestas risus pulvinar. Praesent nunc volutpat at vel faucibus eu
              orci. Congue.
            </div>
        </div>
          <div className="flex flex-col  gap-8">
            {benifits.map((benifit, index) => {
              return (
                <div key={index} className=" flex  gap-2 ">
                  <div>

                  <div className=" p-[0.2vw] w-[10vw] h-[10vw] sm:w-[9vw] sm:h-[9vw] md:w-[8vw] md:h-[8vw] lg:w-[7vw] lg:h-[7vw] violet-bg-gradient rounded-full flex items-center justify-center font-medium ">
                    <div className="w-full h-full rounded-full  bg-[#F5F3FE] flex items-center justify-center">
                      <div className="violet-text-gradient text-sm sm:text-base md:text-lg lg:text-xl">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  </div>


                  {/* <div className="w-[5vw] h-[5vw] violet-bg-gradient rounded-full flex items-center justify-center font-medium">
                    <div className="w-[calc(5vw-2px)] h-[calc(5vw-2px)] rounded-full  bg-[#F5F3FE] flex items-center justify-center">
                      <div className="violet-text-gradient text-sm sm:text-base md:text-lg lg:text-xl">
                        {index + 1}
                      </div>
                    </div>
                  </div> */}

                  <div className="flex flex-col justify-between">
                    <div className=" font-semibold text-[#191919] text-lg sm:text-base md:text-lg lg:text-xl">
                      {benifit.title}
                    </div>
                    <div className=" text-[#4A4A4A] text-sm sm:text-sm md:text-base lg:text-lg">
                      {benifit.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </>
  );
};

export default Benifits;
