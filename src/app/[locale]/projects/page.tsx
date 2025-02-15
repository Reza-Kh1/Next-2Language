import { fetchApi } from '@/action/fetchApi'
import { OptionsGetAllMeta, ProjectType } from '@/app/type'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle'
import IconBgStar from '@/components/IconBgStar/IconBgStar'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import PaginationSeo from '@/components/PaginationSeo/PaginationSeo'
import ProjectCards from '@/components/ProjectCards/ProjectCards'
import pageCache from '@/data/cache'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'
export const metadata: Metadata = {
  title: 'Project | Site',
  description: 'Project | Site'
}
const getData = () => {
  return fetchApi({ url: "projects", next: pageCache.projects.cache, tags: [pageCache.projects.tag] })
}
export default async function page({ params }: any) {
  const { locale } = await params
  const { data, meta }: { data: ProjectType[], meta: OptionsGetAllMeta } = await getData()
  console.log(data);

  const t = await getTranslations('HomePage');
  const p = await getTranslations('Projects');
  return (
    <>
      <ContainerHeader firstDark dark={p("header.nameDark")} light={p("header.nameLight")} text={p("header.text")} />
      <main className="main-class">
        <HeaderTitle firstLight light={p("section-1.header.nameDark")} dark={p("section-1.header.nameLight")} text={p("section-1.header.text")} />
        <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 mt-10 md:mt-16">
          {t.raw("containerBox").map((item: any, index: number) => (
            <IconBgStar image={item.image} index={index} key={index} name={item.name} text={item.text} />
          ))}
        </div>
        <HeaderTitle firstLight light={p("section-2.header.nameDark")} dark={p("section-2.header.nameLight")} text={p("section-2.header.text")} />
        {data?.length ?
          <>
            <div className='my-8 md:my-12 flex flex-col gap-10'>
              {data?.map((row, index: number) => (
                <ProjectCards category={row.categories} image={row.picture} name={locale === "fa" ? row.fa_title : row.en_title} text={locale === "fa" ? row.fa_description : row.en_description} key={index} >
                  <div className='mt-5 md:mt-10 flex flex-col gap-6'>
                    <div className='border justify-between border-d-60 p-3 md:p-6 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>
                      <div className='flex flex-col gap-2 border-r border-d-60'>
                        <span className='text-w-50 text-xs md:text-base'>{locale === "fa" ? "دسته" : "Category"}</span>
                        <span className='text-w-90 text-sm md:text-base'>{row.categories}</span>
                      </div>
                      <div className='flex flex-col gap-2 md:border-r border-d-60'>
                        <span className='text-w-50 text-xs md:text-base'> {locale === "fa" ? "زمان مد نظر" : "Time Taken"}</span>
                        <span className='text-w-90 text-sm md:text-base'>{row.time_to_do} {locale === "fa" ? "روز" : "Days"}</span>
                      </div>
                      <div className='md:hidden col-span-2 border-b border-d-60 h-1'></div>
                      <div className='flex flex-col gap-2 border-r border-d-60'>
                        <span className='text-w-50 text-xs md:text-base'>{locale === "fa" ? "تاریخ شروع" : "Start Date"}</span>
                        <span className='text-w-90 text-sm md:text-base'>{new Date(row.start_date).toLocaleDateString(locale === "fa" ? "fa" : "en")}</span>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='text-w-50 text-xs md:text-base'>{locale === "fa" ? "تاریخ تکمیل" : "Completed Date"}</span>
                        <span className='text-w-90 text-sm md:text-base'>{new Date(row.end_date).toLocaleDateString(locale === "fa" ? "fa" : "en")}</span>
                      </div>
                    </div>
                    <div className='flex gap-3 md:gap-7 flex-col md:flex-row border items-center border-d-60 p-3 md:p-6 rounded-xl'>
                      <span className='text-w-100'>{locale === "fa" ? "تکنولوژی های استفاده شده" : "Technologies Used"} </span>
                      <div className='flex gap-3 md:gap-7 items-center'>
                        {JSON.parse(row.technologies)?.map((icon: any) => (
                          <i key={icon.name} className={`p-2 rounded-full  bg-gradient-to-b to-d-100 from-gray-700/90 border border-d-60 text-w-100 devicon-${icon.name}-${icon.icon}`}></i>
                        ))}
                      </div>
                    </div>
                    <div className='border items-center border-d-60 p-3 md:p-6 rounded-xl'>
                      <span className='text-w-100 w-full col-span-3'>{locale === "fa" ? "اعضای تیم" : "Team Members"}</span>
                      <div className='flex flex-col md:flex-row gap-3 md:gap-7 mt-4 justify-between'>
                        <div className='w-full md:w-1/3 md:rounded-xl p-3 border-d-60 border-b md:border'>
                          <span className='block text-w-100 mb-5 md:mb-3 text-sm md:text-base'> {locale === "fa" ? "توسعه دهنده وب" : "Web Developers"}</span>
                          <div className='flex'>
                            <div className='relative w-1/3'>
                              <figure className='absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <Image src="/profile/prof.png" alt='profile' width={40} height={40} />
                              </figure>
                              <figure className='absolute -right-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <Image src="/profile/prof2.png" alt='profile' width={40} height={40} />
                              </figure>
                            </div>
                            <div className='text-w-90 md:text-sm text-xs'>John Smith ,
                              Emily Johnson
                            </div>
                          </div>
                        </div>
                        <div className='w-full md:w-1/3 md:rounded-xl p-3 border-d-60 border-b md:border'>
                          <span className='block text-w-100 mb-5 md:mb-3 text-sm md:text-base'>{locale === "fa" ? "طراح UI UX " : "UI UX Designer"}</span>
                          <div className='flex'>
                            <div className='relative w-1/3'>
                              <figure className='absolute right-0 top-1/2  transform -translate-x-1/2 -translate-y-1/2'>
                                <Image src="/profile/prof3.png" alt='profile' width={40} height={40} />
                              </figure>
                            </div>
                            <span className='text-w-90 md:text-sm text-xs'>Jessica Lee</span>
                          </div>
                        </div>
                        <div className='w-full md:w-1/3 rounded-xl p-3 border-d-60 md:border'>
                          <span className='block text-w-100 mb-5 md:mb-3 text-sm md:text-base'>{locale === "fa" ? "مدیریت پروژه" : "Project Manager"}</span>
                          <div className='flex'>
                            <div className='relative w-1/3'>
                              <figure className='absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <Image src="/profile/prof4.png" alt='profile' width={40} height={40} />
                              </figure>
                            </div>
                            <span className='text-w-90 md:text-sm text-xs'>Michael Williams</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='border items-center border-d-60 p-3 md:p-6 rounded-xl'>
                      <span className='text-w-100'>{locale === "fa" ? "روش های مورد استفاده" : "Methods Used"}</span>
                      <div className='grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-10 mt-4 items-center justify-between p-4 md:p-6 border border-d-60 rounded-xl'>
                        <span className='text-center p-3 rounded-full border text-w-90 md:text-sm border-d-60 text-xs'>Agile Development</span>
                        <span className='text-center p-3 rounded-full border text-w-90 md:text-sm border-d-60 text-xs'>User Testing</span>
                        <span className='text-center p-3 rounded-full border text-w-90 md:text-sm border-d-60 text-xs'>A/B Testing</span>
                      </div>
                    </div> */}
                  </div>
                </ProjectCards>
              ))}
            </div>
            <PaginationSeo meta={meta} />
          </>
          : null}
        <HeaderTitle firstLight light={p("section-3.header.nameDark")} dark={p("section-3.header.nameLight")} text={p("section-3.header.text")} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-12' >
          {p.raw("section-3.array").map((row: any, index: number) => (
            <div key={index} className='md:p-8 p-4 rounded-xl flex flex-col gap-4 md:gap-7' style={{ backgroundImage: "linear-gradient(31deg, rgb(15 15 15 / 0%), rgb(62 62 62 / 7%))" }}>
              <div className='flex items-center gap-3'>
                <ImageCustom figureClass='w-auto' src={row.image} width={40} height={40} alt={"icon"} />
                <h3 className='text-w-100 font-semibold md:text-xl'>{row.name}</h3>
              </div>
              <div className='p-4 md:p-6 border border-d-60 rounded-xl justify-between flex flex-col md:flex-row items-center'>
                <div className='flex flex-col gap-1 items-start md:w-auto w-full'>
                  <span className='text-w-50 text-sm'>{locale === "fa" ? "دسته" : 'Category'}</span>
                  <span className='text-w-90'>{row.cat}</span>
                </div>
                <div className='w-[1px] border border-d-60 h-full bg-d-60'></div>
                <div className='flex flex-col gap-1 items-start md:w-auto w-full'>
                  <span className='text-w-50 text-sm'>{locale === "fa" ? "زمان تکمیل" : "Expected Completion"}</span>
                  <span className='text-w-90'>{row.date}</span>
                </div>
              </div>
              <div className='p-4 md:p-6 border border-d-60 rounded-xl'>
                <span className='text-w-90'>{locale === "fa" ? "توضیحات پروژه " : "Project Description"}</span>
                <p className='text-w-50 mt-4'>{row.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
