import React from 'react'

const LogisticsDet = () => {
  return (
    <div>
    <div className='ml-10 right-0  w-2/3 '>
    <h1 className='text-customMaroon mx-10  text-7xl font-bold  leading-snug tracking-normal text-shadow-md'>Logistics and Facilities</h1>
    <h1 className='text-black  mx-10 font-semibold'>Make sure to have all the necessary facilities check before hosting the camp</h1>
    </div>
    <div className="max-w-xl mx-auto p-8 bg-customWhite">
      <h2 className="text-xl font-bold mb-4 text-customTextColor">Facility Availability</h2>
      <form>
        {/* Question with Yes/No Options */}
        {['Medical Support Available?', 'Refreshments for Donors Available?', 'Parking Facilities Available?'].map((question, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <label className="font-medium text-customTextColor">{question}</label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`yes-${index}`}
                  className="form-radio text-red-600"
                />
                <label htmlFor={`yes-${index}`} className="ml-2 text-customTextColor">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`no-${index}`}
                  className="form-radio ml-2 text-red-600"
                />
                <label htmlFor={`no-${index}`} className="ml-2 text-customTextColor">No</label>
              </div>
            </div>
          </div>
        ))}

        {/* Input Fields */}
        <div className="mb-4">
          <label htmlFor="beds" className="block font-medium mb-1 text-customTextColor">
            Number of Beds (In numeric value)*
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            placeholder="Exact Number of Beds in Numbers i.e. 1, 100 or 10000"
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="volunteers" className="block font-medium mb-1 text-customTextColor">
            Number of Volunteers (In numeric value)*
          </label>
          <input
            type="number"
            id="volunteers"
            name="volunteers"
            placeholder="Exact Number of Volunteers in Numbers i.e. 1, 100 or 10000"
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        
      </form>
      <div className="border-t-2 border-dashed  border-customRed min-w-full h-1 py-5 mt-14"></div>
    </div>
    </div>
  )
}

export default LogisticsDet