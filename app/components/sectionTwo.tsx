"use client"
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/sectionTwo.json";

function SectionTwo () {
    return(
        <div className={'bg-[#262626]'}>
            <div className={'container mx-auto min-h-[924px] md:min-h-[630px] lg:min-h-[560px] bg-[#F9B800] [clip-path:polygon(0_0%,100%_0,100%_90%,0%_100%)] lg:[clip-path:polygon(0_0%,100%_0,100%_80%,0%_100%)] px-14 px-5 md:px-14 '}>
                <div className={'block md:flex items-center justify-between'}>
                    <div className={'w-full lg:w-2/5 order-first md:order-last'}>
                        <Lottie
                            animationData={animationData}
                            height={714}
                            width={714}
                        />
                    </div>
                    <div className={'w-full lg:w-3/5 pl-0 lg:pl-24'}>
                    <div className={'text-[#262626] text-4xl lg:text-5xl font-bold !leading-tight'}>
                        Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
                    </div>
                    <div className={'text-[#262626] text-xl'}>
                        Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.
                    </div>
                    <div className={'relative group md:w-80 w-full'}>
                        <div className={'transition ease-in-out delay-150 absolute opacity-0 group-hover:opacity-100 top-[40%] left-[2%] bg-white rounded-full w-full md:w-[315px] h-12'}></div>
                        <div className={'transition ease-in-out delay-150 absolute border-white border-0 group-hover:border relative z-50 flex items-center justify-between mt-11 bg-[#262626] rounded-full px-10 py-3.5 text-white w-full md:w-80'}>
                            <div className={'text-white text-2xl font-bold'}>Lorem Ipsum</div>
                            <div>
                                <Image className={'transition ease-in-out delay-150 rotate-0 group-hover:rotate-90'} src={'/iconLeftWhite.svg'} alt={'iconLeft'} height={30} width={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
            )
}

export default  SectionTwo