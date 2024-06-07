import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  return (
    <>
      <div className="flex flex-col gap-4 text-base sm:text-xs md:text-sm lg:text-base">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="font-semibold  text-2xl sm:text-xl md:text-2xl lg:text-3xl">
            Sign up to your account
          </div>
          <div className="text-[#475467]">
            Welcome back! Please enter your details.
          </div>
        </div>
        {/* Main */}
        <div className="flex flex-col gap-4 text-sm text-[#344054]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm sm:text-xs md:text-sm">
                Name<span className="text-[#F04438]">*</span>
              </div>
              <div className="p-2 rounded-lg border border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full focus:outline-none bg-transparent text-[#667085]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm sm:text-xs md:text-sm">
                Email<span className="text-[#F04438]">*</span>
              </div>
              <div className="p-2 rounded-lg border border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full focus:outline-none bg-transparent text-[#667085]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm sm:text-xs md:text-sm">
                Password<span className="text-[#F04438]">*</span>
              </div>
              <div className="p-2 rounded-lg border border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Enter password"
                  className="w-full focus:outline-none bg-transparent text-[#667085]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <input type="checkbox" className="" />
              </div>
              <div>Remember for 30 days</div>
            </div>
            <div className="violet-text-gradient font-semibold ">Forgot password</div>
          </div>
          <div className="flex flex-col gap-4 text-lg sm:text-sm  md:text-base lg:text-lg">
            <div className="w-full">
              <button className="p-2 w-full  rounded-lg violet-bg-gradient text-[#ffffff]">
                Sign up
              </button>
            </div>
            <div className="w-full ">
              <button className="p-2 w-full rounded-lg border border-[#D0D5DD] flex items-center justify-center gap-2 hover:bg-[#e5e5e5]">
                <div>
                  <FcGoogle />
                </div>
                <div className="text-[#344054] font-semibold">
                  Sign up with Google
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="text-sm text-[#475467]">Don’t have an account?</div>
            <Link href="/login" className="violet-text-gradient">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
