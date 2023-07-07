import Image from "next/image";
import Accordion from "./Accordion/Accordion"
function SectionThree () {
    return(
      <div className={'bg-[#F9B800]'}>
          <div className={'container mx-auto min-h-[1600px] sm:min-h-[1450px]  lg:min-h-[2030px] bg-[#262626] [clip-path:polygon(0_0%,100%_0,100%_90%,0%_100%)] lg:[clip-path:polygon(0_0%,100%_0,100%_80%,0%_100%)] px-14 px-5 md:px-14 '}>
              <div className={'pt-20 flex justify-center text-4xl lg:text-6xl text-white'}>Phasellus a vitae iaculis magna.</div>
              <div className={'pb-10 lg:pb-20 flex justify-center text-base lg:text-3xl text-white'}>Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</div>
              <Accordion />
          </div>
      </div>
    )

}
export default  SectionThree