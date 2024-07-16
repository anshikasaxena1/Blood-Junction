# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



    <div className='flex-grow p-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
      <div className='   mx-auto my-0'>
      
       
        <Firsthalf/>
       
       
        <div className='mt-14 mx-28 '>
        <span className=' text-customMaroon font-bold text-7xl leading-snug tracking-tight text-shadow-sm'>Eligibility Of Blood Donation</span>
        </div>
        <div className='container  flex mx-24 mt-16 justify-center items-center'>
          <div>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl text-center text-customTextColor '><span className='mx-4'>Age between</span><br/> 18 and 60 years</span>
          </div>
          <div>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl tracking-normal text-center text-customTextColor '><span>Haemoglobin</span><br /><span className='mx-2 leading-none'>not less than</span> <br/> <span className='mx-7'>12.5 g/Dl</span></span>
          </div>
          <div>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl  text-customTextColor '>
            Pulse between <br/> <span className='mx-4'>50 and 100/</span><br/>
            <snap className='mx-9'>minute</snap>
          </span>
          </div>
          <div>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl text-center text-customTextColor '>Blood Pressure Systolic<br/> <span className='mx-5'>100-180 mm Hg &</span><br/><span>Diastolic 50-100 mm Hg</span></span>
          </div>
        </div>
        <div className='flex justify-center items-center mt-20 mx-auto'>
        <button className='border-2 border-none  px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >See all info</button>
        </div>
      </div>
      <div className='mt-36 mx-16 ml-52'>
        <span className=' text-customMaroon font-bold text-7xl leading-snug tracking-tight text-shadow-sm'>Benefits of Blood Donation</span>

        <div className='mt-24 grid grid-cols-6 gap-2'>
          <div className='col-span-1'>
          <img src={volunteer_activism} alt='volunteeractivism' className=' basis-1/6 border-4 p-10 bg-white rounded-extra-large shadow-2xl '/>
          </div>
          <div className='ml-10 col-span-4 '>
          <h1 className=' text-4xl font-bold text-customMaroon py-4 text-shadow-md '>Saving Lives</h1>
          <span className='text-customTextColor font-18px text-xl font-semibold tracking-tighter leading-none '>One of the most important benefits of blood donation is the potential to save lives. A single donation can help multiple patients, 
            including those undergoing surgeries, cancer treatments, or suffering from traumatic injuries. Donated blood is essential for those in need
             of transfusions, and each donation can significantly improve or even save a life.</span>
             </div>
        </div>
        
        <div className='mt-16 grid grid-cols-6 gap-2'>
          
          <div className='ml-10 col-span-4 mx-10 flex flex-col items-end '>
          <h1 className=' text-4xl font-bold text-customMaroon py-4 text-shadow-md float-end '>Health Benefits for Donors</h1>
          <span className='text-customTextColor font-18px text-xl font-semibold tracking-tighter leading-none text-right  '>Donating blood can have health benefits for the donor. Regular blood donation 
            can help maintain healthy iron levels in the body, reducing the risk of hemochromatosis, a condition caused by excess iron. Additionally, some studies suggest 
            that regular blood donation may be linked to a lower risk of certain health issues, such as heart disease and stroke.</span>
             </div>
             <div className='col-span-1 '>
          <img src={cardiology} alt='cardiology' className=' basis-1/6 border-4 p-10 bg-white rounded-extra-large shadow-2xl '/>
          </div>
        </div>
        <div className='mt-16 grid grid-cols-6 gap-2'>
          <div className='col-span-1'>
          <img src={readiness_score} alt='readiness_score' className=' basis-1/6 border-4 p-10 bg-white rounded-extra-large shadow-2xl '/>
          </div>
          <div className='ml-10 col-span-4 '>
          <h1 className=' text-4xl font-bold text-customMaroon py-4 text-shadow-md '>Free Health Screening</h1>
          <span className='text-customTextColor font-18px text-xl font-semibold tracking-tighter leading-none '>Blood donors receive a mini-physical and health screening before donating. This 
            includes checking vital signs like blood pressure, pulse, and hemoglobin levels. Blood is also tested for infectious diseases after 
            donation. This process can help donors become aware of any underlying health issues they may not have known about.</span>
             </div>
        </div>
        <div className='mt-16 grid grid-cols-6 gap-2'>
          
          <div className='ml-10 mx-10 col-span-4 flex flex-col items-end  '>
          <h1 className=' text-4xl font-bold text-customMaroon py-4 text-shadow-md '>Promoting Community and Altruism</h1>
          <span className='text-customTextColor font-18px text-xl font-semibold tracking-tighter leading-none text-right '>Donating blood fosters a sense of community and altruism. 
            It provides an opportunity for individuals to contribute to the well-being of others and engage in a selfless act. This can enhance
             social connections and promote a positive sense of personal fulfillment, knowing that one's actions are making a tangible difference in the lives of others.</span>
             
             </div>
             <div className='col-span-1'>
          <img src={diversity} alt='diversity' className=' basis-1/6 border-4 p-10 bg-white rounded-extra-large shadow-2xl '/>
          </div>
        </div>
        <div className='flex justify-center items-center mt-20 mx-auto'>
        <button className='border-2 border-none  px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >See all info</button>
        </div>
        </div>
        
        



    </div>

