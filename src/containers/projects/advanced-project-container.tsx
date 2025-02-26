import { mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useContext, useState } from "react";
import { getUniqueValues, removeAccents } from "../../common/common";
import { Dropdown } from "../../components/common/Dropdown";
import { Button } from "../../components/common/button";
import { ProjectContext } from "../../contexts/project/list-project-context";
import { IProject } from "../../models/project-model";

export const AdvancedProjectContainer = () => {
  const {
    allProjects,
    filteredProjects,
    setFilteredProjects,
    isOpenForm,
    setOpenForm,
  } = useContext(ProjectContext);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleFilterBySelect = (field: keyof IProject, value: string) => {
    if (value === "all") {
      setFilteredProjects(allProjects);
    } else {
      const values = allProjects.filter(
        (proj: IProject) => proj[field] === value
      );
      setFilteredProjects(values);
    }
  };

  const searchByManagers = () => {
    const searchString = removeAccents(searchValue.toLowerCase());
    if (searchString === "") {
      return allProjects;
    } else {
      return filteredProjects.filter((manager) => {
        return removeAccents(manager.manager.toLowerCase()).includes(
          searchString
        );
      });
    }
  };

  const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      setFilteredProjects(searchByManagers);
    }
  };

  const projectStatus = getUniqueValues(allProjects, "status");

  return (
    <div className="flex items-center justify-between">
      <span className="text-base font-semibold">Project Summary</span>
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => setOpenForm((prev) => !prev)}
          className="bg-white px-10 text-black rounded-full font-semibold mr-2"
          icon={
            isOpenForm ? (
              <Icon path={mdiMinus} size={1} />
            ) : (
              <Icon path={mdiPlus} size={1} />
            )
          }
        >
          {isOpenForm ? "Close" : "New project"}
        </Button>
        <input
          type="text"
          name="search-manager"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Enter a manager ..."
          onKeyDown={handleSearchEnter}
          className="flex items-center rounded-full bg-white px-[14px] py-[9px] text-sm outline-none hover:opacity-60"
        />
        <Dropdown
          label="Status"
          field="status"
          fieldItems={projectStatus}
          filters={handleFilterBySelect}
        />
      </div>
    </div>
  );
};
