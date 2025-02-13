import { Link } from '@/i18n/routing';
import React from 'react'

export default function PaginationSeo() {
    const pages = 20
    const current = 2
    const startPage = Math.max(1, Number(pages) - 2);
    const endPage = Math.min(pages, Number(pages) + 2);
    return (
        <div className="w-full mx-auto md:w-7/12 flex gap-2 sm:gap-2 items-center justify-center mt-12 md:mt-14">
            {Number(current) > 3 && (
                <>
                    <Link aria-label={"1"} href={`?page=${1}`}>
                        <button title={'1'} type="button" className={"w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md !bg-[#77adff] dark:!bg-slate-700 dark:shadow-full-dark dark:hover:shadow-none"}>
                            <span className="text-gray-50 pt-1">
                                1
                            </span>
                        </button>
                    </Link>
                    <span>...</span>
                </>
            )}
            {pages
                ? Array.from(
                    { length: Math.min(11, endPage - startPage + 1) },
                    (_, i) => startPage + i
                ).map((i) => {
                    return i === Number(current) ?
                        <button aria-label={`${i}`} title={`${i}`} type="button" key={i} disabled={Number(current) === i} className={`w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md ${i === Number(current) ? "!bg-slate-400 dark:!bg-zinc-800/80" : "!bg-[#77adff] dark:!bg-slate-700 dark:shadow-full-dark dark:hover:shadow-none"}`}>
                            <span className="text-gray-50 pt-1">
                                {i}
                            </span>
                        </button>
                        :
                        <Link aria-label={`${i}`} href={`page=${i}`} key={i}>
                            <button title={`${i}`} type="button" className={"w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md !bg-[#77adff] dark:!bg-slate-700 dark:shadow-full-dark dark:hover:shadow-none"}>
                                <span className="text-gray-50 pt-1">
                                    {i}
                                </span>
                            </button>
                        </Link>
                })
                : null}
            {pages - Number(current) > 2 && (
                <>
                    <span>...</span>
                    <Link aria-label={`${pages}`} href={`?page=${pages}`}>
                        <button title={`${pages}`} type="button" className={"w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md !bg-[#77adff] dark:!bg-slate-700 dark:shadow-full-dark dark:hover:shadow-none"}>
                            <span className="text-gray-50 pt-1">
                                {pages}
                            </span>
                        </button>
                    </Link>
                </>
            )}
        </div>
    )
}
