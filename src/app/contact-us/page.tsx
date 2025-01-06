import { FormTab } from "@/components/forms-tab";
import Image from "next/image";

export default function ContactUsPage() {
    return (
        <main className="flex flex-col justify-center content-center p-5 py-10 md:p-20">
            <div className="mb-10">
                <div className="inset-0 flex flex-col items-center justify-center  font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/80 dark:from-white/80 to-black/30 dark:to-white/20">
                        Unleashing the power of advertisement
                    </p>
                </div>
            </div>
            <div className="z-30 md:w-full md:h-full w-full  mb-10">
                <Image src={"/contact-us.svg"} alt="" fill className=" !static" />
            </div>
            <div className="flex ">
                <FormTab />
            </div>
        </main>
    )

}