import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
    title: string;
    buttonText: string;
    buttonHref: string;
    children: ReactNode;
}

export default function ServiceCard({
    //recibimos propiedades
    title,
    buttonText,
    buttonHref,
    children,
}: ServiceCardProps) {

    return (
        <div
            className="  flex  flex-col  rounded-3xl  bg-[var(--card)]  p-8  shadow-md
                transition-all  duration-300  hover:-translate-y-2  hover:shadow-xl  "
        >
                
                <h3
                    className="  mb-6  text-center  text-2xl  font-bold  text-[var(--primary-dark)]  "
                >
                    {title}
                </h3>
                <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[var(--primary)]" />
            
            <div
                className="  flex-1  space-y-3  "
            >
                {children}

            </div>
            <div className="mt-8 flex flex-1 justify-center">

                <Link
                    href={buttonHref}
                    className="  rounded-full  bg-[var(--primary)]  px-6  py-3
                        font-semibold  text-white  transition-all  duration-300
                        hover:bg-[var(--primary-dark)]  hover:scale-105  "
                >

                    {buttonText}

                </Link>

            </div>
        </div>
    );

}