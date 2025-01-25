import React from 'react'
type ContainerHeaderType = {
    light?: string
    dark?: string
    text?: string
    firstDark?: boolean
    bgMid?: string
}
export default function ContainerHeader({ light, dark, text, firstDark, bgMid }: ContainerHeaderType) {
    return (
        <section className="w-full relative h-96">
            {!light && !dark && !text ? null :
                <div className="absolute left-48 w-1/2 top-1/2 transform -translate-y-1/2 z-10">
                    {firstDark ?
                        <h1 className="text-5xl text-w-50 mb-4">
                            {dark} {" "}
                            <span className="text-w-100">
                                {light}
                            </span>
                        </h1>
                        :
                        <h1 className="text-5xl text-w-100 mb-4">
                            {light} {" "}
                            <span className="text-w-50">
                                {dark}
                            </span>
                        </h1>
                    }
                    <p className="text-w-50">{text}</p>
                </div>
            }
            <span className="w-1/4 bg-center absolute left-0 top-0 h-full" style={{ backgroundImage: `url(right-left.png)` }}></span>
            <span className="w-2/4 bg-center absolute bg-no-repeat bg-contain left-1/2 top-0 transform -translate-x-1/2 h-full" style={{ backgroundImage: `url(${bgMid ? bgMid : "/dot-top.png"})` }}></span>
            <span className="w-1/4 bg-center absolute right-0 top-0 h-full" style={{ backgroundImage: `url(left-right.png)` }}></span>
        </section>
    )
}
