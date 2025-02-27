import { useContext, useState } from "react";
import { SingleProjectItem } from "../../components/items/single-project-item";
import { ProjectContext } from "../../contexts/project/list-project-context";
import { IProject } from "../../models/project-model";
import { HeadingListContainer } from "./heading-project-container";
import { Button } from "../../components/common/button";

export const ListProjectContainer = () => {
  const {
    allProjects,
    setAllProjects,
    filteredProjects,
    setFilteredProjects,
    isOpenForm,
    setOpenForm,
  } = useContext(ProjectContext);
  const [sortKey, setSortKey] = useState<keyof IProject | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortProject = (key: keyof IProject) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedProjects = sortKey
    ? filteredProjects.sort((a, b) => {
        const aValue =
          sortKey === "progress"
            ? parseFloat(a[sortKey].replace("%", ""))
            : a[sortKey];
        const bValue =
          sortKey === "progress"
            ? parseFloat(b[sortKey].replace("%", ""))
            : b[sortKey];
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : allProjects;

  const handleSortProject = (key: keyof IProject) => {
    sortProject(key);
    setAllProjects(sortedProjects);
    setFilteredProjects(sortedProjects);
  };

  return (
    <>
      <HeadingListContainer handleSortProject={handleSortProject} />
      <div
        className={`${isOpenForm ? "h-[270px]" : "h-[640px]"} space-y-4 overflow-y-auto pt-2.5`}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects?.map((sum) => (
            <SingleProjectItem key={sum.id} sum={sum} />
          ))
        ) : (
          <div className="h-full flex flex-col justify-center items-center">
            <img
              src="https://thumb.ac-illust.com/02/02274a31b8806dea6f1fd854391fd61c_t.jpeg"
              alt="No data to show"
              className="w-full object-contain size-[200px]"
            />
            <span className="text-gray-400">No data to show</span>
            <Button
              onClick={() => setOpenForm((prev) => !prev)}
              className="bg-gray-300/50 px-10 text-black rounded mt-4"
            >
              New project now!
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
