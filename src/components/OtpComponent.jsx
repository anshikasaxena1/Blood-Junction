import React from 'react';
import OtpInput from 'react-otp-input';

const OtpComponent = () => {
  const [otp, setOtp] = React.useState('');

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      containerStyle="flex space-x-2"
      inputStyle="w-8 h-8 text-center text-lg font-semibold text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      isInputNum
    />
  );
};

export default OtpComponent;
