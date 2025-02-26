import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/common/button";
import { FormUserValues } from "../../models/user-modal";
import { FormikErrors, FormikTouched } from "formik";

interface IProps {
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: FormUserValues;
  errors: FormikErrors<FormUserValues>;
  touched: FormikTouched<FormUserValues>;
}

export const Step1Form = ({
  nextStep,
  handleChange,
  values,
  errors,
  touched,
}: IProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md border rounded-xl">
      <div className="py-6 border-b border-gray-400">
        <div className="grid grid-cols-[1fr,3fr] py-3 gap-6">
          <label className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <div className="mt-1 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              value={values.name}
              name="name"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && touched.name && (
              <span className="text-red-600 text-sm">{errors.name}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[1fr,3fr] py-3 gap-6">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="">
            <input
              type="email"
              placeholder="clarice@site.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && touched.email && (
              <span className="text-red-600 text-sm">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[1fr,3fr] py-3 gap-6">
          <label className="text-sm font-medium text-gray-700">
            Phone (Optional)
          </label>
          <div className="">
            <input
              type="tel"
              placeholder="+x(xxx)xxx-xx-xx"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phone && touched.phone && (
              <span className="text-red-600 text-sm">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[1fr,3fr] py-3 gap-6">
          <label className="text-sm font-medium text-gray-700">
            Department
          </label>
          <div className="">
            <input
              type="text"
              placeholder="Human resources"
              name="department"
              value={values.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.department && touched.department && (
              <span className="text-red-600 text-sm">{errors.department}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[1fr,3fr] py-3 gap-6">
          <label className="text-sm font-medium text-gray-700">Position</label>
          <div className="">
            <input
              type="text"
              placeholder="...Director"
              name="position"
              onChange={handleChange}
              value={values.position}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.position && touched.position && (
              <span className="text-red-600 text-sm">{errors.position}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[1fr,3fr] py-3 gap-6">
          <label className="text-sm font-medium text-gray-700">
            Account type
          </label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="account_type"
                value="Individual"
                defaultChecked={true}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Individual</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="account_type"
                value="Company"
                onChange={handleChange}
                checked={values.account_type === "Company"}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Company</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-5">
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
  );
};
