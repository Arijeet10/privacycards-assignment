import Image from "next/image";
import LoginForm from "./_components/LoginForm";


const Login=()=>{

    return(
        <>
            <div className=" px-2 py-4  sm:pt-8 sm:pb-4 sm:pl-8 sm:pr-16">
                <div className="grid sm:grid-cols-12 sm:items-center gap-4">
                    <div className="sm:col-span-6 md:col-span-7 lg:col-span-8 flex justify-start">
                        <Image src="/privacy-cards.png" alt="" width={1000} height={1000} className="w-full h-auto lg:max-w-[622px] object-cover" />
                    </div>
                    <div className=" sm:col-span-6 md:col-span-5 lg:col-span-4">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;