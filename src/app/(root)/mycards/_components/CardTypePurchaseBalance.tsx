import Divider from "@/components/ui/Divider";

const CardTypePurchaseBalance = () => {
  return (
    <>
      <div className=" text-[#000000] text-lg flex flex-col gap-4 text-nowrap">
        <div className=" flex items-center justify-between ">
          <div className="flex-1">Card Type:</div>
          <div className="w-full flex-1">
            <div className="w-full border-b border-[#E4E4E4]" />
          </div>
          <div className="flex-1 text-end">Basic</div>
        </div>
        <div className=" flex items-center justify-between ">
          <div className="flex-1">Purchase</div>
          <div className="w-full flex-1">
            <div className="w-full border-b border-[#E4E4E4]" />
          </div>
          <div className="flex-1 text-end">21-mar-2024</div>
        </div>
        <div className=" flex items-center justify-between ">
          <div className="flex-1">Balance</div>
          <div className="w-full flex-1">
            <div className="w-full border-b border-[#E4E4E4]" />
          </div>
          <div className="flex-1 text-end">$971080.00</div>
        </div>
      </div>
    </>
  );
};

export default CardTypePurchaseBalance;
