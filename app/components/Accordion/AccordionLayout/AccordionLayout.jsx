"use client"
import React, {useState} from 'react';
import Image from "next/image";


const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const [showAccordion, setShowAccordion] = useState(false)
  const handleSetIndex = (id) => {
     if(index === id) {
         setShowAccordion((prevState)=> !prevState)
     }
  }
  return (
    <>
        <div onClick={() => handleSetIndex(index)} className={`mb-6 w-full py-8 lg:py-12 px-8 lg:px-20 bg-white rounded-[60px]`}>
            <div className='flex'>
                <div className={`gap-6 justify-between w-full text-[#262626] text-xl lg:text-3xl ${showAccordion ? 'font-bold' : 'font-normal'}`}>{title}</div>
                <div className="flex items-center justify-center">
                    {showAccordion
                        ? <div><Image src={'/iconLine.svg'} alt={'icon'} width={56} height={56}/></div>
                        : <div><Image src={'/iconPlus.svg'} alt={'icon'} width={56} height={56}/></div>
                    }
                </div>
            </div>
            {showAccordion && (
                <div className={`bg-white shadow-3xl py-5 w-full`}>
                    {children}
                </div>
            )}
        </div>


    </>
  );
};

export default AccordionLayout;
