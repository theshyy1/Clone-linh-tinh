interface IProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const StepsFormContainer = ({ currentStep, setCurrentStep }: IProps) => {
  return (
    <ul className="flex justify-between px-6 py-10">
      <div
        onClick={() => setCurrentStep(1)}
        className="flex items-center relative cursor-pointer"
      >
        <div
          className={`w-10 h-10 flex items-center justify-center ${currentStep === 1 ? "bg-blue-600 text-white" : "bg-gray-200"} rounded-full z-10`}
        >
          1
        </div>
        <span className="text-lg font-medium ml-2">Profile</span>
        <div className="absolute top-1/2 left-[115%] w-[12rem] h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
      </div>

      <div
        onClick={() => setCurrentStep(2)}
        className="flex items-center relative cursor-pointer ml-16"
      >
        <div
          className={`w-10 h-10 flex items-center justify-center ${currentStep === 2 ? "bg-blue-600 text-white" : "bg-gray-200"} rounded-full z-10`}
        >
          2
        </div>
        <span className="textư-lg font-medium ml-2">Billing Address</span>
        <div className="absolute top-1/2 left-[115%] w-[12rem] h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
      </div>
      <div
        onClick={() => setCurrentStep(3)}
        className="flex items-center relative cursor-pointer ml-16"
      >
        <div
          className={`w-10 h-10 flex items-center justify-center ${currentStep === 3 ? "bg-blue-600 text-white" : "bg-gray-200"} rounded-full z-10`}
        >
          3
        </div>
        <span className="text-lg font-medium ml-2">Confirmation</span>
      </div>
    </ul>
  );
};
