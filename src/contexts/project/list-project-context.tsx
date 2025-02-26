import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { getProjectsLocal } from "../../common/storage";
import { IProject } from "../../models/project-model";

interface ProjectContextInterface {
  allProjects: IProject[];
  filteredProjects: IProject[];
  detailPreview: IProject | null;
  selectedItem: IProject | null;
  isOpenForm: boolean;
  titleHeader: string;
  setAllProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  setDetailPreview: React.Dispatch<React.SetStateAction<IProject | null>>;
  addProject: (project: IProject) => void;
  deleteProject: (id: number) => void;
  updateProject: (project: IProject) => void;
  setSelectedItem: React.Dispatch<React.SetStateAction<IProject | null>>;
  handleEditStart: (item: IProject | null) => void;
  handleEditDone: () => void;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  setTitleHeader: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: ProjectContextInterface = {
  allProjects: getProjectsLocal() || [],
  filteredProjects: [],
  detailPreview: null,
  selectedItem: null,
  titleHeader: "",
  setAllProjects: () => null,
  setFilteredProjects: () => null,
  setDetailPreview: () => null,
  addProject: () => null,
  deleteProject: () => null,
  updateProject: () => null,
  setSelectedItem: () => null,
  handleEditStart: () => null,
  handleEditDone: () => null,
  isOpenForm: false,
  setOpenForm: () => null,
  setTitleHeader: () => null,
};

export const ProjectContext =
  createContext<ProjectContextInterface>(initialState);
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [allProjects, setAllProjects] = useState<IProject[]>(
    initialState.allProjects
  );
  const [filteredProjects, setFilteredProjects] = useState([...allProjects]);
  const [selectedItem, setSelectedItem] = useState<IProject | null>(null);
  const [detailPreview, setDetailPreview] = useState<IProject | null>(
    initialState.detailPreview
  );
  const [isOpenForm, setOpenForm] = useState(false);
  const [titleHeader, setTitleHeader] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(allProjects));
  }, [allProjects, setAllProjects, setSelectedItem, selectedItem]);

  const addProject = (project: IProject) => {
    setFilteredProjects((prev) => [project, ...prev]);
    setAllProjects((prev) => [project, ...prev]);
    toast.success("Successfully");
  };

  const deleteProject = (id: number) => {
    if (!window.confirm(`Are you sure you wanna delete this id: ${id}`)) return;

    setFilteredProjects((prev) => prev.filter((project) => project.id !== id));
    setAllProjects((prev) => prev.filter((project) => project.id !== id));
    toast.error("Successfully");
  };

  const updateProject = (project: IProject) => {
    if (!project) return;
    const projectsUpdated = allProjects.map((item) => {
      if (item.id === project.id) {
        return project;
      } else {
        return item;
      }
    });
    setAllProjects(projectsUpdated);
    setFilteredProjects(projectsUpdated);
    toast.success("Successfully");
  };

  const handleEditStart = (item: IProject | null) => {
    setSelectedItem(item);
    setOpenForm(true);
  };
  const handleEditDone = () => {
    setSelectedItem(null);
    setOpenForm(false);
  };

  const value = useMemo(
    () => ({
      allProjects,
      filteredProjects,
      isOpenForm,
      detailPreview,
      selectedItem,
      titleHeader,
      setAllProjects,
      setFilteredProjects,
      setDetailPreview,
      addProject,
      deleteProject,
      updateProject,
      setSelectedItem,
      handleEditStart,
      handleEditDone,
      setOpenForm,
      setTitleHeader,
    }),
    [allProjects, isOpenForm, filteredProjects, selectedItem, detailPreview]
  );
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
