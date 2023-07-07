import Image from "next/image";
import React from "react";
function SectionFour () {
    return(
        <div className={'bg-[#FEEDBC]'}>
          <div className={'container mx-auto min-h-[1000px] sm:min-h-[1250px]  lg:min-h-[600px] bg-[#F9B800] [clip-path:polygon(0_0%,100%_0,100%_90%,0%_100%)] lg:[clip-path:polygon(0_0%,100%_0,100%_80%,0%_100%)] px-14 px-5 md:px-14 '}>
            <div className={'block lg:flex items-center justify-between'}>
                <div className={'w-full lg:w-2/5 order-first md:order-last'}>
                    <Image src={'/sectionFour.svg'} alt={'sectionTwo'} width={714} height={714}/>
                </div>
                <div className={'w-full lg:w-3/5 pl-0 lg:pl-24'}>
                    <div className={'text-3xl lg:text-5xl font-bold mt-8 lg:mt-0 mb-4'}>Contact Us</div>
                    <div className={'mb-10 text-xl'}>Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. </div>
                    <div className={'w-full lg:w-1/2 py-4 px-5 flex bg-white rounded-full gap-1 items-center'}>
                        <div><Image src={'/location.svg'} alt={'location'} width={32} height={32}/></div>
                        <div>Lorem ipsum dolor sit amet </div>
                    </div>
                    <div className={'mt-5 w-full lg:w-1/2 py-4 px-5 flex bg-white rounded-full gap-1 items-center'}>
                        <div><Image src={'/calling.svg'} alt={'location'} width={32} height={32}/></div>
                        <div>+98 (021) 12345678</div>
                    </div>
                    <div className={'mt-5 w-full lg:w-1/2 py-4 px-5 flex bg-white rounded-full gap-1 items-center'}>
                        <div><Image src={'/global.svg'} alt={'location'} width={32} height={32}/></div>
                        <div>hdgdg@djcdjki1254</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            )
}
export default  SectionFour