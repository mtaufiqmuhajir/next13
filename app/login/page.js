// import Image from "next/image";
import Image from "next/image";
import FormLogin from "./formLogin";

export default function page() {
    return (
        <div className="flex justify-center relative h-screen">
            <div className="absolute bg-[#EFF3DD] -z-10 h-[27rem] w-full md:hidden">
                <Image src={'login.svg'} layout="fill" objectFit="contain"/>
            </div>
            <div className="md:w-1/3 w-full border rounded-2xl p-4 md:mt-32 mt-64 bg-white bg-opacity-90">
                <label className="text-2xl font-bold">Hello</label>
                <FormLogin/>
            </div>
        </div>
    )
}
