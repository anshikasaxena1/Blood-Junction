import React from 'react'

const SafetyAndComp = () => {
  return (
    <div>
        
    <div className='ml-10 right-0  w-2/3 '>
    <h1 className='text-customMaroon mx-10  text-7xl font-bold  leading-snug tracking-normal text-shadow-md'>Safety and Compliance</h1>
    <h1 className='text-black  mx-10 font-semibold'>Safety measures and proper guidelines to follow during the donation camp</h1>
    </div>
    <form className='p-6 mt-6 mx-4 '>
    {['Compliant with local health regulations?', 'COVID-19 safety measures in place', 'Emergency plan in place?','Trained medical personnel on-site?','Protocols for emergencies/adverse reactions?','Do you have necessary permits and approvals from relevant authorities?'].map((question, index) => (
          <div key={index} className="flex items-center justify-between p-2 mb-4">
            <label className="font-medium text-customTextColor">{question}</label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name={`question-${index}`}
                  id={`yes-${index}`}
                  className="form-radio shadow-md text-red-600"
                />
                <label htmlFor={`yes-${index}`} className="mx-2 text-customTextColor">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name={`question-${index}`}
                  id={`yes-${index}`}
                  className="form-radio ml-2 border- shadow-md text-red-600"
                />
                <label htmlFor={`yes-${index}`} className="ml-2 text-customTextColor">No</label>
              </div>
              
            </div>
          </div>
        ))}
    </form>
    <div className="border-t-2 border-dashed  border-customRed min-w-full h-1 py-5 mt-14"></div>
    </div>
  )
}

export default SafetyAndComp