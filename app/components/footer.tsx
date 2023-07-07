import Image from "next/image";
import React from "react";
function Footer () {
    return(
        <div className={'container mx-auto min-h-[380px] sm:min-h-[1450px] lg:min-h-[400px] bg-[#FEEDBC] [clip-path:polygon(0_0%,100%_0,100%_90%,0%_100%)] lg:[clip-path:polygon(0_0%,100%_0,100%_80%,0%_100%)] px-14 px-5 md:px-14 '}>
            <div className={'block md:flex items-center justify-between'}>
                <div className={'mt-10 w-full lg:w-3/5 pl-0 md:pl-24 text-3xl lg:text-5xl font-bold !leading-tight'}>
                    Vulputate et pulvinar ethre Suspendisse tellus consecteur
                </div>
                <div className={'block lg:flex w-full lg:w-2/5 justify-center lg:justify-end'}>
                    <div>
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
            <div className={'px-4 lg:px-20 block lg:flex justify-between mt-8 lg:mt-20 pt-10 border-t border-[#262626] w-full'}>
                <div className={'text-base lg:text-xl'}>Privacy Policy | Terms and Conditions</div>
                <div className={'text-base lg:text-xl'}>Copyright © 2022 Lorem Ipsum.</div>
            </div>
        </div>
    )

}
export default  Footer