import React, {useState} from 'react';
import arrow_downward from "../assets/arrow_downward_alt (1).png"
import { Link } from 'react-router-dom';
const EnterOTP = () => {

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (element, index) => {
    let value = element.value;
    if (/^\d*$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (element, index) => {
    if (element.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };


  return (
    <div>
    <div className=' flex items-center justify-center min-h-screen bg-black' >
      <div className='  h-96 w-80 border-2 border-gray-600 rounded-2xl centered-div bg-customWhite  p-4 ' >
      <Link to={"/home"}>
        <button className='mt-4'>
            <img src={arrow_downward} alt="backward_arrow" className='px-4'></img>
            
        </button>
        </Link>
          <h1 className='text-customMaroon mx-10 text-7xl font-bold  leading-snug tracking-normal text-shadow-sm'>Enter OTP</h1>
          <div style={{ display: 'flex', gap: '8px' }} className='flex justify-center ' >
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: '4rem',
            height: '4rem',
            textAlign: 'center',
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#780000',
            border: '2px solid #cbd5e0',
            borderRadius: '0.375rem',
            outline: 'none',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4299e1')}
          onBlur={(e) => (e.target.style.borderColor = '#cbd5e0')}
        />
      ))}
      
    </div>
    <h1 className='text-customTextColor flex justify-center'>Enter OTP received on +91 8178165847</h1>
    <div className='flex justify-center'>
    <button className=' border-2 mt-10 border-none  px-12 py-2  rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >Submit</button>

    </div>
    <h1 className='text-customTextColor flex justify-center '>Didn’t receive an OTP? <span className='font-semibold'>RESEND OTP</span></h1>
      </div>
    </div>
    </div>
  );
}

export default EnterOTP;
