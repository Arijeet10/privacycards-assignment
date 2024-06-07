import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { cardPlansAndFeatures, cards } from "@/utils/constants";

const PlansAndFeatures = () => {
  return (
    <>
      <div className="text-[#191919] flex flex-col gap-4">
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold  flex items-center justify-between">
          <div className="flex-1">
            <div>Compare plans &</div>
            <div>features</div>
          </div>
            {cards.map((card, index) => {
              return (
                <div key={index} className="flex-1 flex items-center justify-center">
                  <div className="flex flex-col gap-2">
                    <div>
                      {card.cardType == "basic" && (
                        <Button
                          buttonName="Basic"
                          styles="bg-[#343434] text-[#FFFFFF] text-sm sm:text-base md:text-lg lg:text-xl font-medium"
                        />
                      )}
                      {card.cardType == "standard" && (
                        <Button
                          buttonName="Standard"
                          styles="violet-bg-gradient text-[#FFFFFF] text-sm sm:text-base md:text-lg lg:text-xl font-medium"
                        />
                      )}
                      {card.cardType == "gold" && (
                        <Button
                          buttonName="Gold"
                          styles="slate-bg-gradient text-[#FFFFFF] text-sm sm:text-base md:text-lg lg:text-xl font-medium"
                        />
                      )}
                    </div>
                    <div className="">200$</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-4">
          {cardPlansAndFeatures.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <div>
                  <Divider />
                </div>
                <div className=" flex items-center justify-between text-[#747474] text-sm sm:text-base md:text-lg lg:text-xl">
                  {item.basic == item.standard &&
                  item.basic == item.gold &&
                  item.basic.length > 10 ? (
                    <>
                      <div className=" text-[#191919] font-medium">
                        {item.name}
                      </div>
                      <div className=" w-[75%] flex items-center justify-center">
                        <div>{item.basic}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 text-[#191919] font-medium">
                        {item.name}
                      </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div>{item.basic}</div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div>{item.standard}</div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div>{item.gold}</div>
                        </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlansAndFeatures;
