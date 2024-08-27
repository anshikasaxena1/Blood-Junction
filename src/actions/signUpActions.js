import { signupUser } from '../reducers/signUpReducers';

export const submitSignup = (formData) => {
  return async (dispatch) => {
    try {
      const userData = await processFormData(formData);
      dispatch(signupUser(userData));
    } catch (error) {
      console.error('Failed to signup:', error);
    }
  };
};

const processFormData = (formData) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        profilePicture: base64String,
        dateOfBirth: formData.get('dateOfBirth'), // Extracting date of birth
        gender: formData.get('gender'),
        bloodGroup: formData.get('bloodGroup'),
        address: formData.get('address'),
        state: formData.get('state'),
        country: formData.get('country'),
        pincode: formData.get('pincode'),
      };
      resolve(userData);
    };

    const file = formData.get('profilePicture');
    if (file) {
      reader.readAsDataURL(file);
    } else {
      resolve({});
    }
  });
};
