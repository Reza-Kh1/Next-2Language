import ImageCustom from "../ImageCustom/ImageCustom";
import Navlink from "../Navlink/Navlink";
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
        <header className="flex justify-between py-8 border-b border-d-60 px-28">
            <ImageCustom figureClass="w-1/2" alt='logo' src={"/logo.png"} width={60} height={60} />
            <div className='flex items-center w-1/2 justify-end gap-2'>
                {linkMenu.map((i, index) => (
                    <Navlink key={index} name={i.name} url={i.url} />
                ))}
            </div>
        </header>
    )
}
