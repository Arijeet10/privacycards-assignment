import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <div className="text-2xl sm:text-lg md:text-3xl lg:text-4xl violet-text-gradient font-semibold">
            <span className="slate-text-gradient font-bold">404</span> Error Page Not Found
          </div>
          <div className=" flex items-center justify-center">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg violet-bg-gradient text-[#ffffff]"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
