import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useContext, useEffect, useState } from "react";
import { getUniqueValues } from "../../common/common";
import { Button } from "../../components/common/button";
import { UserContext } from "../../contexts/users/users-context";

export const FilterUserContainer = () => {
  const { allUsers, filterModal, setFilterModal, setFilteredUsers } =
    useContext(UserContext);
  const [positionFilter, setPositionFilter] = useState<string>("all");
  const [statusFilter, setstatusFilter] = useState<string>("all");
  const [countryFilter, setcountryFilter] = useState<string>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");

  useEffect(() => {
    filterUserBySelect();
  }, [positionFilter, statusFilter, countryFilter, roleFilter]);

  const filterUserBySelect = () => {
    let results = allUsers;
    if (positionFilter !== "all") {
      results = results.filter((item) => item.position === positionFilter);
    }
    if (statusFilter !== "all") {
      results = results.filter((item) => item.status === statusFilter);
    }
    if (countryFilter !== "all") {
      results = results.filter(
        (item) => item.location.country === countryFilter
      );
    }
    if (roleFilter !== "all") {
      results = results.filter((item) => item.role === roleFilter);
    }

    setFilteredUsers(results);
  };

  const handleReset = () => {
    setPositionFilter("all");
    setstatusFilter("all");
    setcountryFilter("all");
  };

  const optionsStatus = getUniqueValues(allUsers, "status");
  const optionsPosition = getUniqueValues(allUsers, "position");
  const optionsCountry = getUniqueValues(allUsers, "location");

  return (
    <>
      {filterModal && (
        <div className="absolute top-20 right-4 z-10 w-[320px] h-[420px] border rounded-md shadow-md bg-white">
          <div className="flex items-center px-4 py-2 justify-between border-b border-text-light">
            <span className="font-bold text-sm">Filter users</span>
            <span
              className="block p-3 cursor-pointer"
              onClick={() => setFilterModal(false)}
            >
              <Icon
                path={mdiClose}
                size={0.7}
                className="text-text-light hover:opacity-90 cursor-pointer"
              />
            </span>
          </div>
          <div className="px-4 py-3">
            <p className="pb-4 font-semibold text-[#6b7b8b] text-sm">Role</p>
            <div className="w-full flex justify-around items-center">
              <div className="w-full">
                <input
                  type="checkbox"
                  id="check-all"
                  name="filter-user"
                  value="all"
                  onChange={(event) => setRoleFilter(event.target.value)}
                />{" "}
                <label htmlFor="check-all">All</label>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="check-employee"
                  name="filter-user"
                  onChange={(event) => setRoleFilter(event.target.value)}
                  value="Employee"
                />{" "}
                <label htmlFor="check-employee">Employee</label>
              </div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="w-full">
                <span className="block text-xs font-semibold text-[#6b7b8b] uppercase py-3">
                  Position
                </span>
                <select
                  onChange={(event) => setPositionFilter(event.target.value)}
                  className="p-3 rounded bg-transparent border border-[#6b7b8b] w-[90%] text-text-light"
                >
                  <option value="" hidden>
                    Any
                  </option>
                  <option value={positionFilter}>All</option>
                  {optionsPosition.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <span className="block text-xs font-semibold text-[#6b7b8b] uppercase py-3">
                  Status
                </span>
                <select
                  onChange={(event) => setstatusFilter(event.target.value)}
                  className="p-3 rounded bg-transparent border border-[#6b7b8b] w-[90%] text-text-light"
                >
                  <option value="" hidden>
                    Any Status
                  </option>
                  <option value={statusFilter}>All</option>
                  {optionsStatus.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full">
              <span className="block text-xs font-semibold text-[#6b7b8b] uppercase py-3">
                location
              </span>

              <select
                onChange={(event) => setcountryFilter(event.target.value)}
                className="p-3 rounded bg-transparent border border-[#6b7b8b] w-full text-text-light"
              >
                <option value="" hidden>
                  Select a country
                </option>
                <option value={countryFilter}>All</option>
                {optionsCountry.map((option, index) => (
                  <option key={index} value={option.country}>
                    {option.country}
                  </option>
                ))}
              </select>
            </div>
            <Button
              onClick={handleReset}
              className="text-center text-white bg-blue-700 w-full my-5 py-3 rounded"
            >
              Reset
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
