import { IProject } from "../models/project-model";

export const getProjectsLocal = () => {
  const savedProjects = localStorage.getItem("projects");
  return savedProjects ? JSON.parse(savedProjects) : [];
};

export const saveProjectsLocal = (projects: IProject[]) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};
