import React from 'react'
import volunteer_activism from "../assets/volunteer_activism.png"
import cardiology from "../assets/cardiology.png"
import readiness_score from "../assets/readiness_score.png"
import diversity from "../assets/diversity_1.png"
import { Link } from 'react-router-dom'
const Benefits = () => {
  return (
    <div className='mt-20'>
    <div className='inline-grid grid-cols-6 gap-4'>
        <img src={volunteer_activism} alt='volunteer_activism' className='col-span-1 border-2 rounded-extra-large shadow-md p-4 m-4'></img>
        <div className='col-start-2 col-span-6'>
            <h1 className='font-bold  text-customMaroon text-4xl text-shadow-md py-3  '>Saving lives</h1>
            <p className='text-customTextColor text-lg  leading-tight'>One of the most important benefits of blood donation is the potential to save lives. A single donation can help multiple
                 patients, including those undergoing surgeries, cancer treatments, or suffering from traumatic injuries. Donated blood
                  is essential for those in need of transfusions, and each donation can significantly improve or even save a life.</p>
        </div>
        
        <div className=' col-span-5 '>
            <h1 className='font-bold  text-customMaroon text-4xl text-shadow-md py-3 text-end  '>Health Benefits for Donors</h1>
            <p className='text-end text-customTextColor text-lg  leading-tight'><span class="ml-8"></span>Donating blood can have health benefits for the donor
                . Regular blood donation can help maintain healthy iron levels in the body, reducing the risk of hemochromatosis, a con
                dition caused by excess iron. Additionally, some studies suggest that regular blood donation may be linked to a lower 
                risk of certain health issues, such as heart disease and stroke.</p>
        </div>
        <img src={cardiology} alt='cardiology' className='col-start-6 col-span-6 border-2 rounded-extra-large shadow-md p-4 m-8'></img>

        <img src={readiness_score} alt='readiness_score' className='col-span-1 border-2 rounded-extra-large shadow-md p-4 m-4'></img>
        <div className='col-start-2 col-span-6'>
            <h1 className='font-bold  text-customMaroon text-4xl text-shadow-md py-3  '>Free Health Screening</h1>
            <p className='text-customTextColor text-lg  leading-tight'>Blood donors receive a mini-physical and health screening 
                before donating. This includes checking vital signs like blood pressure, pulse, and hemoglobin levels. Blood is also
                 tested for infectious diseases after donation. This process can help donors become aware of any underlying health
                  issues they may not have known about.</p>
        </div>

        <div className=' col-span-5 '>
            <h1 className='font-bold  text-customMaroon text-4xl text-shadow-md py-3 text-end  '>Promoting Community and Altruism</h1>
            <p className='text-end text-customTextColor text-lg  leading-tight'><span class="ml-8"></span>Donating blood fosters a sense of
             community and altruism. It provides an opportunity for individuals to contribute to the well-being of others and engage in a 
             selfless act. This can enhance social connections and promote a positive sense of personal fulfillment, knowing that one's actions
              are making a tangible difference in the lives of others.</p>
        </div>
        <img src={diversity} alt='diversity' className='col-start-6 col-span-6 border-2 rounded-extra-large shadow-md p-4 m-8'></img>

       
     
        
    </div>
    <div className='flex justify-center items-center mt-14'>
      <Link 
      to="/benefits"
      >
    <button className=' border-2 border-none  px-12 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >Read more</button>
    </Link>
    </div>
    </div>
    
  )
}

export default Benefits