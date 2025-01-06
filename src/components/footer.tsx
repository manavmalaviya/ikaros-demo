
import { IconBrandTwitter } from "@tabler/icons-react"
import { LinkedinIcon, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="clear-both relative">

            
            <div className="z-20 flex bg-black justify-between md:justify-around p-5 flex-wrap">

                <div className="w-full md:w-fit flex-col content-start">
                    <Image src="/ikaros.svg" alt="Ikaros" width={100} height={100} />
                    <Link href={"https://maps.app.goo.gl/6miZSLLLTBmakgNz9"} target="_blank" className="flex gap-2 my-5 cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-sm font-light text-white">
                                501, Jyothi Enclave ,Renuka Enclave Road, Somajiguda,
                            </span>
                            <span className="text-sm font-light text-white flex gap-1">
                                Hyderabad 500083
                                <MapPin size={18} className="text-white" />
                            </span>
                        </div>
                    </Link>
                    <Image src="/conatct.svg" fill alt="contact image" className="max-h-[8rem] h- max-w-[10rem] !static"/>
                </div>
                <div className="flex-col content-start">

                    {/* this is not neccesarily our primary color we'll change the based on the theme */}
                    <div className="h-1 primary-color"></div>
                    <span className="heading text-white">
                        Contact Us
                    </span>
                    <div className="my-5">
                        <div className="flex flex-col">

                            <span className="text-sm my-1 text-white">
                                IN +918235102102
                            </span>
                            <span className="text-sm my-1 text-white">
                                IN +919979128284
                            </span>
                            <span className="text-sm mt-1 mb-3 text-white">
                                IN +916355792548
                            </span>
                        </div>
                        <div className="flex gap-2">

                            <span className="text-sm text-white" >
                                support@ikaros.live
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex-col content-start">
                    <div className="h-1 primary-color"></div>
                    <span className="heading text-white">
                        Follow Us
                    </span>
                    <div className="my-5">
                        <div className="flex gap-2 my-3">
                            <LinkedinIcon size={18} className="text-white" />
                            <span className="text-sm cursor-pointer hover:underline hover:decoration-white text-white">
                                LinkedIn
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <IconBrandTwitter size={18} className="text-white" />
                            <span className="text-sm cursor-pointer  hover:underline hover:decoration-white text-white">
                                Twitter
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-col content-start">
                    <div className="h-1 primary-color"></div>
                    <span className="heading text-white">
                        Terms
                    </span>
                    <div className="my-5">
                        <div className="flex ">
                            <span className="text-sm text-white">
                                Privacy Policy
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}