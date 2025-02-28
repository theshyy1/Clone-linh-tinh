import Icon from "@mdi/react";
import {
  mdiMapMarkerOutline,
  mdiCalendarClockOutline,
  mdiCityVariantOutline,
} from "@mdi/js";
import { NavigateProfileContainer } from "./navigate-profile-container";
import { mdilCheck } from "@mdi/light-js";

export const HeadingProfileContainer = () => {
  return (
    <div className="pt-8 border-b border-gray-300">
      <div className="h-[150px] bg-blue-300 rounded-xl w-full" />
      <div className="flex flex-col place-items-center space-y-3  translate-y-[-90px]">
        <img
          src="https://picsum.photos/120/120"
          alt=""
          className="object-contain rounded-full border-4"
        />
        <div className="flex items-center text-3xl font-bold space-x-3">
          <span>Ella Lauda</span>
          <span className="flex justify-center h-7 w-7 rounded-full bg-blue-600">
            <Icon path={mdilCheck} size={1} color={"white"} />
          </span>
        </div>
        <ul className="flex space-x-4 items-center text-text-light">
          <li className="flex items-center space-x-2 ">
            <Icon path={mdiCityVariantOutline} size={0.8} />{" "}
            <span>Htmlstream</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600">
            <Icon path={mdiMapMarkerOutline} size={0.8} />{" "}
            <a href="#">San Francisco, US</a>
          </li>
          <li className="flex items-center space-x-2">
            <Icon path={mdiCalendarClockOutline} size={0.8} />{" "}
            <span>Joined March</span>
            2017
          </li>
        </ul>
      </div>
      <NavigateProfileContainer />
    </div>
  );
};
