import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/common/button";
import { FormUserValues } from "../../models/user-modal";

interface IProps {
  prevStep: () => void;
  values: FormUserValues;
}
export const Step3Form = ({ prevStep, values }: IProps) => {
  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-white shadow-md rounded-xl border ">
      <div className="space-y-6 w-full mx-auto border-b border-gray-400 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Full name:
          </label>
          <div className="text-gray-900">{values.name}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Email:
          </label>
          <div className="text-gray-900">{values.email}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Phone:
          </label>
          <div className="text-gray-900">{values.phone || "-"}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Department:
          </label>
          <div className="text-gray-900">{values.department || "-"}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Account type:
          </label>
          <div className="text-gray-900">{values.account_type}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Country:
          </label>
          <div className="text-gray-900">{values.location.country}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            City:
          </label>
          <div className="text-gray-900">{values.location.city}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4 items-center">
          <label className="text-sm font-medium text-gray-400 text-right">
            Address:
          </label>
          <div className="text-gray-900">{values.location.address || "-"}</div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <Button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 text-blue-600 hover:text-blue-800 flex-row-reverse"
          icon={<Icon path={mdiChevronLeft} size={1} />}
        >
          Previous step
        </Button>
        <div className="flex items-center space-x-4">
          <Button
            type="button"
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Save in drafts
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add user
          </Button>
        </div>
      </div>
    </div>
  );
};
