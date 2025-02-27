import { AdvancedProjectContainer } from "../containers/projects/advanced-project-container";
import { CreateProjectContainer } from "../containers/projects/create-project-container";
import { ListProjectContainer } from "../containers/projects/list-project-container";
import { ProjectProvider } from "../contexts/project/list-project-context";

export const ProjectScreen = () => {
  return (
    <ProjectProvider>
      <div className="bg-white relative h-full p-[18px] pb-[29px]">
        <AdvancedProjectContainer />
        <CreateProjectContainer />
        <ListProjectContainer />
      </div>
    </ProjectProvider>
  );
};
