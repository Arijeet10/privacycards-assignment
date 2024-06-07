import Header from "@/components/Header";
import { ReactNode } from "react";


export default function HomeLayout({children}:{children:ReactNode}){

    return(
        <main className="mx-8 my-4">
            <Header />
            {children}
        </main>
    )
}