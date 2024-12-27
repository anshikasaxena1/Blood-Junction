import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsInfoPage = () => {
  return (
    <div className="bg-customWhite min-h-screen p-4">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-customMaroon text-3xl lg:text-5xl font-semibold leading-snug tracking-tight text-shadow-sm">
          Detailed Benefits of Blood Donation
        </h1>
      </div>

      {/* Detailed Benefits */}
      <div className="container mx-auto mt-8">
        <div className="space-y-6">
          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              1. Reduces the Risk of Heart Disease
            </h3>
            <p>
              Blood donation lowers the levels of iron in the blood, which reduces the risk of heart disease and stroke. High iron levels can lead to the development of harmful free radicals that contribute to heart disease.
            </p>
          </div>

          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              2. Aids in Weight Loss
            </h3>
            <p>
              Donating blood burns approximately 650 calories per donation. This can help with weight management as the body requires energy to regenerate the lost blood.
            </p>
          </div>

          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              3. Boosts Emotional Well-being
            </h3>
            <p>
              Donating blood triggers the release of endorphins, which are known to improve mood, reduce stress, and contribute to overall happiness. Helping others boosts your own emotional health.
            </p>
          </div>

          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              4. Provides a Sense of Accomplishment
            </h3>
            <p>
              Donating blood is a selfless act that contributes to saving lives. The sense of fulfillment and the knowledge that you’ve made a significant difference in someone’s life can have a lasting positive impact on your self-esteem.
            </p>
          </div>

          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              5. Stimulates the Production of New Blood Cells
            </h3>
            <p>
              After donating blood, the body works to replenish the lost red blood cells. This stimulates the production of new blood cells and can help maintain the body’s health and vitality.
            </p>
          </div>

          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              6. Saves Lives
            </h3>
            <p>
              Donated blood plays a vital role in saving lives. It is crucial for surgeries, trauma recovery, cancer treatments, and many other medical situations. Each donation can save up to three lives.
            </p>
          </div>

          <div className="text-customTextColor text-base lg:text-lg">
            <h3 className="text-customMaroon text-2xl lg:text-3xl font-semibold">
              7. Reduces Iron Overload
            </h3>
            <p>
              For people with iron overload disorders like hemochromatosis, blood donation can help reduce excess iron levels, which may prevent damage to vital organs.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Main Page */}
      <div className="flex justify-center items-center mt-8">
        <Link to="/">
          <button className="px-8 py-3 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-lg lg:text-xl">
            Back to Main Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BenefitsInfoPage;
