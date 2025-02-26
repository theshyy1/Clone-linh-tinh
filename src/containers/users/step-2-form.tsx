import Icon from "@mdi/react";
import { Button } from "../../components/common/button";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";
import { FormUserValues } from "../../models/user-modal";
import { FormikErrors, FormikTouched } from "formik";

interface IProps {
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: FormUserValues;
  errors: FormikErrors<FormUserValues>;
  touched: FormikTouched<FormUserValues>;
}
export const Step2Form = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  errors,
  touched,
}: IProps) => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl border">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-6 py-6 border-b border-gray-400">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="mt-1 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Country"
              name="location.country"
              value={values.location.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {touched.location?.country && errors.location?.country && (
              <span className="text-red-600 text-sm">
                {errors.location?.country}
              </span>
            )}
            <input
              type="text"
              placeholder="City"
              name="location.city"
              value={values.location.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {touched.location?.city && errors.location?.city && (
              <span className="text-red-600 text-sm">
                {errors.location?.city}
              </span>
            )}
          </div>

          <label className="text-sm font-medium text-gray-700">
            Address line 1
          </label>
          <div className="">
            <input
              type="text"
              placeholder="Hiep Loc street"
              name="location.address"
              value={values.location.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.location?.address && touched.location?.address && (
              <span className="text-red-600 text-sm">
                {errors.location?.address}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center pt-6">
          <Button
            onClick={prevStep}
            icon={<Icon path={mdiChevronLeft} size={1} />}
            className="px-6 py-2 text-blue-600 rounded-md hover:bg-blue-700 hover:text-white flex-row-reverse"
          >
            Previous
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            icon={<Icon path={mdiChevronRight} size={1} />}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
