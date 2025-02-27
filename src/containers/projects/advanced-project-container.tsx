import React, { useContext, useState } from "react";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus } from "@mdi/js";
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
          className="bg-gray-300/50 px-10 text-black rounded mr-2"
          icon={<Icon path={isOpenForm ? mdiMinus : mdiPlus} size={0.8} />}
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
          className="flex items-center border-b border-black bg-transparent px-[14px] py-[9px] text-sm outline-none hover:opacity-60"
        />
        <Dropdown
          label="Status"
          field="status"
          fieldItems={projectStatus}
          filters={handleFilterBySelect}
          classnames="bg-gray-300/50 rounded"
        />
      </div>
    </div>
  );
};
