export interface IProject {
  id: number;
  name: string;
  manager: string;
  date: string;
  status: string;
  progress: string;
}

export interface FormValues {
  id?: number;
  name: string;
  manager: string;
  date: string;
  status: string;
  progress: number;
}
