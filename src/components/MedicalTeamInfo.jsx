import React, {useState} from 'react'

const MedicalTeamInfo = () => {

  const [members, setMembers] = useState([{ name: '', role: '' }]);
  const [volunteers, setVolunteers] = useState([{ name: '', role: '' }]);

  const addMember = () => {
    setMembers([...members, { name: '', role: '' }]);
  };

  const addVolunteer = () => {
    setVolunteers([...volunteers, { name: '', role: '' }]);
  };

  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === 'member') {
      const updatedMembers = [...members];
      updatedMembers[index][name] = value;
      setMembers(updatedMembers);
    } else if (type === 'volunteer') {
      const updatedVolunteers = [...volunteers];
      updatedVolunteers[index][name] = value;
      setVolunteers(updatedVolunteers);
    }
  };

  return (
    <div>
        <div className='ml-10 right-0  w-2/3 '>
    <h1 className='text-customMaroon mx-10  text-7xl font-bold  leading-snug tracking-normal text-shadow-md'>Medical Team Information</h1>
    <h1 className='text-black  mx-10 font-semibold'>Information of all the members available at the time of donation camp!</h1>
    </div>

    <div className="max-w-3xl mx-auto p-8 bg-red-50 rounded-md ">
      <form>
        {/* Medical Team/Agency Name */}
        <div className="mb-4">
          <label className="block text-customTextColor font-bold mb-2">Medical Team/Agency Name*</label>
          <input
            type="text"
            placeholder="Name of the Medical Team or Agency Name"
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Member Inputs */}
        {members.map((member, index) => (
            
          <div key={index} className="flex items-center space-x-4 my-4">
            <h1 className='block flex-none font-medium p-2 text-customTextColor '> Member {index+1}*</h1>
            <div className="w-1/6">
              <select
                name="title"
                className="w-full px-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                <option>Mr</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>
            <div className="w-1/2">
            
              <input
                type="text"
                name="name"
                placeholder={`Full Name of Member ${index + 1}`}
                value={member.name}
                onChange={(e) => handleInputChange(e, index, 'member')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="role"
                placeholder={`Role of Member ${index + 1}`}
                value={member.role}
                onChange={(e) => handleInputChange(e, index, 'member')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addMember}
          className="px-4  py-2 mt-2 mb-4 bg-customBtn text-white  rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Add More +
        </button>

        {/* Volunteer Inputs */}
        {volunteers.map((volunteer, index) => (
            
          <div key={index} className="flex items-center space-x-4  mb-4">
            <h1 className='block flex-none font-medium p-2 text-customTextColor '>Name of Volunteer {index+1}*</h1>
            <div className="w-1/6">
              <select
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                <option>Mr</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                placeholder={`Full Name of Volunteer ${index + 1}`}
                value={volunteer.name}
                onChange={(e) => handleInputChange(e, index, 'volunteer')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="role"
                placeholder={`Role of Volunteer ${index + 1}`}
                value={volunteer.role}
                onChange={(e) => handleInputChange(e, index, 'volunteer')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addVolunteer}
          className="px-4 py-2 mt-2 bg-customBtn text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Add More +
        </button>
      </form>
      <div className="border-t-2 border-dashed  border-customRed min-w-full h-1 py-5 mt-14"></div>
    </div>
    </div>
  )
}

export default MedicalTeamInfo