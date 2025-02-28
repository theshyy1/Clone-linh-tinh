import {
  mdiAccountGroup,
  mdiAccountOutline,
  mdiBagChecked,
  mdiCellphone,
  mdiCityVariantOutline,
  mdiGmail,
  mdiNoteMultipleOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { CustomProfileComponent } from "../../components/customs/custom-profile-component";

export const SidebarProfile = () => {
  return (
    <>
      <div className="px-4 py-6 border rounded-xl shadow-md">
        <span className="font-semibold">Complete your profile</span>
        <div className="flex items-center justify-between">
          <div className="relative w-[80%] block h-2 rounded-full bg-gray-300/50">
            <span className="absolute top-0 left-0 h-2 rounded-full bg-blue-600 w-[70%] block" />
          </div>
          <span className="text-text-light">82%</span>
        </div>
      </div>
      <div className="mt-8 sticky top-8">
        <CustomProfileComponent title={"Profile"}>
          <div className="pt-4 p-4 mb-4">
            <div className="">
              <span className="text-text-light text-xs py-3 block uppercase">
                About
              </span>
              <ul className="space-y-3">
                <li className="flex items-center space-x-4 ml-1">
                  <Icon
                    path={mdiAccountOutline}
                    size={0.8}
                    color={"text-text-light"}
                  />{" "}
                  <span className="text-sm text-black"> Ella Lauda</span>
                </li>
                <li className="flex items-center space-x-4 ml-1">
                  <Icon
                    path={mdiBagChecked}
                    size={0.8}
                    color={"text-text-light"}
                  />{" "}
                  <span className="text-sm text-black">No department</span>
                </li>
                <li className="flex items-center space-x-4 ml-1">
                  <Icon
                    path={mdiCityVariantOutline}
                    size={0.8}
                    color={"text-text-light"}
                  />{" "}
                  <span className="text-sm text-black">Htmlstream</span>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <span className="text-text-light text-xs py-3 block uppercase">
                Contacts
              </span>
              <ul className="space-y-3">
                <li className="flex items-center space-x-4 ml-1">
                  <Icon path={mdiGmail} size={0.8} color={"text-text-light"} />{" "}
                  <span className="text-sm text-black">ella@site.com</span>
                </li>
                <li className="flex items-center space-x-4 ml-1">
                  <Icon
                    path={mdiCellphone}
                    size={0.8}
                    color={"text-text-light"}
                  />{" "}
                  <span className="text-sm text-black">+1 (609) 972-22-22</span>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <span className="text-text-light text-xs py-3 block uppercase">
                Teams
              </span>
              <ul className="space-y-3">
                <li className="flex items-center space-x-4 ml-1">
                  <Icon
                    path={mdiAccountGroup}
                    size={0.8}
                    color={"text-text-light"}
                  />{" "}
                  <span className="text-sm text-black">Member of 7 teams</span>
                </li>
                <li className="flex items-center space-x-4 ml-1">
                  <Icon
                    path={mdiNoteMultipleOutline}
                    size={0.8}
                    color={"text-text-light"}
                  />{" "}
                  <span className="text-sm text-black">
                    Working on 8 projects
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CustomProfileComponent>
      </div>
    </>
  );
};