import cardio_load from "../assets/cardio_load.png"
import cardiology from "../assets/cardiology.png"
import diversity from "../assets/diversity_1.png"
import readiness_score from "../assets/readiness_score.png"
import volunteer_activism from "../assets/volunteer_activism.png"


         <div className='flex'>
        <span className='  text-customMaroon  text-7xl font-bold m-1 leading-snug tracking-normal text-shadow-sm'>Maintain a Healthy lifestyle, Donate Blood!</span>
        <span className='flex text-customTextColor font-semibold  font-18px text-2xl tracking-normal'>Did you know that people who donate blood are 88% less likely to suffer a heart attack and 33% <br/>less likely to acquire any type of cardiovascular disease.
         # When you donate blood, it removes 225 <br/>to 250 milligrams of iron from your body, hence reducing the
           risk of heart disease.
        </span>
        <span className='flex text-customTextColor font-semibold  font-18px text-2xl tracking-normal mx-72'>Be a HERO.</span>
        <div className='container flex mx-auto my-16 mt-14'>
        <Link to="">
        <button className='border-2 border-none m-6 ml-10 px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl'>
          Get Blood
        </button>
        </Link>
        <button className='border-2 border-none m-6 ml-2 px-4 py-3 rounded-full shadow-md bg-white text-customMaroon font-bold '>
          OR
        </button>
        <button className='border-2 border-none m-6 ml-10 px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl'>
          Donate Blood
        </button>
        </div>
        </div>
        <img src={drop} alt="Icon" className=" h-auto w-auto m-0 inline   absolute right-2 p-0" />

        import { Link } from 'react-router-dom'
import drop from "../assets/drop.png"


//header
<header className="bg-customWhite  ">
      <div className="container  flex flex-row my-6  ">
        <div className='basis-1/4'>
        <button className='border-2 border-none  rounded-full shadow-md shadow-red-500 '> 
          <Link to="/" className='text-customRed text-3xl font-bold'>
          <img src={icon} alt="Icon" className=" px-4 m-0 inline " />
            Bluud
          </Link>

        </button>
        </div>
        
       <div className='basis-1/2 '>
        <button className='border-2 border-none  px-3  rounded-2xl shadow-md shadow-red-500 bg-customWhiteInside justify-start'>
          
          <div className='mx-auto my-5 '>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Home</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Donate</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Need Blood</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Organise camp</Link>
          </div>
          </button>
          </div>
          <div className="basis-1/4 sm: hidden ">
          <button className="border-2 border-none p-8   rounded-full shadow-md shadow-red-500 bg-customWhite">
            <Link to="/login" className="font-medium text-2xl hover:text-gray-400">Login</Link>
          </button>
          <button className="border-2 border-none  rounded-full shadow-md shadow-red-500 bg-customWhite">
            <Link to="/signup" className="font-medium text-2xl hover:text-gray-400">Sign up</Link>
          </button>
        </div>
      </div>
    </header>