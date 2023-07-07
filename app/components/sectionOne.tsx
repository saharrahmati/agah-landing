"use client"
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/sectionOne.json";
import textData from '../../public/text.json'
function SectionOne () {
    return(
        <div className={'bg-[#F9B800]'}>
            <div className={'container mx-auto min-h-[1400px] sm:min-h-[1570px]  lg:min-h-[1000px] bg-[#FEEDBC] [clip-path:polygon(0_0%,100%_0,100%_90%,0%_100%)] lg:[clip-path:polygon(0_0%,100%_0,100%_80%,0%_100%)] px-5 md:px-14 pt-16'}>
            <div className={'relative bg-white h-24 mb-3 lg:mb-28 rounded-full flex items-center px-8 justify-center'}>
                <div>
                    <Image src={'/logo.svg'} alt={'logo'} width={127} height={36}/>
                </div>
                <div className={'absolute right-14'}>
                    <Image src={'/flag.svg'} alt={'logo'} width={35} height={24}/>
                </div>
            </div>
            <div className={'block lg:flex justify-between'}>
                <div className={'w-full lg:w-2/5 order-first md:order-last'}>
                    <Lottie
                        animationData={animationData}
                        height={714}
                        width={714}
                    />
                </div>
                <div className={'w-full lg:w-3/5 pl-0 lg:pl-24 mb-10'}>
                    <div className={'text-[#F9B800] text-base lg:text-3xl font-bold flex-nowrap mb-2'}>
                        Risus Praesent Vulputate.
                    </div>
                    <div className={'flex text-[#262626] text-4xl md:text-7xl font-bold'}>
                        <Lottie
                            animationData={textData}
                        />
                    </div>
                    <div className="flex mt-14 flex-wrap gap-3.5">
                        <div className={'bg-white rounded-full px-4 lg:px-8 py-3.5 py-3.5 flex items-center gap-1'}>
                            <div><Image src={'/iconTick.svg'} alt={'tick'} width={30} height={30}/></div>
                            <div className={'text-xl'}>Cursus Integer</div>
                        </div>
                        <div className={'bg-white rounded-full px-4 lg:px-8 py-3.5 flex items-center gap-1'}>
                            <div><Image src={'/iconTick.svg'} alt={'tick'} width={30} height={30}/></div>
                           <div className={'text-xl'}>Integer Consequat </div>
                        </div>
                        <div className={'bg-white rounded-full px-4 lg:px-8 py-3.5 flex items-center gap-1'}>
                            <div><Image src={'/iconTick.svg'} alt={'tick'} width={30} height={30}/></div>
                            <div className={'text-xl'}>Tellus Euismod Pellentesque</div>
                        </div>
                        <div className={'bg-white rounded-full px-4 lg:px-8 py-3.5 flex items-center gap-1'}>
                            <div><Image src={'/iconTick.svg'} alt={'tick'} width={30} height={30}/></div>
                            <div className={'text-xl'}>Aliquot Tristique</div>
                        </div>
                        <div className={'bg-white rounded-full px-4 lg:px-8 py-3.5 flex items-center gap-1'}>
                            <div><Image src={'/iconTick.svg'} alt={'tick'} width={30} height={30}/></div>
                           <div className={'text-xl'}> Pellentesque Tempus</div>
                        </div>
                        <div className={'bg-white rounded-full px-4 lg:px-8 py-3.5 flex items-center gap-1'}>
                            <div><Image src={'/iconTick.svg'} alt={'tick'} width={30} height={30}/></div>
                           <div className={'text-xl'}> Mauris Fermentum Praesent</div>
                        </div>
                    </div>
                    <div className={'relative group md:w-80 w-full'}>
                        <div className={'transition ease-in-out delay-150 absolute opacity-0 group-hover:opacity-100 top-[40%] left-[2%] bg-[#262626] rounded-full w-full md:w-[315px] h-12'}></div>
                        <div className={'transition ease-in-out delay-150 absolute border-[#262626] border-0 group-hover:border relative z-50 flex items-center justify-between mt-11 bg-[#F9B800] rounded-full px-10 py-3.5 text-white w-full md:w-80'}>
                            <div className={'text-[#262626] text-2xl font-bold'}>Lorem Ipsum</div>
                            <div>
                                <Image className={'transition ease-in-out delay-150 rotate-0 group-hover:rotate-90'} src={'/iconLeft.svg'} alt={'iconLeft'} height={30} width={30}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            )

}

export default  SectionOne