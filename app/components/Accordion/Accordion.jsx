"use client"
import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';
 const data= [
     {
         title:"Quam vehicula faucibus amet lorem. ",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 1
     },
     {
         title:"Pellentesque tempus sed phasellus vel. ",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 2
     },
     {
         title:"Mauris fermentum praesent tellus euismod pellentesque urna ac massa in. ",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 3
     },
     {
         title:"Vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. ",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 4
     },
     {
         title:"Sollicitudin ornare tempus felis nulla varius pulvinar nibh viverra ornare.",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 5
     },
     {
         title:"Consectetur nibh velit magna consectetur leo.",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 6
     },
     {
         title:"Quisque porttitor vitae vel amet neque scelerisque mattis.",
         description:"Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.   \n",
         index: 7
     }
 ]
const Accordion = () => {

  return (
      <div className='flex flex-col justify-center items-center'>
          {data.map((item)=>{
              return <AccordionLayout
                  key={item.index}
                  title={item.title}
                  index={item.index}
              >
                  <div className={'text-lg lg:text-3xl'}>{item.description}</div>
              </AccordionLayout>
          })}
      </div>
  );
};

export default Accordion;
