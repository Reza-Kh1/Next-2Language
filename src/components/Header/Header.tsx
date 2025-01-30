import ImageCustom from "../ImageCustom/ImageCustom";
import Navlink from "../Navlink/Navlink";
import HeaderMobile from './HeaderMobile'
import LanguageBtn from "./LanguageBtn";
const linkMenu = [
    {
        name: "Home",
        url: "/"
    }, {
        name: "Services",
        url: "/services"
    }, {
        name: "Projects",
        url: "/projects"
    }, {
        name: "Scripts Hub",
        url: "/scripts-hub"
    }, {
        name: "About Us",
        url: "/about-us"
    }, {
        name: "Contact Us",
        url: "/contact-us"
    }, {
        name: "Careers",
        url: "/careers"
    }, {
        name: "Blogs",
        url: "/blogs"
    },
]
export default function Header() {
    return (
        <header>
            <div className="hidden md:flex justify-between md:py-4 xl:py-8 border-b border-d-60 md:px-10 xl:px-28 ">
                <div className="flex gap-3 items-center">
                    <ImageCustom figureClass="w-auto" alt='logo' src={"/logo.png"} width={60} height={60} />
                    <LanguageBtn />
                </div>
                <div className='flex items-center justify-end gap-2'>
                    {linkMenu.map((i, index) => (
                        <Navlink key={index} name={i.name} url={i.url} />
                    ))}
                </div>
            </div>
            <HeaderMobile />
        </header>
    )
}
