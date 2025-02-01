import { useTranslations } from "next-intl";
import ImageCustom from "../ImageCustom/ImageCustom";
import Navlink from "../Navlink/Navlink";
import HeaderMobile from './HeaderMobile'
import LanguageBtn from "./LanguageBtn";
export default function Header() {
    const t = useTranslations("Menu")
    return (
        <header>
            <div dir="ltr" className="hidden md:flex justify-between md:py-4 xl:py-8 border-b border-d-60 md:px-10 xl:px-28 ">
                <div className="flex gap-3 items-center">
                    <ImageCustom figureClass="w-auto" alt='logo' src={"/logo.png"} width={60} height={60} />
                    <LanguageBtn />
                </div>
                <div className='flex items-center justify-end gap-2'>
                    {t.raw("menuArray").map((i: any, index: number) => (
                        <Navlink key={index} name={i.name} url={i.url} />
                    ))}
                </div>
            </div>
            <HeaderMobile />
        </header>
    )
}
