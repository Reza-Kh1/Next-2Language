import { fetchApi } from "@/action/fetchApi";
import AccordionBox from "@/components/AccordionBox/AccordionBox";
import CircleBox from "@/components/CircleBox/CircleBox";
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import IconBgStar from "@/components/IconBgStar/IconBgStar";
import LoadingPage from "@/components/LoadingPage/LoadingPage";
import ShapeBox from "@/components/ShapeBox/ShapeBox";
import pageCache from "@/data/cache";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FaSearch } from "react-icons/fa";
import { ProjectType } from "../type";
import ProjectCards from "@/components/ProjectCards/ProjectCards";
export const metadata: Metadata = {
  title: 'Home Page | Site',
  description: 'Services | Site'
}
const getData = () => {
  return fetchApi({ url: "projects", next: pageCache.projects.cache, tags: [pageCache.projects.tag] })
}
export default async function Home({ params }: any) {
  const t = await getTranslations('HomePage');
  const { locale } = await params
  const { data }: { data: ProjectType[] } = await getData()
  return (
    <main className="main-class">
      <div className="w-full md:w-2/3 mx-auto text-center mt-16">
        <h2 className='text-w-100 text-3xl md:text-6xl font-semibold mb-3'>
          {t("headerPage.title-dark")}
          <span className='text-w-80 text-3xl md:text-6xl font-semibold block mb-9'>{t("headerPage.title-light")}</span>
        </h2>
        <p className="text-w-50">{t("headerPage.title-text")}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3 mt-10 md:mt-16">
        {t.raw("containerBox").map((item: any, index: number) => (
          <IconBgStar image={item.image} index={index} key={index} name={item.name} text={item.text} />
        ))}
      </div>
      <div>
        <HeaderTitle light={t("serviceBox.header.light")} dark={t("serviceBox.header.dark")} text={t("serviceBox.header.text")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
          {t.raw("serviceBox.circleBox").map((row: any, index: number) => (
            <CircleBox btnMore name={row.name} key={index} text={row.text} image={row.image} />
          ))}
        </div>
      </div >
      <div>
        <HeaderTitle light={t("WorksBox.header.light")} dark={t("WorksBox.header.dark")} text={t("WorksBox.header.text")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:t-12">
          {t.raw("WorksBox.arrayBox").map((row: any, index: number) => (
            <ShapeBox category={row.category} date={row.date} image={row.image} name={row.name} text={row.text} key={index} />
          ))}
        </div>
      </div>
      <div>
        <HeaderTitle light={locale === "fa" ? "پروژه های" : "Our"} dark={locale === "fa" ? "ما" : "Projects"} text={locale === "fa" ? "برخی از پروژه های موفق ما را بررسی کنید" : "Explore some of our successful projects"} />
        {data?.length ?
          <div className='my-8 md:my-12 flex flex-col gap-10'>
            {data?.map((row, index: number) => {
              if (Number(index + 1) > 4) return
              return <ProjectCards data={row} key={index} />
            })}
          </div>
          : null}
      </div>
      <div>
        <HeaderTitle dark={t("accordionBox.header.dark")} light={t("accordionBox.header.light")} text={t("accordionBox.header.text")} />
        <div className="my-10 md:my-14 flex justify-center">
          <label htmlFor="" className="relative rounded-full bg-d-80 border w-full md:w-1/4 mx-auto border-d-60">
            <input type="text" placeholder={locale === "fa" ? "جستجو" : "Search"} className="w-full pl-10 p-4 rounded-full h-full bg-d-80 text-w-90" />
            <button title="search button" type="button" className="absolute left-3 text-w-90 top-1/2 transform -translate-y-1/2">
              <FaSearch />
            </button>
          </label>
        </div>
        <div>
          <AccordionBox />
        </div>
      </div>
      {/* <div>
        <HeaderTitle dark={t("lastBox.header.dark")} light={t("lastBox.header.light")} text={t("lastBox.header.text")} />
        <div className="my-10 md:my-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.raw("lastBox.arrayBox").map((i: any, index: number) => (
            <TwoImageBox img1={i.img1} img2={i.img2} name={i.name} text={i.text} key={index} />
          ))}
        </div>
      </div> */}
    </main>
  );
}
