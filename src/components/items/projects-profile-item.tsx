interface IProps {
  project: {
    id: number;
    image: string;
    nameProject: string;
    timeUpdated: string;
    progress: number;
    spentTime: string;
  };
}

export const ProjectProfileItem = ({ project }: IProps) => {
  const { nameProject, progress, timeUpdated, spentTime, image } = project;
  return (
    <li className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-4 w-[45%]">
        <img
          src={image || "https://picsum.photos/40/40"}
          alt=""
          className="block col-span-4 rounded-full object-contain"
        />
        <div className="flex flex-col space-y-1">
          <span className="text-black font-semibold">{nameProject}</span>
          <span className="text-text-light text-sm">Updated {timeUpdated}</span>
        </div>
      </div>
      <span className="flex items-center w-[40%] space-x-4 mr-5">
        <span className="text-sm text-text-light">{progress}%</span>
        <div className="relative w-full h-1 rounded-full bg-slate-400">
          <span
            className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </span>
      <span className="w-[15%] text-right text-sm text-text-light">
        {spentTime}
      </span>
    </li>
  );
};
